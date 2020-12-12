# Vue Horizontal

An ultra simple pure vue horizontal layout for modern responsive web with zero dependencies.

- [ ] TODO all badges

[![Latest Release](https://img.shields.io/github/v/release/fuxingloh/vue-horizontal)](https://github.com/fuxingloh/vue-horizontal/releases)
[![License MIT](https://img.shields.io/github/license/fuxingloh/vue-horizontal)](https://github.com/fuxingloh/vue-horizontal/blob/main/LICENSE)
[![CI](https://github.com/fuxingloh/vue-horizontal/workflows/CI/badge.svg)](https://github.com/fuxingloh/vue-horizontal/actions?query=workflow%3ACI)

---

- [ ] TODO layout image
> SVG here of the different layout and supported features.

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
    <div>
    </div>
  </vue-horizontal>
</template>

<script>

</script>

<style scoped>

</style>
```

<details>
<summary><b>All Features</b></summary>
```vue
TODO
```
</details>

<details>
<summary><b>More Examples</b></summary>
```vue
// TODO
```
</details>

## Features and Design Philosophy

- SSR/SSG/SPA: all modes of rendering supported
- Mobile & responsive web friendly
- Scroll bar or customizable button navigation
- Snap to the nearest item when scrolling
- Moves the responsibilities of the CSS to the user
- Extensible for any use case

## Development
Setup & develop.

```shell
npm i
npm run serve
```

## Contributions

- For any question or feature request please feel free to create an [issue](https://github.com/fuxingloh/vue-horizontal/issues/new) or [pull request](https://github.com/fuxingloh/vue-horizontal/pulls).
- For feature request, do check out the examples as some of them might have been implemented. 

## Prior art

- Airbnb.com
- [vue-horizontal-list](https://github.com/fuxingloh/vue-horizontal-list)

Originally, this project started out as another project called [vue-horizontal-list](https://github.com/fuxingloh/vue-horizontal-list).
I created the origin project because I liked how AirBnb does their horizontal layout.
I couldn't find a library that implements it vue natively without relying on a legacy js/jquery dependency.    

This project is another take on it with an ultra simple implementation that is extensible and moves the responsibility 
to the user rather than the library.
