---
title: Installation
description: 'Installing and setup vue-horizontal dependency to your project.'
position: 3
category: Getting Started
---

Add `vue-horizontal` dependency to your project:

<code-group>
  <code-block label="NPM" active>

  ```bash
  npm i vue-horizontal
  ```

  </code-block>
  <code-block label="Yarn">

  ```bash
  yarn add vue-horizontal
  ```

  </code-block>
  <code-block label="<script>">

  ```html
  <!-- without version -->
  <script src="https://cdn.jsdelivr.net/npm/vue-horizontal/dist/vue-horizontal.esm.min.js"></script>
  
  <!-- with version, go https://www.jsdelivr.com/package/npm/vue-horizontal to find -->
  <script src="https://cdn.jsdelivr.net/npm/vue-horizontal@0.x.x/dist/vue-horizontal.esm.min.js"></script>
  ```

  </code-block>
</code-group>

Then, import `vue-horizontal` and use `<vue-horizontal>`:

## Single File Component

```vue[my-amazing-component.vue]
<template>
  <div>
    <vue-horizontal>
      <!-- ... -->
    </vue-horizontal>
  </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal';

export default {
  components: {VueHorizontal},
  //...
}
</script>
```

## Install Globally

```js[app.js]
import Vue from 'vue';
import VueHorizontal from 'vue-horizontal';

Vue.use(VueHorizontal);
```
