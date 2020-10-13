---
title: Eloquent Tips
description: Tips from Eloquent JavaScript
tags: ["post", "card", "idea"]
date: 2020-10-13 09:25:00.00
updated: 2020-10-13 09:25:00.00
layout: layouts/post.njk
---

I was cleaning out a notebook, and I noticed several tips I'd written down about `NaN`, `null`, and `undefined` while reading [Eloquent Javascript](https://eloquentjavascript.net/, "Eloquent JavaScriptn online edition by Marijn Haverbeke").

`NaN` is the only value in JavaScript that is not equal to itself

```console
> NaN == NaN // false
```

Accidental type conversions often return `NaN`, which is worth remembering when debugging.

```console
> let five // undefined
> five + 2 // NaN
> five = 5
> five + 2 // 7
> five = "five"
> five + 2 // "five2"
> five * 2 // NaN
```

<!END clip>

`null` and `undefined` "denote absence of meaningful value." We can test whether a value is real (not `null` or `undefined`) by comparing it to `null`.

```console
> null == undefined // true
> null == 0 // false
> let a = "a" // undefined
> let b // undefined
> a == null // false
> b == null // true
```
