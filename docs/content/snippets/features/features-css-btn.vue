<template>
  <vue-horizontal class="this">
    <component-example v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
      <h3>Button {{ i }}</h3>
    </component-example>
  </vue-horizontal>
</template>

<style scoped>
.this >>> .v-hl-btn {
  filter: invert(1);
}

.this >>> .v-hl-btn-next {
  transform: translateX(0);
}

.this >>> .v-hl-btn-prev {
  top: 0;
}

.this >>> .v-hl-btn-prev svg {
  margin: 0;
  padding: 4px;
  height: 30px;
  width: 30px;
}
</style>
