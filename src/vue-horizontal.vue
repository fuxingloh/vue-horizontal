<template>
  <div class="vue-horizontal">
    <div class="v-hl-btn-prev" v-if="button && hasPrev" @click="prev">
      <slot name="btn-prev">
        <svg viewBox="0 0 24 24">
          <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
        </svg>
      </slot>
    </div>

    <div class="v-hl-btn-next" v-if="button && hasNext" @click="next">
      <slot name="btn-next">
        <svg viewBox="0 0 24 24">
          <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
        </svg>
      </slot>
    </div>

    <div class="v-hl-container" ref="container" @scroll.passive="onScrollDebounce"
         :class="{'v-hl-scroll': scroll, 'v-hl-snap': snap}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {VNode} from "vue/types/vnode";

interface VueHorizontalData {
  left: number,
  containerWidth: number;
  scrollWidth: number;

  hasPrev: boolean,
  hasNext: boolean,

  debouceId: number | null;
}

export default Vue.extend({
  name: 'VueHorizontal',
  data(): VueHorizontalData {
    return {
      left: 0,
      containerWidth: 0,
      scrollWidth: 0,

      hasPrev: false,
      hasNext: false,

      debouceId: null,
    }
  },
  props: {
    button: {
      type: Boolean,
      default: () => true,
    },
    scroll: {
      type: Boolean,
      default: () => false,
    },
    snap: {
      type: Boolean,
      default: () => true,
    },
  },
  mounted() {
    this.onScroll();
  },
  methods: {
    prev(): void {
      const {scrollLeft, clientWidth} = this.$refs.container as Element
      this.scrollToLeft(scrollLeft - clientWidth)
    },
    next(): void {
      const {scrollLeft, clientWidth} = this.$refs.container as Element
      this.scrollToLeft(scrollLeft + clientWidth)
    },
    scrollToIndex(index: number): void {
      const slots = this.$slots?.default as VNode[]
      if (slots[index]) {
        const element = slots[index].elm as Element
        const {scrollLeft} = this.$refs.container as Element

        const left = element.getBoundingClientRect().left
        this.scrollToLeft(scrollLeft + left)
      }
    },
    scrollToLeft(left: number): void {
      const element = this.$refs.container as Element
      element.scrollTo({left: left, behavior: "smooth"});
    },
    onScrollDebounce(): void {
      if (this.debouceId) {
        clearTimeout(this.debouceId);
      }
      this.debouceId = window.setTimeout(this.onScroll, 250);
    },
    onScroll(): void {
      // Firefox compatibility issue
      const delta = 2.0

      const container = this.$refs.container as Element
      const slot0 = this.$slots?.default?.[0]?.elm as Element

      this.left = container.scrollLeft
      this.containerWidth = container.clientWidth
      this.scrollWidth = container.scrollWidth

      function hasNext(): boolean {
        return container.scrollWidth > container.scrollLeft + container.clientWidth + delta
      }

      function hasPrev(): boolean {
        if (container.scrollLeft === 0) {
          return false;
        }

        const containerVWLeft = container.getBoundingClientRect().left
        const slot0VWLeft = slot0?.getBoundingClientRect()?.left ?? 0
        return Math.abs(containerVWLeft - slot0VWLeft) >= delta;
      }

      this.hasNext = hasNext()
      this.hasPrev = hasPrev()
    },
  },
});
</script>

<style scoped>
.vue-horizontal {
  position: relative;
  display: flex;
  padding: 0;
}

.v-hl-btn-prev {
  left: -24px;
  position: absolute;
  align-self: center;
}

.v-hl-btn-next {
  right: -24px;
  position: absolute;
  align-self: center;
}

svg {
  width: 42px;
  height: 42px;
  margin: 0;
  padding: 6px;
  border-radius: 21px;
  box-sizing: border-box;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

svg:hover {
  cursor: pointer;
}

.v-hl-container {
  display: flex;
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: content-box;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.v-hl-container > * {
  flex-shrink: 0;
}

.v-hl-snap > * {
  scroll-snap-align: start;
}

.v-hl-container:not(.v-hl-scroll) {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.v-hl-container:not(.v-hl-scroll)::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
