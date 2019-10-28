---
title: 11ty Collections' Tags Scheme
description: Scheme for organising my blog posts using Eleventy collections' tags
tags: ['post', 'card', 'thought']
date: 2019-10-28
updated: 2019-10-28
layout: layouts/post.njk
---

Scheme: Organise tags for blog posts on my website. /

I use 11ty's collections' `tags` to organise my blog content. In each blog post's front matter, I assign values for the `tags` key. All blog entries have a `tags` key of #post. Then I break out posts into three different main tags: \

- #article: articles are letters to the world that I either write or to which I link
- #note: notes are progress reports on my projects, code tips/tricks/snippets that are worth noting, and other correspondence that are shorter than a letter but longer than a postcard
- #card: postcards provide [titbits](https://chambers.co.uk/search/?query=titbit&title=thes 'Definition of titbits') of content, such as quotes, thoughts and ideas, and images (drawings, photos, etc.) with a splash of banter

The main tags #note and #card have sub-tags that I use to manage similar content.

- #note: #report, #code
- #card: #quote, #thought, #image

Here is the front matter for this blog post showing its `tags` values:

```
---
title: 11ty Collections' Tags Scheme
description: Scheme for organising my blog posts using Eleventy collections' tags
tags: ['post', 'card', 'thought']
date: 2019-10-28
updated: 2019-10-28
layout: layouts/post.njk
---
```
