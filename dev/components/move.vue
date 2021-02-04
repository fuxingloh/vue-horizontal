<template>
  <div>
    <vue-horizontal class="move-8" :displacement="0.8">
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>MOVE: 0.8</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <vue-horizontal class="move-5" :displacement="0.5">
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>MOVE: 0.5</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <vue-horizontal class="move-3" :displacement="0.3">
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>MOVE: 0.3</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import VueHorizontal from '@/VueHorizontal';
import {Lorem} from './utils'

export default defineComponent({
  components: {
    VueHorizontal
  },
  data() {
    const lorem = Lorem("move")
    return {
      items: [...Array(20).keys()].map((i) => {
        return {
          i,
          title: lorem.generateWords(2),
          content: lorem.generateWords(3),
        };
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
</style>
