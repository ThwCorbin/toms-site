---
title: Today Has an "a"
description:
tags: ['post', 'note', 'code']
date: 2019-10-10
updated: 2019-10-27
layout: layouts/post.njk
---

We can use the logical `&&` and `||` operators to determine whether to invoke a function depending on an expression's truthy/falsy value. Here is a simple example:

- The day of the week includes the letter "a", **and** I need to blog
- Either I already blogged today (stop evaluating), **or** I need to blog

And this is how that looks in JavaScript:

<!END clip>

```js
const blog = () => {
  console.log('I need to blog');
};

let todayHasAnA = (today) => {
  today.includes('a') && blog();
};

todayHasAnA('Thursday'); // "I need to blog"

let blogToday = (blogged) => {
  blogged || blog();
};

blogToday(false); // "I need to blog"
```
