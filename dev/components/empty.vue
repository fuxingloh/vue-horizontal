<template>
  <div class="should-be-empty">
    <vue-horizontal>
    </vue-horizontal>
    <div>
      Above is empty. For E2E testing.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueHorizontal from '@/vue-horizontal.vue';

export default Vue.extend({
  components: {
    VueHorizontal
  },
});
</script>
