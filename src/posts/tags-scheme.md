---
title: 11ty Collections Tags Scheme
description: Scheme for organising my blog posts using Eleventy's collections tags
tags: ['post', 'note', 'code']
date: 2019-10-28
updated: 2019-10-30
layout: layouts/post.njk
---

I use [11ty's collections](https://www.11ty.io/docs/collections/ 'Eleventy static site generator documentation for collections') `tags` to organise my blog content. In each blog post's front matter, I assign values for the `tags` key. All blog entries have a `tags` key of "post," and I break out posts into three different letterbox `tags`: article, note, and card.

<!END clip>

- articles are letters to the world about code or the ultimate question of life
- notes are code tips/tricks/snippets that are worth noting, progress reports on my projects, and other correspondence that are shorter than a letter but longer than a postcard
- postcards provide [titbits](https://chambers.co.uk/search/?query=titbit&title=thes 'Definition of titbits') of content, such as quotes, thoughts, ideas, and images

The letterbox `tags` have sub-`tags` that I use to manage similar content.

- articles: code, life
- notes: code, report
- postcards: idea, image, quote, thought

Here is the front matter of the Markdown file for this blog post showing its `tags` values:

```yaml
---
title: 11ty Collections Tags Scheme
description: Scheme for organising my blog posts using Eleventy's collections tags
tags: ['post', 'note', 'code']
date: 2019-10-28
updated: 2019-10-29
layout: layouts/post.njk
---

```

I use [Nunjucks](https://mozilla.github.io/nunjucks/ 'Nunjucks templating language for JavaScript') to loop through a collection of all items with "post" tags (`for` post `in` collections.post) to populate my template. See my code [here](https://github.com/ThwCorbin/toms-site/blob/master/src/_includes/partials/_posts.njk 'A collection using tags example from my GitHub repository'). 11ty collections gives me access to the following keys for each **item** (a "post"):

- post.inputPath - path to the source input file (./src/posts/tags-scheme.md)
- post.fileSlug - mapped from the input file name (tags-scheme)
- post.outputPath - path to the output file to be written for this content (dist/posts/tags-scheme/index.html)
- post.url - url used to link to this piece of content (/posts/tags-scheme/)
- post.date - the resolved date used for sorting (creation date default / front matter date replaces default)
- post.data: all data for this piece of content (e.g. post.data.tags)
- post.templateContent: the rendered content of this template

I then clip each post with an 11ty filter (see below). The clip goes on my Front Room page, and I provide a link to the full post via `post.url`, which takes the user to an individual post page. 11ty requires slightly different language to access data in a **page**:

- page.inputPath
- page.fileSlug
- page.outputPath
- page.url
- page.date
- content (not page.templateContent)

There is no page.data. Instead, we only use the data key from the front matter. For example, I can use the keys: title, description, or tags.

11ty provides a way to [parse excerpts](https://www.11ty.io/docs/data-frontmatter/#advanced%3A-customize-front-matter-parsing 'How to parse excerpts from content') from _page content_, but this does not work for an _item's templateContent_. I wrote a filter for my .eleventy.js config file to create a clip from a post. In my post Markdown files, I add `<!END clip>` where I want my clip to end. Then I use `post.templateContent | clipPost | safe` in my template where I want my clip to display.

```javascript
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('clipPost', (templateContent) => {
    if (!templateContent) return;

    let clipEnd = `<!END`;
    let clipping = templateContent.slice(0, templateContent.indexOf(clipEnd));
    return clipping;
  });
};
```

```markdown
I break out posts into three different letterbox `tags`: article, note, and card.

<!END clip>

- articles are letters to the world about code or the ultimate question of life
```

There is more information about collection item data structure in the 11ty [documentation](https://www.11ty.io/docs/collections/#collection-item-data-structure 'Eleventy documentation'). And here is the Nunjucks documentation describing a [`for` block](https://mozilla.github.io/nunjucks/templating.html#for 'Nunjucks documentation').
