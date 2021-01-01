<template>
  <div @mousedown.left="onMouseDown">
    <vue-horizontal responsive class="horizontal" ref="horizontal" snap="none" :button="false"
                    @scroll="onScroll">
      <placeholder-component v-for="i in [0,1,2,3,4,5,6,7,8,9,10,11]" :key="i">
        {{ i }}
      </placeholder-component>
    </vue-horizontal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: 0,
      originX: 0,
      originLeft: 0,
    }
  },
  destroyed() {
    this.onMouseUp()
  },
  methods: {
    onScroll({left}) {
      this.left = left
    },
    onMouseDown(e) {
      this.originX = e.pageX
      this.originLeft = this.left

      window.addEventListener("mouseup", this.onMouseUp);
      window.addEventListener("mousemove", this.onMouseMove);
    },
    onMouseUp() {
      window.removeEventListener("mouseup", this.onMouseUp);
      window.removeEventListener("mousemove", this.onMouseMove);
    },
    onMouseMove(e) {
      const offset = e.pageX - this.originX
      const left = this.originLeft - offset
      this.$refs.horizontal.scrollToLeft(left, 'auto')
    }
  }
}
</script>

<style scoped>
.horizontal {
  cursor: move;
  user-select: none;
}
</style>
