<template>
  <div>
    <vue-horizontal responsive ref="horizontal">
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <div>
      <button @click="append(i)" v-for="i in [1,5,10,20,50,100,1000]" :key="i" :class="`append-${i}`">
        Append {{ i }}
      </button>
    </div>

    <div>
      <button @click="goIndex(i)" v-for="i in [1,5,10,20,50,100,1000]" :key="i" :class="`go-${i}`">
        Go {{ i }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import VueHorizontal from '@/VueHorizontal.vue';
import {Lorem} from './utils'

const lorem = Lorem("append")

export default defineComponent({
  components: {
    VueHorizontal
  },
  data() {
    return {
      items: [{
        i: 0,
        title: lorem.generateWords(1),
        content: lorem.generateWords(4),
      }],
    }
  },
  methods: {
    append(count: number) {
      this.items.push(...[...Array(count).keys()].map((i) => {
        return {
          i: i + this.items.length,
          title: lorem.generateWords(1),
          content: lorem.generateWords(4),
        };
      }))

      const horizontal = this.$refs.horizontal as any
      this.$nextTick(() => {
        horizontal.refresh()
      })
    },
    goIndex(index: number) {
      const horizontal = this.$refs.horizontal as any
      horizontal.scrollToIndex(index)
    }
  }
});
</script>

<style scoped>
section {
  padding: 16px 24px;
  border-radius: 4px;
  background: #f5f5f5;
}

.header {
  display: flex;
}

.header h6 {
  background: #0000db;
  flex-shrink: 0;
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
  margin-top: 24px;
  margin-right: 12px;
}
</style>
