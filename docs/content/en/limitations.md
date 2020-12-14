---
title: Limitations
description: 'Vue Horizontal implementation has over 99% cross browser compatibility with 3 known non-breaking limitations.'
position: 4
category: Getting Started
---

Vue Horizontal implementation has over 99% cross browser compatibility with 3 known non-breaking limitations.
To help you make informed decision and understand the library limitations, here is a list of up-to-date browser support tables.

## CSS Scroll Behavior: Smooth

In Vue Horizontal, smooth scrolling is enabled by default. 
With `scroll-behavior: smooth`, it enables smooth scrolling experience when scroll event is triggered by programmatic calls. 
Although this is not a breaking functional feature, it provides a **"smooth"** scrolling user experience.

As of December 2020, there is only a 76% cross browser compatibility.
Browser that are not compatible are largely Safari users.
Safari users uses there trackpad or hand to touch scroll, and that has its accompanying scroll physics engine.
The incompatibility and poor UX is only observed if programmatic scrolling is done.
The feature is shipped in Safari 14 but 
[blocked behind a feature gate](https://github.com/mdn/browser-compat-data/pull/7364), **meantime you should 
[polyfill this feature](#smoothscroll-polyfill)** with more information below. 

- 93% = 76% + 12% (Safari) + 4% (iOS Safari) + 1% (Opera Mini)
- < 10% Observed agony or bad user experience
- You should polyfill
- Polyfill should be done by you, there are no plans to incorporate this natively in the library.

<caniuse feature="css-scroll-behavior"></caniuse>

### Smoothscroll Polyfill

I recommend installing this [smoothscroll polyfill](https://github.com/iamdustan/smoothscroll) created 
by [@iamdustan](https://github.com/iamdustan). 
Then, have it polyfill once on the client side.

#### Installing

<code-group>
  <code-block label="NPM" active>

  ```bash
  npm i smoothscroll-polyfill
  ```

  </code-block>
  <code-block label="Yarn">

  ```bash
  yarn add smoothscroll-polyfill
  ```

  </code-block>
</code-group>

#### Polyfill Examples

The idea is to have it polyfill-ed on the client side, the examples here are not exhaustive.
It must only be added on the client side or else your SSR/SSG will break.

<code-group>
  <code-block label="SPA" active>

  ```vue
  <template>
    <vue-horizontal>
      <!-- your code -->
    </vue-horizontal>
  </template>

  <script>
  // SPA mode only.
  // Or must be wrapped in <client-only></client-only>.
  import smoothscroll from 'smoothscroll-polyfill';
  smoothscroll.polyfill();
  
  export default {
    // your code
  }
  </script>
  ```

  </code-block>
  <code-block label="Nuxt">

  ```javascript
  // nuxt.config.js
  module.exports = {
    plugins: [
      '~/plugins/smoothscroll.client.js',
      // or
      {src: '~/plugins/smoothscroll.js', mode: 'client'},
    ]
  }
  
  // smoothscroll.js or smoothscroll.client.js
  import smoothscroll from 'smoothscroll-polyfill';
  smoothscroll.polyfill();
  ```

  </code-block>
  <code-block label="Vue.mounted()">

  ```vue
  <template>
    <vue-horizontal>
      <!-- your code -->
    </vue-horizontal>
  </template>
  
  <script>
  export default {
    mounted() {
      // Load it only at client
      require('smoothscroll-polyfill').polyfill();
    }
  }
  </script>
  ```

  </code-block>
</code-group>

## CSS Scroll Snap

Scroll snap align or scroll-snapping, is a CSS technique that allows customizable scrolling experiences like pagination 
of carousels by setting defined snap positions.
Vue Horizontal has it enabled by default to disable you can set `<vue-horizontal :snap="false">`.

<caniuse feature="css-snappoints"></caniuse>

## Hiding scrollbar

In Vue Horizontal, the x-axis scrollbar is hidden by default.
Although there isn't a shared specification, most browser has it implemented one way or another.
As of December 2020, there is a 97%+ cross browser compatibility.

<caniuse feature="css-scrollbar"></caniuse>
