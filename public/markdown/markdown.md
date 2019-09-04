# Headings
# h1
## h2
### h3
#### h4
##### h5
###### h6


# Paragraphs
This is a paragraph (<p>...</p>).

Add a line break with a backslash \
or two blank spaces  
at the break point.


# Emphasis
*Italic* or _Italic_

**Bold** or __Bold__

___Underline___

Escape a "*" and "_" using a backslash like this: \* and \_


# Blockquote
Single paragraph block quote:
> I bellowed the melody, but no one cared nor commented on the spectacle. How rude.

Multiple paragragh block quote:
> I bellowed the melody, but no one cared nor commented on the spectacle. How rude.
>
> Then I woke up and had tea with crumpets. Yummy in this here tummy. Do you have any more jam?


# Horizontal Rules
---
*** 


# Inline Code
This in inline code `console.log(42)`, which is accomplished using backticks.


# Block Code
This is the fence method for block code using three backticks (```) above and below the block:

```
$ mkdir public
$ touch public/markdown.md
```
The fenced code blocks can also use three tildes (~~~) above and below the block:

~~~
$ mkdir public/markdown
$ mv public/markdown.md public/markdown/
~~~

This is block code using four indented spaces before each line:

    $ console.log("Hello World");
    $ console.log("This is coolio");


# Links
[Commonmark](https://commonmark.org) is a markdown option.

[Nunjucks][1] is a SSG.

[Mozilla][2] has useful information.

[1]: https://mozilla.github.io/nunjucks/
[2]: https://developer.mozilla.org/en-US/


# Images
This one works:

![HappyDaddy](https://secure.gravatar.com/avatar/577e083fc67042f3efe3c069db34dc92?s=200&r=pg&d=https%3A%2F%2Fdeveloper.mozilla.org%2Fstatic%2Fimg%2Favatar.png)


This option for images doesn't work, but the alt language does:
![HappyDaddy][1]

[1]: https://secure.gravatar.com/avatar/577e083fc67042f3efe3c069db34dc92?s=200&r=pg&d=https%3A%2F%2Fdeveloper.mozilla.org%2Fstatic%2Fimg%2Favatar.png


# Lists
Note: Changing bullet characters, changing the ordered list delimiter style, and changing from bullets to numbers or vice versa, starts a new list.

Unordered lists:
* List item
* List item
* List item

- List item
- List item
- List item

+ List item
+ Another item
+ And finally this item

Ordered lists:
1. One
2. Two
3. Three

1) One
2) Two
3) Three

Note: the start number of an ordered list is significant.

42. This item is the meaning of life and everything
2. This isn't, but you'll notice the OL item begins with "43." not "2."
78. ...and this OL item begins with "44." not "78."


# Nested lists, paragraphs, blockquotes, and code blocks
Nested lists require four spaces:
* list item
    1. nested list item
    2. nested list item
* list item
    - nested item
    - nested item
* list item

Use four spaces to nest blockquotes, and eight spaces to nest code block (or use three backticks for code block):
* list item with nested blockquotes
    > Do you have spam?

    > Do I have spam?
* list item with nested block code

        $ console.log("spam")
        $ console.log("more, please")
* list item with nothing nested. Sad.

