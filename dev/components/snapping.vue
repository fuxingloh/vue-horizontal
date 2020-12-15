<template>
  <div>
    <vue-horizontal class="snap-true" :snap="true" ref="snapTrue">
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>SNAP: TRUE</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <vue-horizontal class="snap-false" :snap="false" style="margin-top: 24px" ref="snapFalse">
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>SNAP: FALSE</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <div style="margin-top: 24px">
      <button @click="() => scrollTo(i)" v-for="i in [0,100,200,400,600,800]" :key="i" :class="`btn-${i}`">
        Go {{ i }}px
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueHorizontal from '@/vue-horizontal.vue';
import {Lorem} from './utils'

export default Vue.extend({
  components: {
    VueHorizontal
  },
  data() {
    const lorem = Lorem("snapping")
    return {
      items: [...Array(20).keys()].map((i) => {
        return {
          i,
          title: lorem.generateWords(2),
          content: lorem.generateWords(4),
        };
      }),
    }
  },
  methods: {
    scrollTo(left: number): void {
      [
        this.$refs.snapFalse as any,
        this.$refs.snapTrue as any,
      ].forEach(ref => {
        ref.scrollToLeft(left)
      })
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

.header {
  display: flex;
}

.header h6 {
  background: #0000db;
  font-size: 14px;
  color: white;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  border-radius: 12px;
  margin-right: 12px;
}

button {
  margin-right: 12px;
}
</style>
