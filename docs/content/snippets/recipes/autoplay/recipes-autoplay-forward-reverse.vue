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
    // Custom observe visibility is below
    // Much easier way: https://www.npmjs.com/package/vue-observe-visibility
    observeVisibility(this.$refs.horizontal.$el, (visible) => {
      if (visible) {
        this.interval = setInterval(this.play, 3000)
      } else {
        clearInterval(this.interval)
      }
    })
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

/**
 * Custom function, much easier way: https://www.npmjs.com/package/vue-observe-visibility
 *
 * @param element to track visibility
 * @param callback: function(boolean) when visibility change
 */
function observeVisibility(element, callback) {
  const observer = new IntersectionObserver((records) => {
    callback(records.find(record => record.isIntersecting))
  }, {rootMargin: '10% 0% 10% 0%', threshold: 1.0});
  observer.observe(element);
}
</script>
