<template>
  <vue-horizontal class="vhl">
    <section v-for="item in items" :key="item.i">
      <div class="item">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </div>
    </section>
  </vue-horizontal>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import VueHorizontal from '@/VueHorizontal';

export default defineComponent({
  components: {
    VueHorizontal
  },
  setup() {
    return {
      items: [...Array(20).keys()].map((i) => {
        return {i, title: `Item ${i}`, content: `Content box ${i}`};
      }),
    }
  }
});
</script>

<style scoped>
section {
  box-sizing: content-box;
  width: calc((100% - (3 * 24px)) / 4);
  margin-right: 24px;
}

.item {
  padding: 16px 24px;
  border-radius: 4px;
  background: #f5f5f5;
}
</style>
