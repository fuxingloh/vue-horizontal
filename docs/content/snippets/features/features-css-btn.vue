<template>
  <vue-horizontal class="this">
    <component-example v-for="i in [1,2,3,4,5,6,7,8]">
      <h3>Button {{ i }}</h3>
    </component-example>
  </vue-horizontal>
</template>

<style scoped>
.this >>> .v-hl-btn {
  filter: invert(1);
}

.this >>> .v-hl-btn-next {
  margin-right: 24px;
}

.this >>> .v-hl-btn-prev {
  margin-top: 24px;
}
</style>
