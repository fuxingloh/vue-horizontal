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
import {defineComponent, ref} from 'vue';
import VueHorizontal from '@/VueHorizontal';
import {Lorem} from './utils'


export default defineComponent({
  components: {
    VueHorizontal
  },
  setup() {
    const horizontal = ref<any>(null)
    const lorem = Lorem("append")
    const items = ref([
      {
        i: 0,
        title: lorem.generateWords(1),
        content: lorem.generateWords(4),
      }
    ])

    return {
      items,
      horizontal,
      append(count: number) {
        items.value.push(...[...Array(count).keys()].map((i) => {
          return {
            i: i + items.value.length,
            title: lorem.generateWords(1),
            content: lorem.generateWords(4),
          };
        }))

        horizontal.value.refresh()
      },
      goIndex(index: number) {
        horizontal.value.scrollToIndex(index)
      }
    }
  },
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

button {
  margin-top: 24px;
  margin-right: 12px;
}
</style>
