<template>
  <div id="app">
    <h1>Vue Horizontal</h1>

    <example/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Example from "./example";

export default Vue.extend({
  components: {Example},
});
</script>

<style>
body {
  font-family: "-apple-system", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif";
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 8px;
}

p {
  margin: 0;
  font-size: 17px;
  line-height: 1.5;
  font-weight: 500;
  color: #333;
  word-break: break-word;
}
</style>

<style scoped>
#app {
  max-width: 1400px;

  margin-left: auto;
  margin-right: auto;

  padding: 64px;
}

@media (min-width: 1200px) {
  #app {
    padding-left: 80px;
    padding-right: 80px;
  }
}

#app > div {
  margin: 48px 0;
}
</style>
