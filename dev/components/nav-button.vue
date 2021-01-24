<template>
  <div>
    <vue-horizontal button class="button-true">
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>BUTTON: TRUE</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <vue-horizontal :button="false" class="button-false">
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>BUTTON: FALSE</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <vue-horizontal :button-between="false" class="button-not-between">
      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>BUTTON BETWEEN: FALSE</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <vue-horizontal class="button-replaced">
      <template v-slot:btn-prev>
        <button>
          PREV
        </button>
      </template>

      <template v-slot:btn-next>
        <button>
          NEXT
        </button>
      </template>

      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>BUTTON: REPLACED</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <vue-horizontal class="button-replaced-not-between" :button-between="false">
      <template v-slot:btn-prev>
        <button>
          PREV
        </button>
      </template>

      <template v-slot:btn-next>
        <button>
          NEXT
        </button>
      </template>

      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>BUTTON: REPLACED</h6>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>

    <vue-horizontal class="prevent-default">
      <template v-slot:btn-next>
        <button @click.stop="nextPreventDefault" class="btn-prevent-default">
          NEXT
        </button>
      </template>

      <section v-for="item in items" :key="item.i">
        <div class="header">
          <h6>{{ item.i }}</h6>
          <h3>{{ item.title }}</h3>
        </div>
        <h6>BUTTON: PREVENT DEFAULT</h6>
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
    const lorem = Lorem("nav-button")
    return {
      items: [...Array(20).keys()].map((i) => {
        return {
          i,
          title: lorem.generateWords(2),
          content: lorem.generateWords(3),
        };
      }),
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    nextPreventDefault() {

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
