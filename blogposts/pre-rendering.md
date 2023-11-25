---
title: "Next.JS Pre-rendering"
date: "2023-11-21"
---

Two forms of pre-rendering: **Static Generation** and **Server-side Rendering**

- **Static Generation**: HTML is generated at build time and will be reused on each request.
- **Server-side Rendering**: HTML is generated on each request.

Next.js allows you to choose which pre-rendering form to use for each page. We can create a "hybrid" app by using Static Generation for most pages and server-side rendering for others.

It is recommended to use Static Generation over Server-side Rendering for _performance reasons_. Statically generated pages can be cached by CDN with no extra configuration to boost performance.
