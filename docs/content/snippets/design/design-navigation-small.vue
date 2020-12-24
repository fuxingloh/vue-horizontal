<template>
  <vue-horizontal responsive class="horizontal">
    <placeholder-component v-for="i in [0,1,2,3,4,5,6,7,8,9]" :key="i" small>
    </placeholder-component>
  </vue-horizontal>
</template>

<style scoped>
.horizontal >>> .v-hl-btn svg {
  height: 32px;
  width: 32px;
}
</style>
