<template>
  <div>
    <VueHorizontal ref="horizontal">
      <section v-for="item in items" :key="item.i" class="responsive">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <p>{{ item.content }}</p>
      </section>
    </VueHorizontal>

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

<style scoped>
.responsive {
  width: 100%;
  margin-right: 24px;
}

.responsive:last-child {
  margin-right: 0;
}

@media (min-width: 640px) {
  .responsive {
    width: calc((100% - 24px) / 2);
  }
}

@media (min-width: 768px) {
  .responsive {
    width: calc((100% - 48px) / 3);
  }
}

@media (min-width: 1024px) {
  .responsive {
    width: calc((100% - 72px) / 4);
  }
}

@media (min-width: 1280px) {
  .responsive {
    width: calc((100% - 96px) / 5);
  }
}
</style>
