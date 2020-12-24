<template>
  <div class="vue-horizontal">
    <div class="v-hl-btn v-hl-btn-prev" v-if="button && hasPrev" @click="prev">
      <slot name="btn-prev">
        <svg viewBox="0 0 24 24">
          <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
        </svg>
      </slot>
    </div>

    <div class="v-hl-btn v-hl-btn-next" v-if="button && hasNext" @click="next">
      <slot name="btn-next">
        <svg viewBox="0 0 24 24">
          <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
        </svg>
      </slot>
    </div>

    <div class="v-hl-container" ref="container" @scroll.passive="onScroll" :class="{
      'v-hl-responsive': responsive,
      'v-hl-scroll': scroll,
      'v-hl-snap-start': snap === 'start',
      'v-hl-snap-center': snap === 'center',
      'v-hl-snap-end': snap === 'end',
    }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {VNode} from "vue/types/vnode";

// Compatibility delta due to rounding issues
const delta = 2.5

interface VueHorizontalData {
  left: number;
  containerWidth: number;
  scrollWidth: number;

  hasPrev: boolean;
  hasNext: boolean;

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
    responsive: {
      type: Boolean,
      default: () => false,
    },
    snap: {
      type: String,
      default: () => 'start',
    },
  },
  mounted() {
    this.onScrollDebounce();
  },
  methods: {
    findIntersectElement(point: number): Element | undefined {
      const slots = this.$slots?.default?.filter(s => s.tag) as VNode[]

      for (const slot of slots) {
        const element = slot.elm as Element
        const {left: l, right: r} = element.getBoundingClientRect()
        if (l <= point && point <= r) {
          return element
        }
      }
    },
    prev(): void {
      const container = this.$refs.container as Element
      const {left, right} = container.getBoundingClientRect()

      const elm = this.findIntersectElement(left - delta)
      const width = elm ? right - elm.getBoundingClientRect().right : container.clientWidth

      this.scrollToLeft(container.scrollLeft - width)
      this.$emit('prev', {width})
    },
    next(): void {
      const container = this.$refs.container as Element
      const {left, right} = container.getBoundingClientRect()

      const elm = this.findIntersectElement(right + delta)
      const width = elm ? elm.getBoundingClientRect().left - left : container.clientWidth

      this.scrollToLeft(container.scrollLeft + width)
      this.$emit('next', {width})
    },
    scrollToIndex(index: number): void {
      const slots = this.$slots?.default?.filter(s => s.tag) as VNode[]
      if (slots[index]) {
        const container = this.$refs.container as Element
        const element = slots[index].elm as Element

        const left = element.getBoundingClientRect().left - container.getBoundingClientRect().left
        this.scrollToLeft(container.scrollLeft + left)
      }
    },
    scrollToLeft(left: number): void {
      const element = this.$refs.container as Element
      element.scrollTo({left: left, behavior: "smooth"});
    },
    onScroll(): void {
      const container = this.$refs.container as Element
      this.$emit('scroll', {
        left: container.scrollLeft,
      })

      if (this.debouceId) {
        clearTimeout(this.debouceId);
      }
      this.debouceId = window.setTimeout(this.onScrollDebounce, 250);
    },
    onScrollDebounce(): void {
      const container = this.$refs.container as Element
      const slot0 = this.$slots?.default?.find(s => s.tag)?.elm as Element

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

      this.$emit('scroll-debounce', {
        left: this.left,
        containerWidth: this.containerWidth,
        scrollWidth: this.scrollWidth,
        hasPrev: this.hasPrev,
        hasNext: this.hasNext,
      })
    },
  },
});
</script>

<style scoped>
.vue-horizontal {
  position: relative;
  display: flex;
}

.v-hl-btn {
  position: absolute;
  align-self: center;
  line-height: 0;
  z-index: 1;
}

.v-hl-btn:hover {
  cursor: pointer;
}

.v-hl-btn-prev {
  left: 0;
  transform: translateX(-50%);
}

.v-hl-btn-next {
  right: 0;
  transform: translateX(50%);
}

svg {
  width: 40px;
  height: 40px;
  margin: 6px;
  padding: 6px;
  border-radius: 20px;
  box-sizing: border-box;
  background: white;
  color: black;
  fill: currentColor;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.v-hl-container {
  display: flex;
  width: 100%;
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
  box-sizing: border-box;
}

.v-hl-snap-start > * {
  scroll-snap-align: start;
}

.v-hl-snap-center > * {
  scroll-snap-align: center;
}

.v-hl-snap-end > * {
  scroll-snap-align: end;
}

.v-hl-container:not(.v-hl-scroll) {
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* To effectively hide scrollbar for iOS Safari. 10% of the users. */
  padding-bottom: 30px;
  margin-bottom: -30px;
  clip-path: inset(0 0 30px 0);
}

.v-hl-container:not(.v-hl-scroll)::-webkit-scrollbar {
  /* !important: So that users don't accidentally show scrollbar. */
  width: 0 !important;
  height: 0 !important;
}

/* Using https://tailwindcss.com/docs/responsive-design breakpoints. */

.v-hl-responsive > * {
  width: 100%;
  margin-right: 24px;
}

@media (min-width: 640px) {
  .v-hl-responsive > * {
    width: calc((100% - (24px)) / 2);
  }
}

@media (min-width: 768px) {
  .v-hl-responsive > * {
    width: calc((100% - (2 * 24px)) / 3);
  }
}

@media (min-width: 1024px) {
  .v-hl-responsive > * {
    width: calc((100% - (3 * 24px)) / 4);
  }
}

@media (min-width: 1280px) {
  .v-hl-responsive > * {
    width: calc((100% - (4 * 24px)) / 5);
  }
}
</style>
