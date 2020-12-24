<template>
  <vue-horizontal>
    <section v-for="item in items" :key="item.i">
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
  background: #f3f3f3;
  width: 100%;
  margin-right: 24px;
}

@media (min-width: 640px) {
  section {
    width: calc((100% - (24px)) / 2);
  }
}

@media (min-width: 768px) {
  section {
    width: calc((100% - (2 * 24px)) / 3);
  }
}

@media (min-width: 1024px) {
  section {
    width: calc((100% - (3 * 24px)) / 4);
  }
}

@media (min-width: 1280px) {
  section {
    width: calc((100% - (4 * 24px)) / 5);
  }
}
</style>
