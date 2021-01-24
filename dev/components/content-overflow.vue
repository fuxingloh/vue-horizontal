<template>
  <vue-horizontal>
    <section v-for="i in [0,1,2,3,4]" :key="i">
      <div class="item">
        <h3>Large Item</h3>
      </div>
    </section>
  </vue-horizontal>
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

<style scoped>
section {
  box-sizing: content-box;
  width: calc(100vw * 2);
  margin-right: 24px;
}

.item {
  color: white;
  padding: 16px 24px;
  border-radius: 4px;
  background-color: #20bf55;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
}
</style>
