---
title: A Markdown Guide
description:
tags: ['post', 'code', 'article']
date: 2019-09-19
updated: 2019-10-24
layout: layouts/post.njk
---

This guide is based on the [CommonMark](https://commonmark.org/) help page and spec along with Markdown flotsam found on the web, such as [these tips](https://css-tricks.com/little-stuff-markdown-always-forget-google/).

#### Headings

<!-- prettier-ignore-start -->
```markdown
# This is an h1
## This is an h2
### This is an h3
#### This is an h4
##### This is an h5
###### This is an h6
```
<!-- prettier-ignore-end -->

# This is an h1

## This is an h2

### This is an h3

#### This is an h4

##### This is an h5

###### This is an h6

<!END clip>

---

#### Paragraphs

This is a paragraph. Use a backslash "\\"\
or two blank spaces " "  
for a line break.

---

#### Emphasis and Strong Emphasis

Use one asterisk or underscore for _emphasis_, two for **strong text**, and three for **_strong emphasis_**. According to the spec, you can use either an \* or an \_. My opinionated code formatter has **strong opionions** about that. These examples work with _Prettier_. Alternatively, you can tell _Prettier_ to ignore your preferred method.

```markdown
_emphasis_
**strong**
**_strong emphasis_**
**_emphasis_ in strong text**
_emphasis with **strong text** inside_
**strong with **strong text** inside**

<!-- prettier-ignore-start -->
*Prettier* has __no__ ***power*** here.
<!-- prettier-ignore-end -->
```

_emphasis_  
**strong**  
**_strong emphasis_**  
**_emphasis_ in strong text**  
_emphasis with **strong text** inside_  
**strong with **strong text** inside**

<!-- prettier-ignore-start -->
*Prettier* has __no__ ***power*** here.
<!-- prettier-ignore-end -->

---

#### Other text options

```markdown
~~Strikethrough~~
```

~~Strikethrough~~

Underline is right out as it is **controversial** among Markdown mavens.

---

#### Blockquote

A single paragraph blockquote uses this Markdown:

```markdown
> You have power over your mind--not outside events. Realise this, and you will find strength.\
> -Marcus Aurelius
```

> You have power over your mind--not outside events. Realise this, and you will find strength.\
> -Marcus Aurelius

A multiple paragragh blockquote uses this Markdown:

```markdown
> If you find it hard to laugh at yourself, I would be happy to do it for you.
>
> I, not events, have the power to make me happy or unhappy today. I can choose which it shall be. Yesterday is dead, tomorrow hasn't arrived yet. I have just one day, today, and I'm going to be happy in it.
>
> -Groucho Marx
```

> If you find it hard to laugh at yourself, I would be happy to do it for you.
>
> I, not events, have the power to make me happy or unhappy today. I can choose which it shall be. Yesterday is dead, tomorrow hasn't arrived yet. I have just one day, today, and I'm going to be happy in it.
>
> -Groucho Marx

---

#### Horizontal Rules

Use "---" or "\*\*\*" for an hr as follows:

---

#### Inline Code

This is inline code: `console.log(42)`, which is accomplished using backticks like this: \`console.log(42)\`

---

#### Block Code

The fence method for block code uses three backticks or three tildes above and below the block. This Markdown:

````bash
```bash
$ mkdir public
$ touch public/markdown.md
$ mkdir public/markdown
$ mv public/markdown.md public/markdown/
```
````

...results in this block code:

```bash
$ mkdir public
$ touch public/markdown.md
$ mkdir public/markdown
$ mv public/markdown.md public/markdown/
```

We can instead indent each line four spaces in Markdown:

<!-- prettier-ignore-start -->
```javascript
    const blog = () => {
      console.log('I need to blog');
    };

    let todayHasAnA = (today) => {
      today.includes('a') && blog();
    };

    todayHasAnA('Thursday'); // "I need to blog"
```
<!-- prettier-ignore-end -->

...resulting in this block code:

    const blog = () => {
    console.log("I need to blog");
    };

    let todayHasAnA = (today) => {
      today.includes('a') && blog();
    };

    todayHasAnA("Thursday"); // "I need to blog"

---

#### Links

Links include link text, a url, and an optional "title".

```markdown
[CommonMark](https://commonmark.org 'CommonMark website') is a Markdown specification.
```

[CommonMark](https://commonmark.org 'CommonMark website') is a Markdown specification.

Reference links add a link label, which is in the second set of brackets. It must be at least one non-whitespace character (matching is case-insensitive).

```markdown
[Nunjucks][1] is a templating language for JavaScript.
[MDN][foo] has useful information about web technologies.

[1]: https://mozilla.github.io/nunjucks/ 'Nunjucks website'
[foo]: https://developer.mozilla.org/en-US/ 'MDN website'
```

[Nunjucks][1] is a templating language for JavaScript.
[MDN][foo] has useful information about web technologies.

[1]: https://mozilla.github.io/nunjucks/ 'Nunjucks website'

<!-- prettier-ignore-start -->
[FOO]: https://developer.mozilla.org/en-US/ 'MDN website'
<!-- prettier-ignore-end -->

...which is this HTML:

```html
<a href="https://mozilla.github.io/nunjucks/" title="Nunjucks website"
  >Nunjucks</a
>
<a href="https://developer.mozilla.org/en-US/" title="MDN website">MDN</a>
```

---

#### Images

The Markdown for images is similar to links. Add an "!" at the beginning and (instead of link text) use an image description, which will render in HTML as the `alt` attribute.

```markdown
![image description](/url 'title')

![Tom's favicon is a blue circle with 'ThwC' text](/assets/images/favicon/apple-touch-icon.png "Tom's favicon")
```

![Tom's favicon is a blue circle with 'ThwC' text](/assets/images/favicon/apple-touch-icon.png "Tom's favicon")

And here is the Markdown for an image with a link:

```markdown
[![Tom's Two-up Two-Down website](/assets/images/favicon/favicon-32x32.png)](https://www.thwcorbin.com "Tom's website")
```

[![Tom's Two-up Two-Down website](/assets/images/favicon/favicon-32x32.png)](https://www.thwcorbin.com "Tom's website")

---

#### Lists

Use either an "\* ", an "- ", or a "+ " for unordered list items, and either "1. " or "1) " for ordered list items.

```markdown
- Dog
- Cat
- Monkeycatrobot
```

- Dog
- Cat
- Monkeycatrobot

```markdown
1. Robot
2. Lobster
3. Astroid Miner
```

1. Robot
2. Lobster
3. Astroid Miner

\
The start number of an ordered list is significant. Note the differences in the Markdown and the result for a list starting with the number 42.

```markdown
42. This item is the answer to...everything
43. This item isn't, but note it is 43 not 2
44. ...44 not 78
```

42. This item is the answer to...everything
43. This item isn't, but note it is 43 not 2
44. ...44 not 78

\
Changing between bullet characters, number style characters, or bullets and numbers starts a new list.

```markdown
- Dog
- Cat

* Monkeycatrobot
* Robot

1. Lobster
2. Astroid Miner
```

We might expect to render one \<ul> with six \<li>. Instead, there are three \<ul>, each containing two \<li>. Check in your developer's tools.

- Dog
- Cat

* Monkeycatrobot
* Robot

1. Lobster
2. Astroid Miner

---

#### Tables

Use pipes to build columns and dashes to create the header row. The default column allignment is left; use colons in the header row to change column allignment to center ":---:" or right "---:". Add spaces inside "cells" to make the table easier to read in the Markdown file. Column widths are based on the widest "cell" in each column; setting widths is tricky depending on how you render the Markdown. I set the column widths with CSS for this article.

```markdown
| Location | Dogs | Cats | Monkeycatrobots |
| -------- | :--: | :--: | --------------: |
| Home     |  1   |  1   |               0 |
| Luna     |  0   |  0   |               0 |
| Mars     |  0   |  0   |  78,453,300,042 |
| Total    |  1   |  1   |  78,453,300,042 |
```

```css
.postAll table th:nth-child(1),
.postAll table th:nth-child(2),
.postAll table th:nth-child(3) {
  width: 20%;
}

.postAll table th:nth-child(4) {
  width: 40%;
}
```

| Location | Dogs | Cats | Monkeycatrobots |
| -------- | :--: | :--: | --------------: |
| Home     |  1   |  1   |               0 |
| Luna     |  0   |  0   |               0 |
| Mars     |  0   |  0   |  78,453,300,042 |
| Total    |  1   |  1   |  78,453,300,042 |

#### Notes

Escape characters in Markdown using one backslash (e.g. "\\#", "\\\*", "\\\_", etc.).
