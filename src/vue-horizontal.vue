<template>
  <div class="vue-horizontal">
    <div class="v-hl-btn v-hl-btn-prev" v-if="button && hasPrev" @click.stop="prev" role="button"
         :class="{'v-hl-btn-between': buttonBetween}">
      <slot name="btn-prev">
        <svg class="v-hl-svg" viewBox="0 0 24 24" aria-label="horizontal scroll area navigation to previous button">
          <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
        </svg>
      </slot>
    </div>

    <div class="v-hl-btn v-hl-btn-next" v-if="button && hasNext" @click.stop="next" role="button"
         :class="{'v-hl-btn-between': buttonBetween}">
      <slot name="btn-next">
        <svg class="v-hl-svg" viewBox="0 0 24 24" aria-label="horizontal scroll area navigation to next button">
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
  width: number;
  scrollWidth: number;

  hasPrev: boolean;
  hasNext: boolean;

  debounceId?: number | undefined;
}

export default Vue.extend({
  name: 'VueHorizontal',
  data(): VueHorizontalData {
    return {
      left: 0,
      width: 0,
      scrollWidth: 0,

      hasPrev: false,
      hasNext: false,

      debounceId: undefined,
    }
  },
  props: {
    button: {
      type: Boolean,
      default: () => true,
    },
    buttonBetween: {
      type: Boolean,
      default: () => true
    },
    scroll: {
      type: Boolean,
      default: () => false,
    },
    responsive: {
      type: Boolean,
      default: () => false,
    },
    /**
     * Move window, indicates the percent of width to travel when nav is triggered.
     */
    displacement: {
      type: Number,
      default: () => 1.0
    },
    /**
     * Snap to start|center|end
     */
    snap: {
      type: String,
      default: () => 'start',
    },
  },
  mounted() {
    this.onScrollDebounce();
  },
  computed: {
    slots(): VNode[] {
      return this.$slots?.default?.filter(s => s.tag) as VNode[]
    }
  },
  methods: {
    findPrevSlot(x: number): VNode | undefined {
      const slots = this.slots

      for (let i = 0; i < slots.length; i++) {
        const rect = (slots[i].elm as Element).getBoundingClientRect()

        if (rect.left <= x && x <= rect.right) {
          return slots[i]
        }

        if (x <= rect.left) {
          return slots[i]
        }
      }
    },
    findNextSlot(x: number): VNode | undefined {
      const slots = this.slots

      for (let i = 0; i < slots.length; i++) {
        const rect = (slots[i].elm as Element).getBoundingClientRect()

        if (rect.right <= x) {
          continue;
        } else if (rect.left <= x) {
          return slots[i];
        }

        if (x <= rect.left) {
          return slots[i];
        }
      }
    },
    prev(): void {
      this.$emit('prev')

      const container = this.$refs.container as Element
      const left = container.getBoundingClientRect().left
      const x = left + (container.clientWidth * -this.displacement) - delta
      const slot = this.findPrevSlot(x)

      if (slot) {
        const width = (slot.elm as Element).getBoundingClientRect().left - left
        this.scrollToLeft(container.scrollLeft + width)
        return
      }

      const width = container.clientWidth * this.displacement
      this.scrollToLeft(container.scrollLeft - width)
    },
    next(): void {
      this.$emit('next')

      const container = this.$refs.container as Element
      const left = container.getBoundingClientRect().left
      const x = left + (container.clientWidth * this.displacement) + delta
      const slot = this.findNextSlot(x)

      if (slot) {
        const width = (slot.elm as Element).getBoundingClientRect().left - left
        if (width > delta) {
          this.scrollToLeft(container.scrollLeft + width)
          return
        }
      }

      const width = container.clientWidth * this.displacement
      this.scrollToLeft(container.scrollLeft + width)
    },
    scrollToIndex(i: number): void {
      const slots = this.slots

      if (slots[i]) {
        const container = this.$refs.container as Element
        const rect = (slots[i].elm as Element).getBoundingClientRect()

        const left = rect.left - container.getBoundingClientRect().left
        this.scrollToLeft(container.scrollLeft + left)
      }
    },
    scrollToLeft(left: number, behavior: "smooth" | "auto" = "smooth"): void {
      const element = this.$refs.container as Element
      element.scrollTo({left: left, behavior: behavior});
    },
    onScroll(): void {
      const container = this.$refs.container as Element
      this.$emit('scroll', {
        left: container.scrollLeft,
      })

      clearTimeout(this.debounceId);
      // @ts-ignore
      this.debounceId = setTimeout(this.onScrollDebounce, 100);
    },
    onScrollDebounce(): void {
      this.refresh((data) => {
        this.$emit('scroll-debounce', data)
      })
    },
    refresh(callback: (data: VueHorizontalData) => void): void {
      this.$nextTick(() => {
        const data = this.calculate()

        this.left = data.left
        this.width = data.width
        this.scrollWidth = data.scrollWidth
        this.hasNext = data.hasNext
        this.hasPrev = data.hasPrev

        callback(data)
      })
    },
    calculate(): VueHorizontalData {
      const container = this.$refs.container as Element
      const slot0 = this.slots[0]?.elm as Element

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

      return {
        left: container.scrollLeft,
        width: container.clientWidth,
        scrollWidth: container.scrollWidth,
        hasNext: hasNext(),
        hasPrev: hasPrev(),
      }
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
  z-index: 1;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}

.v-hl-btn:hover {
  cursor: pointer;
}

.v-hl-btn-prev {
  left: 0;
}

.v-hl-btn-prev.v-hl-btn-between {
  transform: translateX(-50%);
}

.v-hl-btn-next {
  right: 0;
}

.v-hl-btn-next.v-hl-btn-between {
  transform: translateX(50%);
}

.v-hl-svg {
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
