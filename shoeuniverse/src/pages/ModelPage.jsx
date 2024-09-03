import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import { FaCamera, FaUpload } from 'react-icons/fa';
import axios from 'axios';

const ModelPage = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        sendImageToBackend(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => {
        console.error("Error accessing camera: ", err);
      });
  };

  const takePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageData = canvasRef.current.toDataURL('image/png');
    setImageSrc(imageData);
    videoRef.current.srcObject.getTracks().forEach(track => track.stop());

    // Convert data URL to Blob
    fetch(imageData)
      .then(res => res.blob())
      .then(blob => {
        sendImageToBackend(blob);
      });
  };

  const sendImageToBackend = (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);

    axios.post('http://localhost:5000/predict', formData)
      .then(response => {
        setPrediction(response.data);
      })
      .catch(error => {
        setPrediction({ error: error.response.data.error });
      });
  };

  return (
    <div className="bg-[#D9F3FF] min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-10">
        <h2 className="text-[#00A3FF] text-2xl font-bold mb-4">SHOEFITZ CLASSIFIER</h2>
        <div className="w-80 h-60 bg-gray-300 flex items-center justify-center mb-4">
          {imageSrc ? (
            <img src={imageSrc} alt="Uploaded" className="max-w-full max-h-full object-contain" />
          ) : (
            <div>
              <video ref={videoRef} className="max-w-full max-h-full object-contain"></video>
              <button onClick={takePhoto} className="mt-2 text-[#0050B6]">Capture Photo</button>
            </div>
          )}
        </div>
        <div className="flex space-x-10">
          <button onClick={handleCapture} className="flex flex-col items-center text-[#0050B6]">
            <FaCamera size={50} />
            <span className="mt-2">Take Photo</span>
          </button>
          <label className="flex flex-col items-center text-[#0050B6] cursor-pointer">
            <FaUpload size={50} />
            <span className="mt-2">Upload Photo</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>
        <canvas ref={canvasRef} className="hidden" width="640" height="480"></canvas>
        {prediction && (
          <div className="mt-4 text-center">
            {prediction.error ? (
              <p className="text-red-500">{prediction.error}</p>
            ) : (
              <p className="text-green-500">Predicted: {prediction.predicted_class} ({prediction.confidence.toFixed(2)}%)</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelPage;