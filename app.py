from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image, ImageOps
import io

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend

# Load the trained model
model = tf.keras.models.load_model('shoefitz1.keras')

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