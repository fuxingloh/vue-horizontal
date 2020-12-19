<template>
  <div>
    <vue-horizontal @scroll="onScroll" @scroll-debounce="onScrollDebounce">
      <component-example v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="i">
        <h3>Event {{ i }}</h3>
      </component-example>
    </vue-horizontal>

    <pre>{{scroll}}</pre>
    <pre>{{scrollDebounce}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scroll: 'no-event',
      scrollDebounce: 'no-event',
    }
  },
  methods: {
    onScroll(data) {
      this.scroll = data
    },
    onScrollDebounce(data) {
      this.scrollDebounce = data
    }
  }
}
</script>
