<template>
  <vue-horizontal responsive>
    <section v-for="item in items" :key="i">
      <h4>{{ item.title }}</h4>
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
        return {i, title: `Responsive`, content: `Content`};
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
}
</style>
