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
import Vue from 'vue';
import VueHorizontal from '@/vue-horizontal.vue';

export default Vue.extend({
  components: {
    VueHorizontal
  },
  data() {
    return {
      items: [...Array(20).keys()].map((i) => {
        return {i, title: `Item ${i}`, content: `🚀 Simple content ${i}`};
      }),
    }
  }
});
</script>

<style scoped>
section {
  box-sizing: content-box;
  width: calc(100% / 4);
  margin: 0 12px;
}

.item {
  padding: 16px 24px;
  border-radius: 4px;
  background: #f5f5f5;
}

/*section {*/
/*  margin-left: -12px;*/
/*  margin-right: 12px;*/
/*}*/

.vhl {
  background: red;
}
</style>
