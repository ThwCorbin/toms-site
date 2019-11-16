---
title: Build Command - Nil Points!
description: Note about remembering to update your build command
tags: ["post", "note", "code"]
date: 2019-11-16 13:15:00.00
updated: 2019-11-16 13:15:00.00
layout: layouts/post.njk
---

I forgot to update the [Netlify](https://docs.netlify.com/configure-builds/get-started/#basic-build-settings "Netlify docs for build settings") build command on my latest project, [monkeyCatRobot](https://www.monkeycatrobot.com/ "A first-class delivery solution to send a monkeyCatRobot to friends"). I installed and configured [Rollup](https://rollupjs.org/guide/en/ "A module bundler for JavaScript") to bundle my code, and everything worked fine locally. But there was an error when I deployed to Netlify's CDN (content delivery network). I spent a good bit of time rummaging around the interweb with no luck, and I drafted a question, which I almost posted to Stack Overflow. Then I remembered I had made the **same mistake** on my last project. _Fool meself once..._ The correct build command: rollup -c && eleventy. [Nil points](https://english.stackexchange.com/questions/300015/are-there-any-fake-french-words-used-in-english/300156#300156 "Discussion of nil points").

Here is the question I nearly posted to Stack Overflow:

<!END clip>

#### Title

Browsers block bundle.js from loading

#### Summary

Browsers are loading my bundled JavaScript locally (localhost:8080), but when I deploy, browsers block bundle.js from loading on the [website][1]. Here are the errors:

- Firefox: Loading module from “https://www.monkeycatrobot.com/assets/js/bundle.js” was blocked because of a disallowed MIME type (“text/html”)
- Chrome: Failed to load resource: the server responded with a status of 404 ()

I'm using Rollup to bundle my JavaScript to dist/assets/js/bundle.js, and this is the script tag I'm using in dist/index.html: `<script type="module" src="/assets/js/bundle.js"></script>`.

My code is on [GitHub][2]. I set this project up the same way as I did my personal [website][3] (GitHub [repo][4]), which works fine (no errors). I'm out of ideas.

#### What I've Tried

Reading through similar questions on this forum, I see no answers that apply. My Duck Duck Googles return nil points. I've considered screaming a rude word while typing really hard on my keyboard.

[1]: https://www.monkeycatrobot.com
[2]: https://github.com/ThwCorbin/monkeycatrobot
[3]: https://www.thwcorbin.com/
[4]: https://github.com/ThwCorbin/toms-site
