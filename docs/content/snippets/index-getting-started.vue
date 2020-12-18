<template>
  <vue-horizontal>
    <div class="item">
      <h3>HTML</h3>
      <p>Can be just any HTML declaration</p>
    </div>
    <section v-for="i in items" :key="i">
      <h3>{{ i }}</h3>
      <p>v-for</p>
    </section>
    <section>
      <h3>Navigation Button</h3>
      <p>The navigation button will appear if there is an overflow.</p>
    </section>
    <section>
      <h3>Scroll</h3>
      <p>You can just trackpad to scroll still!</p>
    </section>
    <section>
      <h3>Touch screen</h3>
      <p>Touch screen works too!</p>
    </section>
  </vue-horizontal>
</template>

<script>
// Depending on how you installed it, import it if required.
// import VueHorizontal from 'vue-horizontal';

export default {
  // components: {VueHorizontal},
  data() {
    return {items: [1, 2, 3]}
  },
}
</script>

<style scoped>
section,
.item {
  background: #f3f3f3;
  padding: 16px 24px;
  margin-right: 24px;
  border-radius: 4px;
}
</style>
