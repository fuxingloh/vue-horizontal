<template>
  <vue-horizontal>
    <section v-for="item in items" :key="i">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </section>
  </vue-horizontal>
</template>

<script>
export default {
  data() {
    return {
      // E.g: creates 20 array items...
      items: [...Array(20).keys()].map((i) => {
        return {i, title: `Header ${i}`, content: `🚀 Paragraph ${i}`};
      }),
    }
  }
}
</script>

<style scoped>
section {
  padding: 16px 24px;
  margin-right: 16px;
  background: #f8f8f8;
  width: 180px;
}
</style>
