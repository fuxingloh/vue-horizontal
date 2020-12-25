<template>
  <div>
    <header class="mb-4 flex justify-between items-center">
      <h2>My header</h2>
      <nav>
        <button @click="prev" :class="{'active': hasPrev, 'inactive': !hasPrev}">
          <svg viewBox="0 0 24 24">
            <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
          </svg>
        </button>
        <button @click="next" :class="{'active': hasNext, 'inactive': !hasNext}">
          <svg viewBox="0 0 24 24">
            <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
          </svg>
        </button>
      </nav>
    </header>

    <vue-horizontal responsive :button="false" ref="horizontal" @scroll-debounce="onScroll">
      <placeholder-component v-for="i in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]" :key="i">
      </placeholder-component>
    </vue-horizontal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasPrev: false,
      hasNext: true,
    }
  },
  methods: {
    prev() {
      this.$refs.horizontal.prev()
    },
    next() {
      this.$refs.horizontal.next()
    },
    onScroll({hasPrev, hasNext}) {
      this.hasPrev = hasPrev
      this.hasNext = hasNext
    }
  },
}
</script>

<style scoped>
/* Content styling is done with tailwind postcss @apply for brevity. */

header {
  @apply mb-4 flex justify-between items-center;
}

nav > button {
  @apply p-1 rounded-sm border outline-none;
}

nav > button.active {
  @apply text-gray-700 border-gray-500;
}

nav > button.inactive {
  @apply text-gray-300 border-gray-200;
}

nav > button:focus {
  @apply outline-none;
}

nav > button > svg {
  @apply h-6 w-6 fill-current;
}
</style>
