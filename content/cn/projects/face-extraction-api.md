---
title: '基于 Flask 与 DeepFace 的人脸提取 API'
image: /uploads/illustrations/cuate/face-extraction-api.png
date: 2025-04-03 00:00:00
tags: ["GitHub", "Flask", "DeepFace", "Computer Vision", "API"]
description: "基于 Flask 与 DeepFace (YuNet) 的轻量级人脸检测与裁剪 API，支持通过图片 URL 或文件上传提取最高置信度人脸，并可选集成 Minio 对象存储。"
summary: "服务自动选取置信度最高的人脸并向外扩展 20% 裁剪区域以保留自然边缘细节。提供 URL 输入、文件上传、JPEG 流式下载以及 Minio 存储归档接口。"
seo:
  title: "基于 Flask 与 DeepFace 的人脸提取 API | BlazorStudio"
  description: "使用 Flask、DeepFace 与 YuNet 检测器从图片 URL 或上传文件中提取人脸裁剪图，支持直接返回 JPEG 流或自动上传至 Minio 对象存储。"
slug: "face-extraction-api-with-flask-and-deepface"
---

{{< brick_title >}}
{{< button "在 GitHub 上查看" "https://github.com/neozhu/face-extraction-api" >}}
{{< /brick_title >}}

## 项目简介

这是一个基于 Flask 的轻量级 API 服务，可从输入图像中检测并提取置信度最高的人脸区域，将边界框向外扩展 20% 以保留完整的面部与边缘细节，并以可下载的 JPEG 文件流形式直接返回，无需在服务器本地持久化存储。该服务支持两种输入方式：提供远程图片 URL，或直接通过表单上传图像文件。

## 核心特性

- **图片 URL 输入：** 支持从远程 URL 自动拉取图像并进行人脸检测。
- **文件直接上传：** 支持通过 `multipart/form-data` POST 请求直接上传本地图片。
- **高精度检测器：** 基于 DeepFace 库并采用 YuNet 检测器进行快速、精准的人脸定位。
- **最高置信度筛选：** 当画面存在多张人脸时，自动选择置信度得分最高的主体人脸。
- **自适应边界扩展：** 将检测到的人脸边界框向外扩展 20%，避免裁切过于局促。
- **流式 JPEG 响应：** 将裁剪后的人脸图像作为可下载的 JPEG 附件直接返回。
- **Minio 对象存储集成：** 提供可选接口，将提取后的人脸图像（或带检测框标注的原图）直接上传至 Minio 对象存储服务器。

## 效果示例

以下并排展示了原始输入图像与自动裁剪提取后的人脸图像对比：

<p>
  <img src="/uploads/photos/faceextraction/original_image.jpg" alt="原始输入图像示例" loading="lazy" decoding="async" width="45%" style="display: inline-block; margin-right: 5%;" />
  <img src="/uploads/photos/faceextraction/extracted_face.jpg" alt="自动裁剪提取的人脸图像" loading="lazy" decoding="async" width="41%" style="display: inline-block;" />
</p>

## 环境要求

- Python 3.9+
- Docker（可选，用于容器化部署）

## 本地安装与运行

1. 克隆仓库到本地：
   ```bash
   git clone https://github.com/neozhu/face-extraction-api.git
   cd face-extraction-api
   ```

2. 安装 Python 依赖项：
   ```bash
   pip install -r requirements.txt
   ```

3. 在项目根目录创建 `.env` 文件并配置 Minio 连接信息：
   ```ini
   # .env 配置示例
   MINIO_ENDPOINT=minio.example.com
   MINIO_ACCESS_KEY=YOUR_MINIO_ACCESS_KEY
   MINIO_SECRET_KEY=YOUR_MINIO_SECRET_KEY
   MINIO_BUCKET_NAME=your-target-bucket
   ```

4. 启动 Flask 应用：
   ```bash
   python app.py
   ```

服务启动后默认监听 `http://localhost:5000`。

## 使用 Docker 部署

1. 构建 Docker 镜像：
   ```bash
   docker build -t face-extraction-api .
   ```

2. 运行容器并映射 5000 端口：
   ```bash
   docker run -p 5000:5000 face-extraction-api
   ```

3. Docker Compose 部署配置示例：
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

## API 接口说明

### 1. 通过图片 URL 提取人脸

- **路径：** `/extract_face`
- **方法：** `POST`
- **请求体：** 包含 `image_url` 字段的 JSON 对象：
  ```json
  {
    "image_url": "https://example.com/path/to/your_image.jpg"
  }
  ```
- **成功响应：** 直接返回裁剪后的人脸 JPEG 文件（`image/jpeg`）。

### 2. 通过文件上传提取人脸

- **路径：** `/upload_extract_face`
- **方法：** `POST`
- **请求体：** `multipart/form-data`，包含 `file` 字段：
  ```bash
  curl -X POST -F "file=@/path/to/your_image.jpg" http://localhost:5000/upload_extract_face --output extracted_face.jpg
  ```
- **成功响应：** 直接返回裁剪后的人脸 JPEG 文件（`image/jpeg`）。

### 3. 从图片 URL 提取人脸并上传至 Minio

- **路径：** `/extract_face_to_minio`
- **方法：** `POST`
- **请求体：** 包含 `image_url` 字段的 JSON 对象。
- **成功响应：** 返回包含 `status`、`message`、`url`（Minio 中的完整访问地址）与 `source_type` 的 JSON。

### 4. 上传图片、提取人脸并同步归档至 Minio

- **路径：** `/upload_face_to_minio`
- **方法：** `POST`
- **请求参数：** `file`（图像文件）与可选 `path`（Minio 存储目录）：
  ```bash
  curl -X POST -F "file=@/path/to/your_image.jpg" -F "path=uploads/test_images" http://localhost:5000/upload_face_to_minio
  ```
- **成功响应：** 返回包含 `original_url` 与 `face_image_url` 的 JSON 结果。

## 开源许可

本项目基于 MIT 许可证开源。
