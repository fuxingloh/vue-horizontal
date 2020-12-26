<template>
  <div>
    <h3>Header A</h3>

    <vue-horizontal responsive ref="a" @scroll-debounce="onScrollDebounce">
      <placeholder-component v-for="i in items" :key="i">
        a{{ i }}
      </placeholder-component>
    </vue-horizontal>

    <h3 style="margin-top: 24px">Header B</h3>

    <vue-horizontal responsive ref="b" @scroll-debounce="onScrollDebounce">
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
    onScrollDebounce({left}) {
      this.$refs.a.scrollToLeft(left)
      this.$refs.b.scrollToLeft(left)
    },
  }
}
</script>
