# ShoeUniverse

ShoeUniverse is a shoe e-commerce website that offers a unique feature: a machine learning model for classifying shoes into different categories. The application consists of a React frontend and a Flask backend. The primary feature of the application is the `ModelPage`, where users can upload or capture images of shoes to get predictions about the type of shoe.

## Project Structure

```
shoeuniverse/
├── backend/
│   ├── app.py
│   ├── requirements.txt
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   └── ModelPage.jsx
│   ├── App.jsx
├── shoefitz1.keras
├── package.json
├── package-lock.json
└── requirements.txt
```

## Setup Instructions

### Flask Backend

1. **Navigate to the backend directory**:
   ```bash
   cd shoeuniverse/backend
   ```

2. **Install the dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask app**:
   ```bash
   python app.py
   ```

### React Frontend

1. **Navigate to the root of the shoeuniverse directory**:
   ```bash
   cd shoeuniverse
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the React app**:
   ```bash
   npm start
   ```

## ModelPage

The `ModelPage` is the core feature of the ShoeUniverse application. It allows users to either upload an image of a shoe or capture an image using their webcam. The image is then sent to the Flask backend, which uses a pre-trained TensorFlow model to classify the shoe.

### Key Features

- **Image Upload**: Users can upload an image file from their device.
- **Camera Capture**: Users can capture an image using their webcam.
- **Prediction Display**: The predicted class of the shoe and the confidence level are displayed on the page.

### Code Overview

#### `ModelPage.jsx`

```javascript:shoeuniverse/src/pages/ModelPage.jsx
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
```

### Flask Backend

The Flask backend handles the image upload and prediction using a pre-trained TensorFlow model.

#### `app.py`

```python:shoeuniverse/backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image, ImageOps
import io
import os

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend

# Load the trained model
model_path = os.path.join(os.path.dirname(__file__), '../shoefitz1.keras')
model = tf.keras.models.load_model(model_path)

# Define class names
class_names = ['Boots', 'Heels', 'Sandals', 'Sneakers']

# Function to load and preprocess the image
def load_and_preprocess_image(img):
    img = Image.open(io.BytesIO(img))
    img = ImageOps.fit(img, (150, 150), Image.LANCZOS)
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0
    return img_array

# Route to handle image upload and prediction
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        img_array = load_and_preprocess_image(file.read())
        predictions = model.predict(img_array)
        predicted_class = class_names[np.argmax(predictions)]
        confidence = np.max(predictions)

        if confidence < 0.5:  # Threshold for confidence
            return jsonify({'error': 'Sorry, couldn\'t identify your shoe. Please try again later!'}), 400

        return jsonify({'predicted_class': predicted_class, 'confidence': confidence * 100}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
```

## Conclusion

ShoeUniverse is a comprehensive shoe e-commerce application that leverages machine learning to classify shoe types. The `ModelPage` is the core feature, allowing users to upload or capture images and get predictions. The Flask backend handles the image processing and prediction using a pre-trained TensorFlow model. Follow the setup instructions to get the application running locally.
