<template>
  <div>
    <vue-horizontal scroll>
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <vue-horizontal>
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import VueHorizontal from '@/VueHorizontal.vue';
import {Lorem} from './utils'

export default defineComponent({
  components: {
    VueHorizontal
  },
  data() {
    const lorem = Lorem("scroll-bar")
    return {
      items: [...Array(20).keys()].map((i) => {
        return {
          i,
          title: lorem.generateWords(1),
          content: lorem.generateWords(6),
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
  width: calc((100% - (3 * 24px)) / 4);
  margin-right: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.header {
  display: flex;
}

.header h6 {
  flex-shrink: 0;
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

div > div ::v-deep(.v-hl-container) {
  background: purple;
}

div > div ::v-deep(.v-hl-container::-webkit-scrollbar) {
  width: 8px;
  height: 8px;
  background: transparent;
}

div > div ::v-deep(.v-hl-container::-webkit-scrollbar-thumb) {
  border-radius: 10px;
  background: blue;
}

div > div ::v-deep(.v-hl-container::-webkit-scrollbar-thumb:hover) {
  background: red;
}
</style>
