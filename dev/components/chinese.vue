<template>
  <div>
    <VueHorizontal responsive>
      <section v-for="item in items" :key="item.i">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </section>
    </VueHorizontal>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {items} from './utils'
import VueHorizontal from '@/VueHorizontal.vue';

export default defineComponent({
  components: {
    VueHorizontal
  },
  setup() {
    return {
      items: items(20, (i) => {
        return {
          i,
          title: `第 ${i}`,
          content: `你好，给这个程序一个兴`,
        };
      }),
    }
  },
});
</script>

<style scoped>
section {
  padding: 16px 24px;
  border-radius: 4px;
  background: #f5f5f5;
}
</style>
