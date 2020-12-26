<template>
  <vue-horizontal>
    <component-example class="component" v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
      <h3>Override {{i}}</h3>
    </component-example>

    <template v-slot:btn-prev>
      <button>Prev</button>
    </template>

    <button slot="btn-next">
      Next
    </button>
  </vue-horizontal>
</template>

<style scoped>
button {
  padding: 8px;
  background: black;
  color: white;
  font-weight: 700;
}
</style>
