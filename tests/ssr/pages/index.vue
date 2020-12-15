<template>
  <div>
    <vue-horizontal>
      <section v-for="item in items" :key="item.i">
        <div class="item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </section>
    </vue-horizontal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      items: [...Array(10).keys()].map((i) => {
        return {i, title: `Heading ${i}`, content: `Paragraph ${i}`};
      }),
    }
  }
})
</script>
