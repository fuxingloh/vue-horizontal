<template>
  <vue-horizontal>
    <div v-for="item in items" class="item">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </div>
  </vue-horizontal>
</template>

<script lang="ts">
import Vue from 'vue';
import VueHorizontal from '@/vue-horizontal.vue';

export default Vue.extend({
  name: 'example',
  components: {
    VueHorizontal
  },
  data() {
    return {
      items: [...Array(20).keys()].map((i) => {
        return {title: `Item ${i}`, content: `🚀 Simple content ${i}`};
      }),
    }
  }
});
</script>

<style scoped>
.item {
  padding: 16px 24px;
  border-radius: 4px;
  background: #f5f5f5;

  margin-left: 12px;
  margin-right: 12px;
  box-sizing: border-box;
  flex-basis: calc((100% - (3 * 24px)) / 4);
}
</style>
