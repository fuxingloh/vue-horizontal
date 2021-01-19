<template>
  <vue-horizontal>
    <section v-for="item in items" :key="item.i">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
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
  data() {
    return {
      items: [...Array(20).keys()].map((i) => {
        return {i, title: `Item ${i}`, content: `Border box ${i}`};
      }),
    }
  }
});
</script>

<style scoped>
section {
  padding: 16px 24px;
  border-radius: 4px;
  background: #f5f5f5;
  margin-right: 24px;
  box-sizing: border-box;
  width: calc((100% - (3 * 24px)) / 4);
}
</style>
