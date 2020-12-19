<template>
  <vue-horizontal class="this">
    <component-example v-for="i in [1,2,3,4,5,6,7,8]">
      <h3>Button {{ i }}</h3>
    </component-example>
  </vue-horizontal>
</template>

<style scoped>
.this >>> .v-hl-container {
  background: black;
}
</style>
