<template>
  <div class="vue-horizontal">
    <div class="v-hl-btn-prev" v-if="button && hasPrev" @click="prev">
      <slot name="btn-left">
        <svg viewBox="0 0 24 24">
          <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
        </svg>
      </slot>
    </div>

    <div class="v-hl-btn-next" v-if="button && hasNext" @click="next">
      <slot name="btn-right">
        <svg viewBox="0 0 24 24">
          <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
        </svg>
      </slot>
    </div>

    <div class="v-hl-container" :class="{scroll,snap}" ref="container" @scroll.passive="onScrollDebounced">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface VueHorizontalData {
  container: {
    absoluteLeft: number;
    scrollLeft: number;
    clientWidth: number;
    scrollWidth: number;
  };

  slotted: {
    absoluteLeft: number;
  };

  debouceId: number | null;
}

export default Vue.extend({
  name: 'VueHorizontal',
  data(): VueHorizontalData {
    return {
      container: {
        absoluteLeft: 0,
        scrollLeft: 0,
        clientWidth: 0,
        scrollWidth: 0,
      },
      slotted: {
        absoluteLeft: 0,
      },
      debouceId: null
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
  computed: {
    hasPrev(): boolean {
      const {container, slotted} = this as VueHorizontalData
      if (container.scrollLeft === 0) {
        return false;
      }
      return Math.abs(container.absoluteLeft - slotted.absoluteLeft) >= 0.5;

    },
    hasNext(): boolean {
      const {scrollLeft, scrollWidth, clientWidth} = this.container
      return scrollWidth !== scrollLeft + clientWidth
    }
  },
  methods: {
    prev(): void {
      const {scrollLeft, clientWidth} = this.container
      this.scrollTo(scrollLeft - clientWidth)
    },
    next(): void {
      const {scrollLeft, clientWidth} = this.container
      this.scrollTo(scrollLeft + clientWidth)
    },
    scrollTo(left: number): void {
      const element = this.$refs.container as Element
      element.scrollTo({left: left, behavior: "smooth"});
    },
    onScrollDebounced(): void {
      if (this.debouceId) {
        clearTimeout(this.debouceId);
      }
      this.debouceId = window.setTimeout(this.onScroll, 250);
    },
    onScroll(): void {
      const container = this.$refs.container as Element
      this.container.scrollLeft = container.scrollLeft;
      this.container.clientWidth = container.clientWidth;
      this.container.scrollWidth = container.scrollWidth;
      this.container.absoluteLeft = container.getBoundingClientRect().left

      const slotted = this.$slots?.default?.[0]?.elm as Element
      this.slotted.absoluteLeft = slotted?.getBoundingClientRect()?.left ?? 0

      console.log(`container: ${JSON.stringify(this.container)}`)
      console.log(`slotted: ${JSON.stringify(this.slotted)}`)
    },
  },
});
</script>

<style scoped>
.vue-horizontal {
  position: relative;
  display: flex;
}

.v-hl-btn-prev,
.v-hl-btn-next {
  position: absolute;
  align-self: center;
}

.v-hl-btn-prev {
  left: -24px;
}

.v-hl-btn-next {
  right: -24px;
}

svg {
  width: 42px;
  height: 42px;
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

.v-hl-container.snap > * {
  scroll-snap-align: start;
}

.v-hl-container:not(.scroll) {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.v-hl-container:not(.scroll)::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
