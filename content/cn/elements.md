---
title: Elements
---
{{< brick_title >}}

{{< breadcrumbs >}}

# 页面元素

本页面展示了可用于内容创作的各种页面元素和排版样式。通过这些示例，您可以了解如何在您的网站中使用标题、列表、图片及其他 Hugo 短代码。

{{< /brick_title >}}
{{< brick_wide >}}

此处展示了段落文本的标准样式。段落是构成内容主体的基本元素，用以清晰、连贯地表达信息。我们建议保持段落长度适中，以提升可读性。链接，例如这个[示例链接](https://www.google.com)，可以自然地嵌入文本中。

## 二级标题

这是二级标题下的文本示例。二级标题常用于组织页面内容，将其划分为逻辑清晰的若干部分。每个部分应围绕一个核心主题展开。带有[链接的文本](https://www.google.com)同样可以无缝集成。

### 三级标题

三级标题用于进一步细化二级标题下的内容层级。您可以使用*斜体*或**粗体**来强调[特定词语](https://www.google.com)。请确保标题层级结构清晰，方便读者理解。

#### 四级标题

四级标题提供了更深层次的内容组织。例如，您可以在此详细阐述特定功能或概念。**重要文本**可以使用粗体，而*需要强调的短语*则可使用斜体。

---

## 按钮

按钮是引导用户操作、提升转化率的有效方式。它们本质上是带有 'button' 类名的链接。更多信息请阅读[相关文档](/docs/shortcodes/button/)。

{{< button "免费开始" "/get-started/" >}}

{{< button2 "免费开始" "/get-started/" >}}

按钮下方可以添加补充说明，进一步引导用户或提供上下文信息。
社交媒体按钮方便用户分享内容或关注您的社交账号。

{{< socialbuttons >}}

联系方式按钮则通常用于提供邮件、电话等直接联系途径。

{{< contactbuttons >}}


---

## 无序列表

无序列表用于展示并列的项目，各项之间没有特定的顺序。
- 项目一：可以是[包含链接](https://www.google.com)的文本。
- 项目二：列表项可以是短语或完整的句子。
- 项目三：用于列举特性、优点或相关信息。
- 项目四：确保列表内容简洁明了。
- 项目五：每个列表项都应清晰地传达一个独立的点。

---

## 有序列表

有序列表用于展示有先后顺序或编号的项目。
1. 第一步：描述操作流程或顺序排列的内容。
2. 第二步：列表项可以是[包含链接](https://www.google.com)的文本。
3. 第三步：确保步骤清晰，易于遵循。
4. 第四步：常用于教程、指南或排名。
5. 第五步：每个列表项代表序列中的一个特定环节。

---

## 图片

标准图片展示：

![Unsplash - Ryan Quintal 的乐高图片](/uploads/photos/lego.jpg)

灰度（已着色）图片：

{{< colorize_image "S. Tsuchiya 拍摄于 Unsplash" "/uploads/photos/bricks2.jpg" >}}

---

## 地图

{{< map "/uploads/map.png" "https://www.google.com/maps/place/52%C2%B022'20.1%22N+4%C2%B054'00.4%22E/@52.372253,4.8991072,18z/data=!3m1!4b1!4m4!3m3!8m2!3d52.372253!4d4.9001?entry=ttu" >}}

---

## 行动号召表单 (CTA)

{{< ctaform >}}

---

## 联系表单

{{< contactform >}}

---

## 订阅表单

{{< newsletterform >}}

---

## 引用块

引用块用于突出显示引用的文本或重要的提示信息。下面是一个引用示例：

> 这是引用块的示例内容。它可以包含名言警句、用户评价或需要特别强调的段落。

引用块可以使特定内容在页面上更醒目。

---

## 标签页

标签页可以将内容组织到不同的选项卡中，用户可以点击切换查看。

{{< tabs >}}

## 标签页标题一

这是第一个标签页的内容。您可以在这里放置相关的文本、图片或其他元素。例如，这是一个[链接](https://www.google.com)。

---

## 可点击切换

这是第二个标签页的内容。点击不同的标签标题即可切换显示对应的内容。这有助于在有限的空间内展示更多信息，并保持页面整洁。

---

## 更多标签

这是第三个标签页的内容。您可以根据需要添加任意数量的标签页。每个标签页都可以包含丰富的内容，例如包含[链接](https://www.google.com)的文本、列表、图片等。

{{< /tabs >}}

---
## YouTube 视频

嵌入 YouTube 视频非常简单。您只需提供视频 ID 和一个可选的封面图片。下方是视频嵌入示例的说明文字。

{{< youtube "qtIqKaDlqXo" "/uploads/youtubeposter.jpg" >}}

视频下方可以添加更多说明文字，例如视频内容摘要或相关链接。

---
## Vimeo 视频

同样，嵌入 Vimeo 视频也很便捷。提供视频 ID 和可选的封面图即可。这是 Vimeo 视频嵌入的示例说明。

{{< vimeo id="727145223" image="/uploads/gallery/01.jpg" >}}

确保视频内容与周围文本相关联，提供完整的上下文。

---

## 本地视频

您也可以直接嵌入本地托管的视频文件。这是使用本地视频的示例。

{{< video "/uploads/video/flowers.mp4" >}}

本地视频适用于不希望依赖外部服务或需要更高隐私控制的场景。

---
## 音频

嵌入音频文件，如播客或音乐片段，同样受支持。

{{< audio "/uploads/audio/jamming.mp3" >}}

音频文件可以配合文本内容，提供更丰富的用户体验。

---
## 常见问题解答 (F.A.Q.)

此部分用于展示常见问题解答的样式。通常使用折叠面板或类似组件来组织问答内容。

{{< faq 1 >}}

在 FAQ 部分，每个问题都应该清晰明了，并且答案要简洁准确。

---
## 相册

相册组件用于展示一系列图片。您可以指定包含图片的目录。

{{< gallery dir="/uploads/gallery/" >}}

相册是展示产品图片、活动照片或作品集的理想选择。

{{< /brick_wide >}}
