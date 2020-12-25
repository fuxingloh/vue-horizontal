<template>
  <div>
    <header class="mb-4">
      <div class="flex justify-between items-center">
        <h2>My header</h2>
        <div>
          <button class="p-1 rounded-sm border focus:outline-none" @click="prev"
                  :class="{'text-gray-700 border-gray-500': hasPrev, 'text-gray-300 border-gray-200': !hasPrev}"
          >
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
              <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
            </svg>
          </button>
          <button class="p-1 rounded-sm border focus:outline-none" @click="next"
                  :class="{'text-gray-700 border-gray-500': hasNext, 'text-gray-300 border-gray-200': !hasNext}"
          >
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
              <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
            </svg>
          </button>
        </div>
      </div>
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
