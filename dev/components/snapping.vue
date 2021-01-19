<template>
  <div>
    <vue-horizontal v-for="snap in ['start', 'center', 'end', 'none']"
                    :class="`snap-${snap}`" :snap="snap" ref="horizontal" :key="snap">
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>SNAP: {{ snap }}</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <div>
      <button @click="() => scrollTo(i)" v-for="i in [0,100,200,400,600,800]" :key="i" :class="`btn-${i}`">
        Go {{ i }}px
      </button>
    </div>
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
      // @ts-ignore
      this.$refs.horizontal.forEach(ref => {
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
