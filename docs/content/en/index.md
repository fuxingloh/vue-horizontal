---
title: Introduction
description: 'Vue Horizontal is an ultra simple pure vue horizontal layout for modern responsive web with zero dependencies.'
position: 1
category: Getting Started
features:
- "SSR/SSG/SPA: all modes of rendering supported"
- Mobile & responsive web friendly
- Scroll bar or customizable button navigation
- Snap to the nearest item when scrolling
- Moves the responsibilities of the CSS to the user
- Extensible for any use case with a collection of recipes.
---

<alert type="info">

At its core, Vue Horizontal is an ultra simple pure vue horizontal layout for modern responsive web with zero 
dependencies.
This is also an ultra complex code snippet dossier with over 100 SPA/SSR/SSG friendly recipes for your design needs.

</alert>

## Features

<list :items="features"></list>

## Getting started

You can display horizontal content like you would do with just any other html content vertically.

* Any HTML structure works, you can mix and match them up.
* Use `v-for` and/or `v-if` with any `div` or `component`
* Navigation left, right button will automatically appear if there are any items overflowing
* Trackpad and touch scrolling will work as expected.

```vue[GettingStarted.vue] import=index-getting-started.vue
```

## Motivation

> TLDR: In 2017, I liked how AirBnb does their horizontal design. Couldn't find a library for Vue.  

Designing your web app for a horizontal experience can tedious and overwhelming if you are new to web development.
While a vertical design comes naturally as html is naturally vertical by design `display:block`.
With `display:flex`, aligning your content horizontally becomes nature and initiative but it doesn't support overflow or 
navigation. You start to add more hacks and tricks to get the design you wanted, but those hacks are not consistent and 
cross-browser tested, SSG or SEO friendly. You get the idea.

There are many libraries already in open-source world, some using direct DOM manipulation, some importing another legacy
JavaScript or JQuery library. You don't want that. Vue already does that. This is Vue native build for Vue, and only Vue
is the dependency required. All modes of rendering (SPA/SSR/SSG) are supported and tested with E2E tools.

The actual library is only <300 LOC while there are at least 100x more LOC in the documentation, end-to-end testing and 
a bunch of other fun stuff.

Vue Horizontal is not just a library, **it's a place for everything horizontal.**
Built for the Vue community.
With over 100 crafted recipes of design choices and control mechanisms ready for your needs.


> Also, originally this project started out as another project
> called [vue-horizontal-list](https://github.com/fuxingloh/vue-horizontal-list).
