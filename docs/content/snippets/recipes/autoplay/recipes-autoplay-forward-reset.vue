<template>
  <vue-horizontal responsive ref="horizontal" @scroll-debounce="onScrollDebounce" :displacement="displacement">
    <placeholder-component v-for="i in items" :key="i">
      {{ i }}
    </placeholder-component>
  </vue-horizontal>
</template>

<script>
export default {
  data() {
    return {
      items: [...Array(30).keys()],
      hasPrev: false,
      hasNext: false,
      interval: null,
      // relative width to move when next/prev is clicked.
      displacement: 1.0,
    }
  },
  mounted() {
    this.interval = setInterval(this.play, 3000)
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    onScrollDebounce({hasNext, hasPrev}) {
      this.hasPrev = hasPrev
      this.hasNext = hasNext
    },
    play() {
      if (!this.hasNext && this.hasPrev) {
        this.$refs.horizontal.scrollToIndex(0)
        this.displacement = 1.0
        return
      }

      if (this.hasNext) {
        this.$refs.horizontal.next()

        // After first nav, change displacement window to just 60%
        this.displacement = 0.6
      }
    }
  }
}
</script>
