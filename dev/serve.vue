<script lang="ts">
import Vue from 'vue';
import VueHorizontal from '@/vue-horizontal.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueHorizontal
  }
});
</script>

<template>
  <div id="app">
    <vue-horizontal />
  </div>
</template>
