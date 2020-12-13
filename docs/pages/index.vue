<template>
  <div class="container mx-auto px-4">
    <h1>Vue</h1>

    <vue-horizontal>
      <div v-for="item in items" class="item" :key="item.i">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </div>
    </vue-horizontal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueHorizontal from "~/components/vue-horizontal.vue";

export default Vue.extend({
  components: {VueHorizontal},
  data() {
    return {
      items: [...Array(20).keys()].map((i) => {
        return {i, title: `Item ${i}`, content: `🚀 Simple content ${i}`};
      }),
    }
  }
})
</script>

<style scoped>
.item {
  padding: 16px 24px;
  border-radius: 4px;
  background: #f5f5f5;
  margin-right: 24px;
  box-sizing: border-box;
  width: calc((100% - (3 * 24px)) / 4);
}
</style>
