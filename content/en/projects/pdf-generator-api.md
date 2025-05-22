---
title: 'PDF Generation API with Watermark and Stamp'
image: /uploads/illustrations/cuate/pdf-generator-api.png
date: 2025-04-03 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/PdfGeneratorApi" >}}
{{< /brick_title >}}

## Overview

This lightweight .NET minimal API utilizes [Microsoft.Playwright](https://playwright.dev/dotnet/) for generating PDFs from either a provided URL or complete HTML content. It supports dynamic watermarking and stamping, allowing users to overlay custom watermark text and a stamp image onto the generated PDF. The API is secured via API Key authentication and includes integrated Swagger/OpenAPI documentation for straightforward testing and exploration.

## Features

- **PDF Generation from URL:** Renders any accessible webpage and converts it into a PDF document.
- **PDF Generation from HTML:** Creates a PDF directly from provided complete HTML content.
- **Custom Watermark:**
  - Optionally add watermark text with dynamic font sizing based on text length.
  - The watermark text is styled with an adjustable line height, rotated -45° for a diagonal appearance, and rendered with semi-transparency.
  - Incorporates logic to wrap lengthy watermark text, preventing unsightly overlaps.
- **Custom Stamp:**
  - Optionally add a stamp image to the bottom-right corner.
  - The stamp image is injected onto the top layer with a high z-index and appropriate padding from the page edges.
- **API Key Authentication:** Secures all API endpoints by requiring a valid API key to be provided in the request header.
- **Swagger/OpenAPI Integration:** Features automatically generated API documentation and an interactive testing interface via Swagger UI.

## Endpoints

### Generate PDF from URL

- **Endpoint:** `/api/pdf/from-url`
- **Method:** `POST`
- **Request Parameters:**
  - `url` (string, required): The URL of the webpage to render.
  - `watermarkText` (string, optional): Watermark text to overlay on the PDF.
  - `stampImageFile` (IFormFile, optional): An image file to use as a stamp.

### Generate PDF from HTML

- **Endpoint:** `/api/pdf/from-html`
- **Method:** `POST`
- **Request Parameters:**
  - `htmlContent` (string, required): The complete HTML content to render.
  - `watermarkText` (string, optional): Watermark text to overlay on the PDF.
  - `stampImageFile` (IFormFile, optional): An image file to use as a stamp.

## How It Works

1.  **Page Rendering:**
    The API employs Playwright to launch a headless Chromium browser instance. Based on the called endpoint, it either navigates to a specified URL or renders content directly from the provided HTML string.

2.  **Dynamic Watermark Injection:**
    If watermark text is provided in the request, the API dynamically injects a new DOM element into the page using a JavaScript snippet. This element:
    - Is centered, rotated -45°, and rendered with a semi-transparent style.
    - Adjusts font size dynamically based on the length of the watermark text.
    - Uses line-height and text wrapping logic to ensure the text is fully visible without overlapping.

3.  **Dynamic Stamp Injection:**
    If a stamp image is uploaded, it is converted into a Base64 data URL and subsequently injected into the page as a fixed-position HTML element. The stamp is positioned at the bottom-right corner with appropriate padding and a high z-index to prevent being overlapped by other page elements.

4.  **PDF Document Generation:**
    After the page content is fully rendered, including any dynamically injected watermark or stamp elements, the API utilizes Playwright's robust PDF generation capabilities. It creates an A4-sized PDF document with custom margins and ensures that background graphics are printed correctly.

## Setup and Running

### Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- Docker (optional, for containerized deployment using Docker Compose)

### Local Setup

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/neozhu/PdfGeneratorApi.git 
    # Replace with your fork URL if applicable
    cd PdfGeneratorApi
    ```

2.  **Configure API Key:**

    Set your unique API key in the `appsettings.json` file (or through environment variables for production) under the `ApiKey` setting. For example:
    ```json
    {
      "ApiKey": "YOUR_SECRET_API_KEY",
      // other settings
    }
    ```

3.  **Install Playwright Browsers:**

    Upon first run or if not already present, the application code automatically calls `Microsoft.Playwright.Program.Main(new string[] { "install" });` to download and install the necessary browser binaries for Playwright. You can also run this command manually in the project directory if needed.

4.  **Run the Application:**

    ```bash
    dotnet run
    ```

5.  **Access Swagger UI:**

    While running in development mode, navigate to `http://localhost:<port>/swagger` in your web browser to access the Swagger UI. This interface allows you to explore and test all available API endpoints. (The specific port will be shown in your console output when the application starts).

### Running with Docker Compose

For a streamlined, containerized setup, you can utilize the provided `Dockerfile` and `docker-compose.yml` configuration files.

#### Example Dockerfile
Create a file named `Dockerfile` with the following content:

```dockerfile
# Use the official .NET 9 SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy the project files and restore dependencies
COPY . .
RUN dotnet restore

# Publish the project in Release configuration
RUN dotnet publish -c Release -o /app

# Use the official .NET 9 ASP.NET runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app

# Copy the published app from the build stage
COPY --from=build /app .

# Expose port 80
EXPOSE 80

# Start the application
ENTRYPOINT ["dotnet", "YourProject.dll"]
```

*Note:* Replace `YourProject.dll` with the actual name of your published DLL.

#### Example docker-compose.yml
Create a file named `docker-compose.yml` with the following content:

```yaml
version: '3.8'
services:
  pdfgenerator:
    build: .
    ports:
      - "5000:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
      - ApiKey=YOUR_API_KEY
```

*Note:* Replace `YOUR_API_KEY` with your actual API key. This configuration maps port 80 in the container to port 5000 on your host.

#### Running with Docker Compose:
From the directory containing the `docker-compose.yml` file, run:

```bash
docker-compose up --build
```

The API will be available at [http://localhost:5000](http://localhost:5000).

## Client Test Commands

You can test the API endpoints using `curl` or a similar HTTP client. Below are example commands:

### Test PDF Generation from URL

```bash
curl -X POST "http://localhost:5000/api/pdf/from-url" \
  -H "X-API-KEY: YOUR_API_KEY" \
  -F "url=https://example.com" \
  -F "watermarkText=Confidential Document" \
  -F "stampImageFile=@/path/to/stamp.png" --output generated_from_url.pdf
```

### Test PDF Generation from HTML

```bash
curl -X POST "http://localhost:5000/api/pdf/from-html" \
  -H "X-API-KEY: YOUR_API_KEY" \
  -F "htmlContent=<html><body><h1>Hello, World!</h1></body></html>" \
  -F "watermarkText=Draft Version" \
  -F "stampImageFile=@/path/to/stamp.png" --output generated_from_html.pdf
```

*Notes:*

- Replace `YOUR_API_KEY` with your actual API key in the `X-API-KEY` header.
- Modify the URL, HTML content, watermark text, and stamp image file path in the examples to match your specific test cases.
- The `--output` option in `curl` saves the generated PDF file to your local machine.

## API Key Authentication

All API endpoints are protected using API key authentication. Ensure that every request to the API includes your valid API key in the `X-API-KEY` header. Requests without a valid API key will be rejected.

## Additional Notes

- **Watermark Text Wrapping:**
  The API includes a helper function to intelligently insert line breaks into lengthy watermark texts. This ensures proper display within the PDF and prevents text from overlapping. Additional CSS adjustments, such as line-height and white-space settings, further refine the appearance of the watermark.

- **Customization:**
  The inline JavaScript and CSS snippets responsible for injecting the watermark and stamp elements can be readily modified. This allows for customization to better align with specific visual design requirements or branding guidelines.

## Dependencies

- .NET 9
- Microsoft.Playwright (for browser automation and PDF generation)
- Microsoft.AspNetCore.Mvc (for API controllers and model binding)
- Microsoft.OpenApi (for Swagger/OpenAPI documentation)

## License

This project is licensed under the MIT License.