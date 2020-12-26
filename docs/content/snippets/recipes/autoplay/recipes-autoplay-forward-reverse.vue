<template>
  <vue-horizontal responsive ref="horizontal" @scroll-debounce="onScrollDebounce">
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
      forward: true,
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
      // Check if direction need to be reversed
      if (this.hasNext !== this.hasPrev) {
        this.forward = !this.forward
      }

      if (this.forward && this.hasNext) {
        this.$refs.horizontal.next()
      } else if (!this.forward && this.hasPrev) {
        this.$refs.horizontal.prev()
      }
    }
  }
}
</script>
