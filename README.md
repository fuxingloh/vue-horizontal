# [Vue Horizontal](https://vue-horizontal.fuxing.dev) [![vue-horizontal](https://img.shields.io/npm/v/vue-horizontal.svg)](https://www.npmjs.com/package/vue-horizontal) [![status-beta](https://img.shields.io/badge/status-beta-red)](https://www.npmjs.com/package/vue-horizontal)

![chrome](https://github.com/fuxingloh/vue-horizontal/workflows/chrome/badge.svg)
![firefox](https://github.com/fuxingloh/vue-horizontal/workflows/firefox/badge.svg)
![edge](https://github.com/fuxingloh/vue-horizontal/workflows/edge/badge.svg)
![CI](https://github.com/fuxingloh/vue-horizontal/workflows/CI/badge.svg)
[![License MIT](https://img.shields.io/github/license/fuxingloh/vue-horizontal)](https://github.com/fuxingloh/vue-horizontal/blob/main/LICENSE)

An ultra simple pure vue horizontal layout for modern responsive web with zero dependencies. With over 100 crafted
recipes of design choices and control mechanisms ready for your needs.

---

## Installation

```shell
npm i vue-horizontal
# or
yarn add vue-horizontal
# or via <script>
https://cdn.jsdelivr.net/npm/vue-horizontal@0.x.x/dist/vue-horizontal.esm.min.js
```

## Usage

<details>
<summary><b>Import Locally</b></summary>

```vue
<script>
import VueHorizontal from "vue-horizontal";

export default {
  components: {VueHorizontal}
}
</script>
```

</details>

<details>
<summary><b>Import Globally</b></summary>

```javascript
import Vue from 'vue';
import VueHorizontal from "vue-horizontal";

Vue.component(VueHorizontal)
```

</details>

### Using Vue Horizontal

```vue
<template>
  <vue-horizontal>
    <section v-for="item in items">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </section>
  </vue-horizontal>
</template>

<script>
import VueHorizontal from "vue-horizontal";

export default {
  components: {VueHorizontal},
  data() {
    return {
      // E.g: creates 20 array items...
      items: [...Array(20).keys()].map((i) => {
        return {title: `Item ${i}`, content: `🚀 Content ${i}`};
      }),
    }
  }
}
</script>

<style scoped>
section {
  padding: 16px 24px;
  margin-right: 24px;
  background: #f5f5f5;
  /* width: calc((100% - ((item-count - 1) * gap-size)) / item-count); */
  width: calc((100% - (3 * 24px)) / 4);
}
</style>
```

### More features and examples

- [Advanced Usage](https://vue-horizontal.fuxing.dev/advanced)
- [Design Recipe: Responsive](https://vue-horizontal.fuxing.dev/recipes-design/responsive)
- [Design Recipe: Cards/Grids](https://vue-horizontal.fuxing.dev/recipes-design/cards)
- [Design Recipe: Avatar](https://vue-horizontal.fuxing.dev/recipes-design/avatar)
- [Control Recipe: Button](https://vue-horizontal.fuxing.dev/recipes-control/navigation)
- [Control Recipe: Carousel](https://vue-horizontal.fuxing.dev/recipes-control/carousel)

## Features and Design Philosophy

- SSR/SSG/SPA: all modes of rendering supported
- Mobile & responsive web friendly
- Scroll bar or customizable button navigation
- Snap to the nearest item when scrolling
- Moves the responsibilities of the CSS to the user
- Extensible for any use case with [documented recipes](https://vue-horizontal.fuxing.dev/recipes-design/responsive).

## Known Limitations

### [CSS Scroll Behavior: Smooth](https://vue-horizontal.fuxing.dev/limitations#css-scroll-behavior-smooth)

In Vue Horizontal, smooth scrolling is enabled by default. With scroll-behavior: smooth, it enables smooth scrolling
experience when scroll event is triggered by programmatic calls. Although this is not a breaking functional feature, it
provides a "smooth" scrolling user experience.

As of December 2020, there is only a 76% cross browser compatibility. Meantime you should polyfill this feature with
more
[information here](https://vue-horizontal.fuxing.dev/limitations#smoothscroll-polyfill). Polyfill should be done by the
user, there are no plans to incorporate this natively in the library.

### [CSS Scroll Snap](https://vue-horizontal.fuxing.dev/limitations#css-scroll-snap)

Scroll snap align or scroll-snapping, is a CSS technique that allows customizable scrolling experiences like pagination
of carousels by setting defined snap positions. Vue Horizontal has it enabled by default, to disable you can set 
`<vue-horizontal :snap="false">`.

### [Hiding scrollbar](https://vue-horizontal.fuxing.dev/limitations#hiding-scrollbar)

In Vue Horizontal, the x-axis scrollbar is hidden by default. Although there isn't a shared specification, most browser
has it implemented one way or another. As of December 2020, there is a 97%+ cross browser compatibility.

## Development

Setup, develop & test.

```shell
npm install # install
npm run serve # dev
npm run cypress:run # e2e testing
```

## Contributions

- For any question or feature request please feel free to create
  an [issue](https://github.com/fuxingloh/vue-horizontal/issues/new)
  or [pull request](https://github.com/fuxingloh/vue-horizontal/pulls).
- For feature request, do check out the examples as some of them might have been implemented.
- End-to-end test cases are also written because of the UI nature of this framework.
  [Cypress](https://www.cypress.io/) is used under the hood.
- There are also additional integration testing done to ensure SSR and SSG works.

## Prior art

- [Motivation](https://vue-horizontal.fuxing.dev/#motivation)
- [vue-horizontal-list](https://github.com/fuxingloh/vue-horizontal-list)
- [kenwheeler/slick](https://github.com/kenwheeler/slick)
- Airbnb.com

Originally, this project started out as another project
called [vue-horizontal-list](https://github.com/fuxingloh/vue-horizontal-list). I created the origin project because I
liked how AirBnb does their horizontal layout. I couldn't find a library that implements it vue natively without relying
on a legacy js/jquery dependency.

This project is another take on it with an ultra simple implementation that is extensible and moves the responsibility
to the user rather than the library.
