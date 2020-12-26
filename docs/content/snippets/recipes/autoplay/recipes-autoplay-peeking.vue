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
    const observer = new IntersectionObserver(this.peek, {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 1.0
    });

    observer.observe(this.$refs.horizontal.$el);
  },
  destroyed() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  },
  methods: {
    peek() {
      this.peeked = false

      // To run it only once:
      // if (this.peeked) return

      // Timeout chaining, left 48px, back to 0, show button

      this.timeout = setTimeout(() => {
        this.$refs.horizontal.scrollToLeft(48)

        this.timeout = setTimeout(() => {
          this.$refs.horizontal.scrollToLeft(0)

          this.timeout = setTimeout(() => {
            this.peeked = true
          }, 1000)
        }, 400)
      }, 2000)
    },

  }
}
</script>
