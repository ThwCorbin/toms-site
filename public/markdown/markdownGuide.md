# **Markdown Guide**
This guide is based on the [CommonMark](https://commonmark.org/help/) help page and spec along with Markdown flotsam found on the web, such as [these tips](https://css-tricks.com/little-stuff-markdown-always-forget-google/). We escape characters in Markdown using one backslash (e.g. "\\#", "\\*", "\\_", etc.).

# Headings
Markdown:  
\# This is an h1\
\## This is an h2\
\### This is an h3\
\#### This is an h4\
\##### This is an h5\
\###### This is an h6

Result:
# This is an h1
## This is an h2
### This is an h3
#### This is an h4
##### This is an h5
###### This is an h6


# Paragraphs
This is a paragraph. Add a line break using a backslash "\\"\
or two blank spaces "  "  
at the break point.


# Emphasis and Strong Emphasis
\*Italic* or \_Italic_ displays *Italic*

\**Bold** or \__Bold__ displays **Bold**

\_\_\_Bold and Italic___ displays ___Bold and Italic___

\*\*\*Bold and Italic** text combined with Italic text*  
displays ***Bold and Italic** text combined with Italic text*


# Other text options
\~~Strikethrough~~ displays ~~Strikethrough~~

Note: underline is __controversial__ among Markdown mavens.


# Blockquote
A single paragraph blockquote uses ">" in this Markdown:

\> I bellowed the melody, but no one cared nor commented on the spectacle. How rude.

...resulting in this blockquote:
> I bellowed the melody, but no one cared nor commented on the spectacle. How rude.

A multiple paragragh blockquote uses this Markdown:

\> I bellowed the melody, but no one cared nor commented on the spectacle. How rude.  
\>  
\> Then I woke up and had tea with crumpets. Yummy in this here tummy. Do you have any more jam?

...resulting in this blockquote:
> I bellowed the melody, but no one cared nor commented on the spectacle. How rude.
>
> Then I woke up and had tea with crumpets. Yummy in this here tummy. Do you have any more jam?


# Horizontal Rules
Use "---" or "***" for an hr as follows:

---


# Inline Code
This is inline code `console.log(42)`, which is accomplished using backticks like this: \`console.log(42)`.


# Block Code
The fence method for block code uses three backticks (```) or three tildes (~~~) above and below the block. This Markdown:

\``` \
$ mkdir public \
$ touch public/markdown.md \
$ mkdir public/markdown \
$ mv public/markdown.md public/markdown/ \
\``` 

...results in this block code:
```
$ mkdir public
$ touch public/markdown.md
$ mkdir public/markdown
$ mv public/markdown.md public/markdown/
```

We can instead indent each line four spaces in Markdown resulting in this block code:

    $ console.log("Hello World!");
    $ console.log("This is coolio foolio.");


# Links
Markdown:  
\[CommonMark](https://commonmark.org) is a Markdown specification.

Result:  
[CommonMark](https://commonmark.org) is a Markdown specification.

Markdown:  
\[Nunjucks]\[1] is a templating language for JavaScript.  
\[MDN]\[2] has useful information about web technologies.

\[1]: https://mozilla.github.io/nunjucks/  
\[2]: https://developer.mozilla.org/en-US/

Result:  
[Nunjucks][1] is a templating language for JavaScript.  
[MDN][2] has useful information about web technologies.

[1]: https://mozilla.github.io/nunjucks/
[2]: https://developer.mozilla.org/en-US/

# Images
Markdown:  
\!\[HappyDaddy]\(/public/images/daddyO_sqr_min.jpg) \"Happy daddy with son"

Result:  
![HappyDaddy](/public/images/daddyO_sqr_min.jpg) "Happy daddy with son"

Nested image with link Markdown:  
\[\!\[Tom's website]\(/public/images/daddyO_sqr_avatar.jpg)](http://thwcorbin.com) "Tom's website"

Nested image with link result:  
[![Tom's Site](/public/images/daddyO_sqr_avatar.jpg)](http://thwcorbin.com) "Tom's website"

# Lists
Use either "* ", "- ", or "+ " for unordered list items, and either "1. " or "1) " for ordered list items.  
* Note the space after characters.
* Changing between bullet characters, number style characters, or bullets and numbers, starts a new list.  

Markdown for unordered list:  
\- List item \
\- List item \
\- List item  

Result:
- List item
- List item
- List item

Result with ordered list using "1) ":  
1) One
2) Two
3) Three

The start number of an ordered list is significant. Note the Markdown and result for a list starting with the number 42.  

The markdown:\
42\. This item is the answer to...everything \
2\. This item isn't, but note the number displays as 43 not 2 \
78\. ...44 not 78

Result:  

42. This item is the answer to...everything
2. This item isn't, but note the number displays as 43 not 2
78. ...44 not 78


# Nested lists, paragraphs, blockquotes, and code blocks
Nested list items require four indented spaces:
* list item
    1. nested list item
    2. nested list item
* list item
    - nested list item
    - nested list item
* list item

Nested blockquotes require four idented spaces before the "> ". Code blocks require either eight indented spaces or four spaces followed by three backticks or tildes (fence method). I prefer the latter option.
* list item with nested blockquotes (four spaces followed by "> ")
    > Do you have spam?

    > Do I have spam?
* list item with nested code blocks displaying both options

        $ console.log("spam")
        $ console.log("more, please")

    ~~~
    $ console.log("dog's dinner")
    $ console.log("lemons make lovely gins and tonic")
    ~~~

* list item whose only purpose is being third in a list


# Tables
Use pipes to build columns and dashes to create the header row. The default column allignment is left; use colons in the header row to change column allignment to center ":---:" or right "---:". We can add spaces inside "cells" (Markdown ignores the spaces) to make the table easier to read in Markdown.

| Location | Dogs | Cats | Fishmonkeyrobots |
|----------|:----:|:----:|-----------------:|
| Home     |     1|     1| 0                |
|     Luna |     0|     0| 0                |
| Mars     |     0|     0| 78,453,300,042   |
|    Total |     1|     1| 78,453,300,042   |

Table Markdown:  

\| Location | Dogs | Cats | Fishmonkeyrobots | \
\|----------|:----:|:----:|-----------------:| \
\| Home     |     1|     1| 0                | \
\|     Luna |     0|     0| 0                | \
\| Mars     |     0|     0| 78,453,300,042   | \
\|    Total |     1|     1| 78,453,300,042   |
