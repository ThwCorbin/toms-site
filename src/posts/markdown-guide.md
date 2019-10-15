---
tags: ['post', 'code', 'article']
title: A Markdown Guide
description:
date: 2019-09-19
updated:
layout: layouts/post.njk
---

This guide is based on the [CommonMark](https://commonmark.org/) help page and spec along with Markdown flotsam found on the web, such as [these tips](https://css-tricks.com/little-stuff-markdown-always-forget-google/).

#### Headings

```
  # This is an h1
  ## This is an h2
  ### This is an h3
  #### This is an h4
  ##### This is an h5
  ###### This is an h6

```

# This is an h1

## This is an h2

### This is an h3

#### This is an h4

##### This is an h5

###### This is an h6

---

#### Paragraphs

This is a paragraph. Use a backslash "\\"\
or two blank spaces " "  
for a line break.

---

#### Emphasis and Strong Emphasis

Use one asterisk or underscore for _emphasis_, two for **strong text**, and three for **_strong emphasis_**. According to the spec, you can use either an \* or an \_. My opinionated code formatter has **strong opionions** about that. These examples work with _Prettier_. Alternatively, you can tell _Prettier_ to ignore your preferred method.

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

```
~~Strikethrough~~
```

~~Strikethrough~~

Underline is right out as it is **controversial** among Markdown mavens.

---

#### Blockquote

A single paragraph blockquote uses this Markdown:

```
> You have power over your mind--not outside events. Realize this, and you will find strength.\
>-Marcus Aurelius
```

> You have power over your mind--not outside events. Realize this, and you will find strength.\
> -Marcus Aurelius

A multiple paragragh blockquote uses this Markdown:

```
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

This is inline code `console.log(42)`, which is accomplished using backticks like this: \`console.log(42)\`

---

#### Block Code

The fence method for block code uses three backticks or three tildes above and below the block. This Markdown:

````
```
Terminal

$ mkdir public
$ touch public/markdown.md
$ mkdir public/markdown
$ mv public/markdown.md public/markdown/
```
````

...results in this block code:

```
Terminal

$ mkdir public
$ touch public/markdown.md
$ mkdir public/markdown
$ mv public/markdown.md public/markdown/
```

We can instead indent each line four spaces in Markdown:

```
    JavaScript

    const blog = () => {
    console.log("I need to blog");
    };

    let todayHasAnA = (today) => {
      today.includes('a') && blog();
    };

    todayHasAnA("Thursday");
    // "I need to blog"

```

...resulting in this block code:

    JavaScript

    const blog = () => {
    console.log("I need to blog");
    };

    let todayHasAnA = (today) => {
      today.includes('a') && blog();
    };

    todayHasAnA("Thursday");
    // "I need to blog"

---

#### Links

Links include link text, a url, and an optional "title".

```
[CommonMark](https://commonmark.org "CommonMark website") is a Markdown specification.
```

[CommonMark](https://commonmark.org 'CommonMark website') is a Markdown specification.

Reference links add a link label, which is in the second set of brackets. It must be at least one non-whitespace character (matching is case-insensitive).

```
[Nunjucks][1] is a templating language for JavaScript.
[MDN][foo] has useful information about web technologies.

[1]: https://mozilla.github.io/nunjucks/ 'Nunjucks website'
[FOO]: https://developer.mozilla.org/en-US/ 'MDN website'
```

[Nunjucks][1] is a templating language for JavaScript.
[MDN][foo] has useful information about web technologies.

[1]: https://mozilla.github.io/nunjucks/ 'Nunjucks website'

<!-- prettier-ignore-start -->
[FOO]: https://developer.mozilla.org/en-US/ 'MDN website'
<!-- prettier-ignore-end -->

...which is this HTML:

```
HTML

<a href="https://mozilla.github.io/nunjucks/" title="Nunjucks website"
  >Nunjucks</a
>
<a href="https://mozilla.github.io/nunjucks/" title="Nunjucks website"
  >Nunjucks</a
>
```

---

#### Images

The Markdown for images is similar to links. Add an "!" at the beginning and (instead of link text) use an image description, which will render in HTML as the `alt` attribute.

```
![image description](/url "title")

![Tom's favicon is a blue circle with 'ThwC' text](/assets/images/favicon/apple-touch-icon.png "Tom's favicon")
```

![Tom's favicon is a blue circle with 'ThwC' text](/assets/images/favicon/apple-touch-icon.png "Tom's favicon")

And here is the Markup for an image with a link:

```
[![Tom's Two-up Two-Down website](/assets/images/favicon/favicon-32x32.png)](https://www.thwcorbin.com "Tom's website")
```

[![Tom's Two-up Two-Down website](/assets/images/favicon/favicon-32x32.png)](https://www.thwcorbin.com "Tom's website")

---

#### Lists

Use either an "\* ", an "- ", or a "+ " for unordered list items, and either "1. " or "1) " for ordered list items.

```
- List item 1
- List item 2
- List item 3
```

- List item 1
- List item 2
- List item 3

```
1. One
2. Two
3. Three
```

1. One
2. Two
3. Three

The start number of an ordered list is significant. Note the Markdown and result for a list starting with the number 42.

```
42. This item is the answer to...everything
2. This item isn't, but note the number displays as 43 not 2
78. ...44 not 78
```

42. This item is the answer to...everything
43. This item isn't, but note the number displays as 43 not 2
44. ...44 not 78

Changing between bullet characters, number style characters, or bullets and numbers starts a new list.

```
- Dog
- Cat
* Mouse
* Fox
- Doe
- Buck
```

There are three \<ul>, each with two \<li> below.

- Dog
- Cat

* Mouse
* Fox

- Doe
- Buck

---

#### Nested lists, paragraphs, blockquotes, and code blocks

Nested list items require four indented spaces:

- list item

  1. nested list item
  2. nested list item

- list item

  - nested list item
  - nested list item

- list item

Nested blockquotes require four idented spaces before the "> ". Code blocks require either eight indented spaces or four spaces followed by three backticks or tildes (fence method). I prefer the latter option.

- list item with nested blockquotes (four spaces followed by "> ")

  > Do you have spam?

  > Do I have spam?

- list item with nested code blocks displaying both options

        $ console.log("spam")
        $ console.log("more, please")

```

$ console.log("dog's dinner")
  $ console.log("lemons make lovely gins and tonic")

```

- list item whose only purpose is being third in a list

---

#### Tables

Use pipes to build columns and dashes to create the header row. The default column allignment is left; use colons in the header row to change column allignment to center ":---:" or right "---:". We can add spaces inside "cells" (Markdown ignores the spaces) to make the table easier to read in Markdown.

```
| Location | Dogs | Cats | Fishmonkeyrobots | \
|----------|:----:|:----:|-----------------:| \
| Home | 1| 1| 0 | \
| Luna | 0| 0| 0 | \
| Mars | 0| 0| 78,453,300,042 | \
| Total | 1| 1| 78,453,300,042 |
```

| Location | Dogs | Cats | Fishmonkeyrobots |
| -------- | :--: | :--: | ---------------: |
| Home     |  1   |  1   |                0 |
| Luna     |  0   |  0   |                0 |
| Mars     |  0   |  0   |   78,453,300,042 |
| Total    |  1   |  1   |   78,453,300,042 |

Table Markdown:

---

#### Notes

We escape characters in Markdown using one backslash (e.g. "\\#", "\\\*", "\\\_", etc.).
