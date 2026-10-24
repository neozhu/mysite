---
title: '支持水印与签章的 PDF 生成 API'
image: /uploads/illustrations/cuate/pdf-generator-api.png
date: 2025-04-03 00:00:00
tags: ["GitHub", "PDF", "ASP.NET Core", "Playwright", "API"]
description: "基于 .NET Minimal API 与 Microsoft.Playwright 的网页/HTML 转 PDF 服务，支持动态斜向水印、底部电子签章叠加、API Key 鉴权与 Swagger 文档。"
summary: "传入网页 URL 或完整 HTML 即可通过无头 Chromium 渲染标准 A4 PDF。支持在渲染前动态注入自适应字号水印与高优图层签章图片，并提供完整的鉴权与接口文档。"
seo:
  title: "基于 .NET 与 Playwright 的 PDF 生成 API | BlazorStudio"
  description: "使用 .NET 9 Minimal API 与 Playwright 将 URL 或 HTML 转换为 PDF，支持动态文字水印、印章叠加、API Key 认证与 Docker 部署。"
slug: "pdf-generation-api-with-watermark-and-stamp"
---

{{< brick_title >}}
{{< button "在 GitHub 上查看" "https://github.com/neozhu/PdfGeneratorApi" >}}
{{< /brick_title >}}

## 项目概述

这是一个基于 .NET 9 Minimal API 构建的轻量级 PDF 生成服务，底层使用 [Microsoft.Playwright](https://playwright.dev/dotnet/) 驱动无头 Chromium 浏览器，支持从网页 URL 或完整的 HTML 内容渲染导出高保真 PDF 文档。服务内置动态水印与电子签章能力，可在生成的 PDF 页面上叠加自定义斜向半透明水印文字与右下角印章图片，并提供 API Key 鉴权保护与 Swagger/OpenAPI 交互式文档。

## 核心特性

- **从 URL 生成 PDF：** 访问任意可公开或内网可达的网页 URL 并将其完整渲染为 PDF 文档。
- **从 HTML 生成 PDF：** 直接接收完整 HTML 字符串并在无头浏览器中渲染导出 PDF。
- **动态文字水印：**
  - 根据水印文本长度自动计算并调整字号大小。
  - 采用 `-45°` 对角线旋转与半透明样式，兼顾防伪标识与正文可读性。
  - 内置长文本自动换行逻辑，防止水印文字溢出或重叠。
- **自定义电子签章：**
  - 支持上传印章图片并自动转化为 Base64 图层注入页面右下角。
  - 采用高 `z-index` 与合理的边距定位，确保签章清晰叠加在文档顶层。
- **API Key 安全鉴权：** 所有接口均通过请求头 `X-API-KEY` 进行校验保护。
- **Swagger/OpenAPI 集成：** 自动生成接口说明与在线调试面板。

## API 接口

### 1. 从 URL 生成 PDF

- **路径：** `/api/pdf/from-url`
- **方法：** `POST`
- **请求参数：**
  - `url`（string，必填）：要渲染的网页 URL。
  - `watermarkText`（string，可选）：叠加在页面上的水印文字。
  - `stampImageFile`（IFormFile，可选）：作为电子签章叠加的图片文件。

### 2. 从 HTML 生成 PDF

- **路径：** `/api/pdf/from-html`
- **方法：** `POST`
- **请求参数：**
  - `htmlContent`（string，必填）：完整的 HTML 文档字符串。
  - `watermarkText`（string，可选）：叠加在页面上的水印文字。
  - `stampImageFile`（IFormFile，可选）：作为电子签章叠加的图片文件。

## 工作原理

1. **无头页面渲染：** 通过 Playwright 启动无头 Chromium 实例，导航至目标 URL 或加载传入的 HTML 内容。
2. **动态水印注入：** 若请求包含 `watermarkText`，服务通过 JavaScript 动态向 DOM 注入居中、`-45°` 旋转、半透明且自适应字号与行高的水印容器。
3. **动态签章叠加：** 若上传了签章图片，服务将其编码为 Base64 Data URL 并以固定定位（`position: fixed`）注入页面右下角。
4. **A4 PDF 导出：** 页面与覆盖图层渲染完成后，调用 Playwright 的 PDF 导出能力生成保留背景图形的标准 A4 文档。

## 本地运行与 Docker 部署

### 环境要求

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- Docker（可选，用于容器化部署）

### 本地启动步骤

1. **克隆代码仓库：**
   ```bash
   git clone https://github.com/neozhu/PdfGeneratorApi.git
   cd PdfGeneratorApi
   ```

2. **配置 API Key：**
   在 `appsettings.json` 或环境变量中配置 `ApiKey`：
   ```json
   {
     "ApiKey": "YOUR_SECRET_API_KEY"
   }
   ```

3. **启动应用：**
   首次运行时程序会自动调用 `Microsoft.Playwright.Program.Main(new string[] { "install" })` 安装 Chromium 依赖：
   ```bash
   dotnet run
   ```

### 客户端调用示例

```bash
curl -X POST "http://localhost:5000/api/pdf/from-url" \
  -H "X-API-KEY: YOUR_API_KEY" \
  -F "url=https://example.com" \
  -F "watermarkText=Confidential Document" \
  -F "stampImageFile=@/path/to/stamp.png" --output generated_from_url.pdf
```

## 技术依赖

- .NET 9 Minimal APIs
- Microsoft.Playwright
- Swashbuckle / Microsoft.OpenApi

## 开源许可

本项目基于 MIT 许可证开源。
