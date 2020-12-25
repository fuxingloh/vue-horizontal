<template>
  <vue-horizontal :button="false">
    <component-example class="component" v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
      <h3>Disabled {{i}}</h3>
    </component-example>
  </vue-horizontal>
</template>
