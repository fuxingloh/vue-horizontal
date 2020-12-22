<template>
  <div class="mock-browser overflow-hidden rounded-md border border-pre-color">
    <div class="bg-pre-color p-3">
      <div class="flex items-center justify-between">
        <div class="flex -m-1">
          <div class="p-1">
            <div class="bg-red-500 w-3 h-3 rounded-full"></div>
          </div>
          <div class="p-1">
            <div class="bg-yellow-500 w-3 h-3 rounded-full"></div>
          </div>
          <div class="p-1">
            <div class="bg-green-500 w-3 h-3 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="viewport bg-white">
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

<style lang="less" scoped>
@pre-color: #2d3748;

.snippet /deep/ pre {
  margin: 0 !important;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bg-pre-color {
  background: @pre-color;
}

.border-pre-color {
  border-color: @pre-color;
}

.viewport {
  font-family: "-apple-system", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", 'sans-serif';

  /deep/ & {
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
}
</style>
