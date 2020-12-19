<template>
  <vue-horizontal>
    <div class="item">
      <h3>HTML Tag</h3>
      <p>As you can see these are just html elements.</p>
    </div>
    <section>
      <h4>Don't have to be the same tag</h4>
      <p>I used a h4 instead of a h3</p>
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
    <section v-for="item in items" :key="i">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </section>
    <section>
      <h3>Last item?</h3>
      <p>Maybe you want to display somethind ifferent at the end?</p>
    </section>
  </vue-horizontal>
</template>

<script>
export default {
  data() {
    return {
      // E.g: creates 5 array items...
      items: [...Array(5).keys()].map((i) => {
        return {i, title: `v-for: ${i}`, content: `🚀 Paragraph ${i}`};
      }),
    }
  }
}
</script>


<style scoped>
section,
.item {
  background: #f3f3f3;
  padding: 16px 24px;
  margin-right: 24px;
}
</style>
