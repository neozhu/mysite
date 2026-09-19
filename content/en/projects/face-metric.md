---
title: 'Face Metric - Human-Centred Facial Resemblance'
image: /uploads/illustrations/cuate/face-metric-showcase.png
date: 2026-09-19 00:00:00
tags:
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/face-metric" >}}
{{< button "Live Demo" "https://face-metric.blazorserver.com" >}}
{{< /brick_title >}}

Face Metric is an open-source, dark-first web application that compares two face images and presents an intuitive resemblance score. It is designed for likeness and kinship-style comparisons—such as relatives, siblings, parents and children, or couples—rather than binary identity verification.

Conventional recognition systems are optimized to decide whether two images show the same person. Face Metric takes a different approach: it combines multiple face embeddings with a human-calibrated similarity curve, then explains the result through qualitative traits and a natural-language summary.

## Key Features

- **Human-centred scoring:** Converts model similarity into an intuitive continuous resemblance score.
- **Multi-model fusion:** Combines ArcFace and Facenet512 embeddings for a more balanced comparison.
- **Reliable alignment:** Uses RetinaFace landmark alignment with an automatic fallback path.
- **Trait-level explanation:** Highlights shared characteristics such as expression, eye area, jawline, and facial contour.
- **Responsive comparison flow:** Provides side-by-side desktop cards and a touch-friendly stacked mobile layout.
- **Flexible photo input:** Supports drag-and-drop uploads and mobile camera capture.
- **Technical transparency:** Keeps cosine distance, model fusion, and confidence details available in a collapsible engineering view.

## Privacy by Design

Uploaded images are processed in memory for the active request and are not persisted to disk. This keeps the default workflow focused on the comparison result without building a photo archive. As with any face-analysis tool, results are probabilistic and should be treated as an exploratory similarity measure—not as identity proof, biometric authentication, or a medical conclusion.

## Architecture and Technology

The frontend uses **Next.js 16**, **React 19**, and **Tailwind CSS**. A **FastAPI** service performs image processing with **DeepFace**, **TensorFlow**, and **OpenCV**. RetinaFace handles detection and alignment, while ArcFace and Facenet512 provide the embeddings used by the fusion and calibration pipeline.

The repository includes Docker deployment support, a command-line comparison utility, and Playwright end-to-end tests for desktop and mobile workflows. Face Metric is released under the MIT License and can be explored or adapted through GitHub.
