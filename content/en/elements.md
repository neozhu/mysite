---
title: Elements
---
{{< brick_title >}}

{{< breadcrumbs >}}

# Content Elements

This page showcases the various content elements and typographical styles available for use. These examples demonstrate how to effectively structure your content using headings, lists, images, and other Hugo shortcodes.

{{< /brick_title >}}
{{< brick_wide >}}

This section illustrates standard paragraph text. Paragraphs form the basic building blocks of your content, conveying information clearly and coherently. For optimal readability, it's advisable to keep paragraphs concise. Links, such as this [example link](https://www.google.com), can be naturally embedded within the text.

## Heading Level 2

This is an example of text under a Level 2 heading. Such headings are typically used to organize page content into distinct, logical sections, each focusing on a core topic. Text with [embedded links](https://www.google.com) can also be seamlessly integrated.

### Heading Level 3

Level 3 headings are used to further subdivide content under Level 2 headings, creating a clear hierarchy. You can use *italics* or **bold text** to emphasize [specific terms](https://www.google.com). Ensure your heading structure is logical to aid reader comprehension.

#### Heading Level 4

Level 4 headings offer an even deeper level of content organization. For instance, you might use them to detail specific features or concepts. **Key phrases** can be highlighted using bold text, while *emphasized terms* can be italicized.

---

## Buttons

Buttons are an effective way to drive user actions and improve conversion rates. They are typically styled links. For more details on usage and customization, refer to the [button shortcode documentation](/docs/shortcodes/button/).

{{< button "Get started for free" "/get-started/" >}}

{{< button2 "Get started for free" "/get-started/" >}}

Additional text can be placed below buttons to provide further context or encourage user interaction.
Social media buttons enable users to easily share content or follow your profiles.

{{< socialbuttons >}}

Contact buttons typically provide direct links for email, phone, or other contact methods.

{{< contactbuttons >}}


---

## Unordered List

Unordered lists are suitable for presenting items where the sequence is not critical.
- List item one: This can include text with [an embedded link](https://www.google.com).
- List item two: Items can be short phrases or complete sentences.
- List item three: Useful for enumerating features, benefits, or related points.
- List item four: Ensure content is concise and clear.
- List item five: Each item should convey a distinct piece of information.

---

## Ordered List

Ordered lists are used to present items in a specific sequence or rank.
1. First step: Describe sequential actions or ordered content.
2. Second step: List items can also contain [links if necessary](https://www.google.com).
3. Third step: Ensure steps are clear and easy to follow.
4. Fourth step: Commonly used for tutorials, guides, or rankings.
5. Fifth step: Each item represents a specific point in the sequence.

---

## Images

Standard image display:

![LEGO bricks by Ryan Quintal on Unsplash](/uploads/photos/lego.jpg)

Grayscale (colorized) image example:

{{< colorize_image "Photo by S. Tsuchiya on Unsplash" "/uploads/photos/bricks2.jpg" >}}

---

## Map Integration

{{< map "/uploads/map.png" "https://www.google.com/maps/place/52%C2%B022'20.1%22N+4%C2%B054'00.4%22E/@52.372253,4.8991072,18z/data=!3m1!4b1!4m4!3m3!8m2!3d52.372253!4d4.9001?entry=ttu" >}}

---

## Call-to-Action (CTA) Form

{{< ctaform >}}

---

## Contact Form

{{< contactform >}}

---

## Newsletter Subscription Form

{{< newsletterform >}}

---

## Blockquote

Blockquotes are used to highlight quoted text or important notes, making them stand out from surrounding content. Below is an example:

> This is an example of a blockquote. It can be used for direct quotations, testimonials, or to emphasize a key message within your content.

Blockquotes help draw the reader's attention to specific information.

---

## Tabbed Content

Tabbed content allows you to organize information into selectable tabs, enabling users to switch between different sections.

{{< tabs >}}

## Tab Title 1

This is the content for the first tab. You can place relevant text, images, or other elements here. For example, this is a [sample link](https://www.google.com).

---

## Tab Title 2 (Clickable)

This is the content for the second tab. Clicking different tab titles will display the corresponding content, which helps in organizing extensive information compactly and keeping the page tidy.

---

## Another Tab Example

This is the content for a third tab. You can add as many tabs as needed. Each tab can contain rich content, including text with [links](https://www.google.com), lists, images, and more.

{{< /tabs >}}

---
## YouTube Video Embedding

Embedding YouTube videos is straightforward. You need to provide the video ID and an optional poster image. Below is an example of an embedded video with accompanying descriptive text.

{{< youtube "qtIqKaDlqXo" "/uploads/youtubeposter.jpg" >}}

Additional text can follow the video, perhaps offering a summary or related links.

---
## Vimeo Video Embedding

Similarly, embedding Vimeo videos is simple. Provide the video ID and an optional poster image. This is an example of an embedded Vimeo video.

{{< vimeo id="727145223" image="/uploads/gallery/01.jpg" >}}

Ensure the video content is relevant to the surrounding text to provide context.

---

## Local Video Embedding

You can also embed locally hosted video files directly. This is an example using a local video.

{{< video "/uploads/video/flowers.mp4" >}}

Local videos are useful when you prefer not to rely on external services or require more privacy control.

---
## Audio Embedding

Embedding audio files, such as podcasts or music clips, is also supported.

{{< audio "/uploads/audio/jamming.mp3" >}}

Audio files can complement textual content and provide a richer user experience.

---
## Frequently Asked Questions (F.A.Q.)

This section demonstrates how to style Frequently Asked Questions. Typically, collapsible panels or similar components are used to organize Q&A content.

{{< faq 1 >}}

In an F.A.Q. section, each question should be clear, and the answer should be concise and accurate.

---
## Image Gallery

The gallery component is used to display a collection of images. You can specify the directory containing the images.

{{< gallery dir="/uploads/gallery/" >}}

Galleries are ideal for showcasing product images, event photos, or portfolio items.

{{< /brick_wide >}}
