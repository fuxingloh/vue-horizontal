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
import {defineComponent} from 'vue';
import VueHorizontal from '@/VueHorizontal.vue';

export default defineComponent({
  components: {
    VueHorizontal
  },
});
</script>
