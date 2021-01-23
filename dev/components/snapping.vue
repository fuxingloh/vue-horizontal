<template>
  <div>
    <vue-horizontal v-for="(snap, i) in ['start', 'center', 'end', 'none']" :key="snap"
                    :class="`snap-${snap}`" :snap="snap" :ref="el => { horizontals[i] = el }">
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
import {defineComponent, ref} from 'vue';
import VueHorizontal from '@/VueHorizontal.vue';
import {loremItems} from './utils'

export default defineComponent({
  components: {
    VueHorizontal
  },
  setup() {
    const items = loremItems("snapping", 20);
    const horizontals = ref([])

    return {
      items,
      horizontals,
      scrollTo(left: number) {
        horizontals.value.forEach(ref => {
          ref.scrollToLeft(left)
        })
      }
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
