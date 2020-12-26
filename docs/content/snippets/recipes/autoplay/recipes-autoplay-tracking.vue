<template>
  <div>
    <h3>Header A</h3>

    <vue-horizontal responsive @scroll="onScroll">
      <placeholder-component v-for="i in items" :key="i">
        a{{ i }}
      </placeholder-component>
    </vue-horizontal>

    <h3 style="margin-top: 24px">Header B</h3>

    <vue-horizontal responsive ref="b" snap="none" class="horizontal">
      <placeholder-component v-for="i in items" :key="i">
        b{{ i }}
      </placeholder-component>
    </vue-horizontal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [...Array(30).keys()],
    }
  },
  methods: {
    onScroll({left}) {
      this.$refs.b.scrollToLeft(left, "auto")
    },
  }
}
</script>

<style scoped>
.horizontal >>> .v-hl-container {
  scroll-behavior: initial;
}
</style>
