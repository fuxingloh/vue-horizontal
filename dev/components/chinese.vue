<template>
  <div>
    <VueHorizontal>
      <section v-for="item in items" :key="item.i" class="responsive">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </section>
    </VueHorizontal>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {items} from './utils'
import VueHorizontal from '@/VueHorizontal';

export default defineComponent({
  components: {
    VueHorizontal
  },
  setup() {
    return {
      items: items(20, (i) => {
        return {
          i,
          title: `第 ${i}`,
          content: `你好，给这个程序一个兴`,
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
