---
tags: ['post', 'note', 'code']
title: Today Has an "a"
date: 2019-10-10
layout: layouts/post.njk
---

We can use the logical && and || operators to determine whether to invoke a function depending on an expression's truthy/falsy value.
\
\
Here is a simple example:

- if the day of the week includes the letter "a" (true), then I need to blog
- if I have not yet blogged today (false), then I need to blog

\
And this is how that looks in JavaScript:

<!-- end -->

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

Either I already blogged today (stop evaluating). Or, I need to blog.

```
Javascript

let blogToday = (blogged) => {
  blogged || blog();
};

blogToday(false);
// "I need to blog"
```
