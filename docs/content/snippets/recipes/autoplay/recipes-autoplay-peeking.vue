<template>
  <vue-horizontal responsive ref="horizontal" :snap="peeked ? 'snap' : 'none'" :button="peeked">
    <placeholder-component v-for="i in [0,1,2,3,4,5,6,7,8,9]" :key="i">
      {{ i }}
    </placeholder-component>
  </vue-horizontal>
</template>

<script>
export default {
  data() {
    return {
      peeked: false,
      timeout: null,
    }
  },
  mounted() {
    // Custom observe visibility is below
    // Much easier way: https://www.npmjs.com/package/vue-observe-visibility
    observeVisibility(this.$refs.horizontal.$el, this.peeking)
  },
  destroyed() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  },
  methods: {
    peeking(visible) {
      if (!visible) {
        return
      }

      this.peeked = false

      this.timeout = setTimeout(() => {
        this.$refs.horizontal.scrollToLeft(48)

        this.timeout = setTimeout(() => {
          this.$refs.horizontal.scrollToLeft(0)

          this.timeout = setTimeout(() => {
            this.peeked = true
          }, 1000)
        }, 400)
      }, 1000)
    },

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
