# Vue Horizontal [![vue-horizontal](https://img.shields.io/npm/v/vue-horizontal.svg)](https://www.npmjs.com/package/vue-horizontal) [![status-beta](https://img.shields.io/badge/status-beta-red)](https://www.npmjs.com/package/vue-horizontal)

### BETA TODO

> This is a beta early release POC, use it at your own risk.

- [ ] Added relevant shields.io badges
- [ ] Onboarding banner images of the features
- [ ] All features
- [ ] More examples
- [ ] Documentation + examples github.io page
- [ ] Wrappers

An ultra simple pure vue horizontal layout for modern responsive web with zero dependencies.

![chrome](https://github.com/fuxingloh/vue-horizontal/workflows/chrome/badge.svg)
![firefox](https://github.com/fuxingloh/vue-horizontal/workflows/firefox/badge.svg)
![edge](https://github.com/fuxingloh/vue-horizontal/workflows/edge/badge.svg)

---

> SVG here of the different layout and supported features.

![CI](https://github.com/fuxingloh/vue-horizontal/workflows/CI/badge.svg)
[![License MIT](https://img.shields.io/github/license/fuxingloh/vue-horizontal)](https://github.com/fuxingloh/vue-horizontal/blob/main/LICENSE)

## Installation

```shell
npm i vue-horizontal
# or
yarn add vue-horizontal
```

## Usage

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
export default {
  data() {
    return {
      // Creates 20 array items...
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
  border-radius: 4px;
  background: #f5f5f5;
  margin: 12px;
  box-sizing: border-box;
  width: calc((100% - (3 * 24px)) / 4);
  flex-basis: calc((100% - (3 * 24px)) / 4);
}
</style>
```

<details>
<summary><b>All Features</b></summary>

```vue

<template>
  <vue-horizontal>
    <section v-for="item in items">
      {{item}}
    </section>
  </vue-horizontal>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
section {
}
</style>
```

</details>

<details>
<summary><b>More Examples</b></summary>

- [ ] Link to examples/documentations?

</details>

## Features and Design Philosophy

- SSR/SSG/SPA: all modes of rendering supported
- Mobile & responsive web friendly
- Scroll bar or customizable button navigation
- Snap to the nearest item when scrolling
- Moves the responsibilities of the CSS to the user
- Extensible for any use case

## Known Limitations

### [css-scroll-behavior: smooth](https://caniuse.com/css-scroll-behavior)

- [ ] Document it and how to overcome it. 
 

## Development

Setup, develop & test.

```shell
npm install # install
npm run serve # dev
npm run cypress # e2e testing
```

### Writing test?

End-to-end test cases are written because of the UI nature of this framework.
[Cypress](https://www.cypress.io/) is used under the hood.

## Contributions

- For any question or feature request please feel free to create
  an [issue](https://github.com/fuxingloh/vue-horizontal/issues/new)
  or [pull request](https://github.com/fuxingloh/vue-horizontal/pulls).
- For feature request, do check out the examples as some of them might have been implemented.

## Prior art

- Airbnb.com
- [vue-horizontal-list](https://github.com/fuxingloh/vue-horizontal-list)

Originally, this project started out as another project
called [vue-horizontal-list](https://github.com/fuxingloh/vue-horizontal-list). I created the origin project because I
liked how AirBnb does their horizontal layout. I couldn't find a library that implements it vue natively without relying
on a legacy js/jquery dependency.

This project is another take on it with an ultra simple implementation that is extensible and moves the responsibility
to the user rather than the library.
