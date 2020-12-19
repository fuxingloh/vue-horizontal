<template>
  <div>
    <vue-horizontal
      @scroll="(data) => scroll = data"
      @scroll-debounce="(data) => scrollDebounce = data"
      @prev="(data) => prev = data"
      @next="(data) => next = data"
    >
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <pre class="scroll"><code>{{ scroll }}</code></pre>
    <pre class="scroll-debounce"><code>{{ scrollDebounce }}</code></pre>
    <pre class="prev"><code>{{ prev }}</code></pre>
    <pre class="next"><code>{{ next }}</code></pre>
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
    const lorem = Lorem("event")
    return {
      items: [...Array(20).keys()].map((i) => {
        return {
          i,
          title: lorem.generateWords(1),
          content: lorem.generateWords(6),
        };
      }),
      scroll: 'no-event',
      scrollDebounce: 'no-event',
      prev: 'no-event',
      next: 'no-event',
    }
  },
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

pre {
  margin-top: 24px;
  padding: 16px;
  background: #f8f8f8;
  border-radius: 3px;
}
</style>
