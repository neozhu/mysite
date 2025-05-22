---
title: 'Face Extraction API with Flask and DeepFace'
image: /uploads/illustrations/cuate/face-extraction-api.png
date: 2025-04-03 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/face-extraction-api" >}}
{{< /brick_title >}}

## Description

A simple Flask-based API that extracts the face with the highest confidence score from an image, expands its bounding box by 20%, and returns the cropped face as a downloadable JPEG file, without persisting it on the server. The API supports two methods for image input: providing an image URL or uploading an image file directly.

## Features

- **Image URL Input:** Supports processing images by downloading them from a provided URL.
- **File Upload:** Accepts image files uploaded directly via a `multipart/form-data` POST request.
- Utilizes the DeepFace library, specifically the Yunet detector, for face detection.
- Automatically selects the face detected with the highest confidence score.
- Enlarges the bounding box of the detected face by 20% to ensure complete capture.
- Provides the cropped face image as a downloadable JPEG attachment.
- **Minio Integration:** Features optional endpoints for uploading the extracted face (or the original image with the detected face highlighted) directly to a Minio object storage server.

## Example

The following demonstrates the original image and the cropped face image side by side:

<p>
  <img src="/uploads/photos/faceextraction/original_image.jpg" alt="Original Image" width="45%" style="display: inline-block; margin-right: 5%;" />
  <img src="/uploads/photos/faceextraction/extracted_face.jpg" alt="Cropped Face Image" width="41%" style="display: inline-block;" />
</p>

## Requirements

- Python 3.9+
- Docker (optional, for containerized deployment)

## Installation and Running Locally

1.  Clone this repository to your local machine:
    ```bash
    git clone https://github.com/neozhu/face-extraction-api.git 
    # Replace with your fork if necessary
    cd face-extraction-api
    ```

2.  Install the required Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3.  Create a `.env` file in the project's root directory and populate it with your Minio server configuration details, similar to the example below:
    ```ini
    # Example .env Configuration
    MINIO_ENDPOINT=minio.example.com
    MINIO_ACCESS_KEY=YOUR_MINIO_ACCESS_KEY
    MINIO_SECRET_KEY=YOUR_MINIO_SECRET_KEY
    MINIO_BUCKET_NAME=your-target-bucket
    ```
    Ensure you replace placeholder values with your actual Minio credentials and endpoint.

4.  Run the Flask application:
    ```bash
    python app.py
    ```

The API will then be available at `http://localhost:5000`.

## Running with Docker

1. Build the Docker image:
   ```bash
   docker build -t face-extraction-api .
   ```

2.  Run the Docker container, mapping port 5000:
    ```bash
    docker run -p 5000:5000 face-extraction-api
    ```
    (Ensure your `.env` file is accessible to Docker if not using build arguments for secrets.)

3.  Example Docker Compose configuration:
   ```yml
   version: '3.8'
   services:
     face-extraction-api:
       image: blazordevlab/face-extraction-api:latest
       container_name: faceextraction
       ports:
         - "5000:5000"
       labels:
         - "traefik.enable=true"
         # Replace 'faceextraction.example.com' with your actual domain
         - "traefik.http.routers.faceextraction.rule=Host(`faceextraction.example.com`)"
         - "traefik.http.routers.faceextraction.tls=true"
         - "traefik.http.routers.faceextraction.entrypoints=https"
         - "traefik.http.services.faceextraction.loadbalancer.server.port=5000"
         - "traefik.docker.network=proxy"
       networks:
         proxy:
       security_opt:
         - no-new-privileges:true
   networks:
      proxy:
         external: true      
   ```

## API Endpoints

### 1. Extract Face by Image URL

- **Endpoint**: `/extract_face`
- **Method**: POST
- **Request Payload**: JSON object containing the `image_url` key.
  
  **Example JSON Payload**:
  ```json
  {
    "image_url": "https://example.com/path/to/your_image.jpg"
  }
  ```

- **Success Response**: Returns the cropped face image as a downloadable JPEG file (`image/jpeg`).

### 2. Extract Face by File Upload

- **Endpoint**: `/upload_extract_face`
- **Method**: POST
- **Request Payload**: `multipart/form-data` with an image file in the `file` field.
  
  **Example using curl**:
  ```bash
  curl -X POST -F "file=@/path/to/your_image.jpg" http://localhost:5000/upload_extract_face --output extracted_face.jpg
  ```

- **Success Response**: Returns the cropped face image as a downloadable JPEG file (`image/jpeg`).

### 3. Extract Face from Image URL and Upload to Minio

- **Endpoint**: `/extract_face_to_minio`
- **Method**: POST
- **Request Payload**: JSON object containing the `image_url` key.
  
  **Example JSON Payload**:
  ```json
  {
    "image_url": "https://example.com/path/to/your_image.jpg"
  }
  ```

- **Success Response**: JSON object with:
  - `status` (string): Operation status (e.g., "success").
  - `message` (string): Confirmation message indicating successful extraction and upload.
  - `url` (string): The full URL of the uploaded cropped face image in Minio.
  - `source_type` (string): Indicates if the source image URL was from the Minio server itself ("minio") or an external location ("external").

### 4. Upload Image, Extract Face, and Upload Both to Minio

- **Endpoint**: `/upload_face_to_minio`
- **Method**: POST
- **Request Payload**: `multipart/form-data` with:
  - An image file in the `file` field.
  - A `path` parameter (string, optional) specifying the target directory in Minio for the original image.
  
  **Example using curl**:
  ```bash
  curl -X POST -F "file=@/path/to/your_image.jpg" -F "path=uploads/test_images" http://localhost:5000/upload_face_to_minio
  ```

- **Success Response**: JSON object with:
  - `status` (string): Operation status.
  - `message` (string): Confirmation of successful upload to Minio.
  - `storage_destination` (string): Confirms the file was uploaded to Minio.
  - `original_url` (string): The full URL of the original uploaded image in Minio.
  - `face_image_url` (string): The full URL of the cropped face image, typically saved under a `faces/` subdirectory relative to the original image path in Minio.

## License

This project is licensed under the MIT License.
