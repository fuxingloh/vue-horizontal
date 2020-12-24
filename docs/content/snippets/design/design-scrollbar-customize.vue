<template>
  <vue-horizontal responsive scroll :button="false" class="horizontal">
    <placeholder-component-design v-for="i in [0,1,2,3,4,5,6,7,8,9,10]" :key="i">
    </placeholder-component-design>
  </vue-horizontal>
</template>

<style scoped>
.horizontal >>> .v-hl-container {
  /* Space between content and scrollbar */
  padding-bottom: 16px;

  /* For firefox only */
  scrollbar-width: thin;
  scrollbar-color: orangered black;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar {
  height: 16px;
  width: 16px;
  background: transparent;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-track {
  background: black;
  border-radius: 4px;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 6px;
  border: 4px black solid;
  background: orangered;
}
</style>
