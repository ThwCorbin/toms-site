---
tags: ['post', 'code', 'note']
title: Today Has an "a"
date: 2019-10-10
layout: layouts/post.njk
---

Today includes the letter "a", and I need to blog.

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
