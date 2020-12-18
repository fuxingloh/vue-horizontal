<template>
  <div class="mock-browser border border-gray-200">
    <div class="bg-gray-100 p-3 border-b border-gray-200">
      <div class="flex items-center justify-between">
        <div class="flex -m-1">
          <div v-for="color in ['red','yellow','green']" :key="color"
               class="p-1">
            <div :class="`bg-${color}-500`" class="w-3 h-3 rounded-full bg-black">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="viewport p-8 bg-white">
      <slot></slot>
    </div>

    <div class="snippet">
      <slot name="snippet"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mock-browser"
}
</script>

<style scoped>
.mock-browser {
  border-radius: 0.375rem;
}

.snippet pre {
  margin: 0 !important;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

<style lang="less">
.viewport {
  font-family: "-apple-system", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", 'sans-serif';

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  p {
    font-weight: 500;
  }
}
</style>
