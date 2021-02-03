<template>
  <div class="vue-horizontal"
       :style="{
        'position': 'relative',
        'display': 'flex',
       }"
  >
    <div class="v-hl-btn v-hl-btn-prev" v-if="button && hasPrev" @click.stop="prev" role="button"
         :style="{
          'left': 0,
          'cursor': 'pointer',
          'position': 'absolute',
          'align-self': 'center',
          'z-index': 1,
          'top': 0,
          'bottom': 0,
          'display': 'flex',
          'align-items': 'center',
          'transform': buttonBetween ? 'translateX(-50%)': 'none',
         }"
    >
      <slot name="btn-prev">
        <svg class="v-hl-svg" viewBox="0 0 24 24" aria-label="horizontal scroll area navigate to previous button"
             :style="{
              'width': '40px',
              'height': '40px',
              'margin': '6px',
              'padding': '6px',
              'border-radius': '20px',
              'box-sizing': 'border-box',
              'background': 'white',
              'color': 'black',
              'fill': 'currentColor',
              'box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
             }"
        >
          <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
        </svg>
      </slot>
    </div>

    <div class="v-hl-btn v-hl-btn-next" v-if="button && hasNext" @click.stop="next" role="button"
         :style="{
          'right': 0,
          'cursor': 'pointer',
          'position': 'absolute',
          'align-self': 'center',
          'z-index': 1,
          'top': 0,
          'bottom': 0,
          'display': 'flex',
          'align-items': 'center',
          'transform': buttonBetween ? 'translateX(50%)': 'none',
         }"
    >
      <slot name="btn-next">
        <svg class="v-hl-svg" viewBox="0 0 24 24" aria-label="horizontal scroll area navigate to next button"
             :style="{
              'width': '40px',
              'height': '40px',
              'margin': '6px',
              'padding': '6px',
              'border-radius': '20px',
              'box-sizing': 'border-box',
              'background': 'white',
              'color': 'black',
              'fill': 'currentColor',
              'box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
             }"
        >
          <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
        </svg>
      </slot>
    </div>

    <div class="v-hl-container" ref="container" @scroll.passive="onScroll"
         :class="{
          'v-hl-scroll': scroll,
          'v-hl-snap-start': snap === 'start',
          'v-hl-snap-center': snap === 'center',
          'v-hl-snap-end': snap === 'end',
          }"
         :style="{
          'display': 'flex',
          'width': '100%',
          'margin': 0,
          'padding': 0,
          'border': 'none',
          'box-sizing': 'content-box',
          'overflow-x': 'scroll',
          'overflow-y': 'hidden',
          'scroll-snap-type': 'x mandatory',
          '-webkit-overflow-scrolling': 'touch',

          /* Hiding scrollbar */
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          /* To effectively hide scrollbar for iOS Safari. 10% of the users. */
          'padding-bottom': '30px',
          'margin-bottom': '-30px',
          'clip-path': 'inset(0 0 30px 0)',
         }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, nextTick} from 'vue'

// Compatibility delta due to rounding issues
const delta = 2.5

export default defineComponent({
  name: 'VueHorizontal',
  data() {
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
    /**
     * Navigation button visibility
     */
    button: {
      type: Boolean,
      default: () => true,
    },
    /**
     * Navigation button alignment, default to between the edge of the horizontal axis.
     */
    buttonBetween: {
      type: Boolean,
      default: () => true
    },
    /**
     * Scrollbar visibility
     */
    scroll: {
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
  methods: {
    children(): HTMLCollection {
      const container = this.$refs.container as Element
      return container.children
    },
    findPrevSlot(x: number): Element | undefined {
      const children = this.children()

      for (let i = 0; i < children.length; i++) {
        const rect = children[i].getBoundingClientRect()

        if (rect.left <= x && x <= rect.right) {
          return children[i]
        }

        if (x <= rect.left) {
          return children[i]
        }
      }
    },
    findNextSlot(x: number): Element | undefined {
      const children = this.children()

      for (let i = 0; i < children.length; i++) {
        const rect = children[i].getBoundingClientRect()

        if (rect.right <= x) {
          continue;
        } else if (rect.left <= x) {
          return children[i];
        }

        if (x <= rect.left) {
          return children[i];
        }
      }
    },
    /**
     * Toggle and scroll to the previous set of horizontal content.
     */
    prev(): void {
      this.$emit('prev')

      const container = this.$refs.container as Element
      const left = container.getBoundingClientRect().left
      const x = left + (container.clientWidth * -this.displacement) - delta
      const element = this.findPrevSlot(x)

      if (element) {
        const width = element.getBoundingClientRect().left - left
        this.scrollToLeft(container.scrollLeft + width)
        return
      }

      const width = container.clientWidth * this.displacement
      this.scrollToLeft(container.scrollLeft - width)
    },
    /**
     * Toggle and scroll to the next set of horizontal content.
     */
    next(): void {
      this.$emit('next')

      const container = this.$refs.container as Element
      const left = container.getBoundingClientRect().left
      const x = left + (container.clientWidth * this.displacement) + delta
      const element = this.findNextSlot(x)

      if (element) {
        const width = element.getBoundingClientRect().left - left
        if (width > delta) {
          this.scrollToLeft(container.scrollLeft + width)
          return
        }
      }

      const width = container.clientWidth * this.displacement
      this.scrollToLeft(container.scrollLeft + width)
    },
    /**
     * Index of the children to scroll to.
     * @param i index
     */
    scrollToIndex(i: number): void {
      const children = this.children()

      if (children[i]) {
        const container = this.$refs.container as Element
        const rect = children[i].getBoundingClientRect()

        const left = rect.left - container.getBoundingClientRect().left
        this.scrollToLeft(container.scrollLeft + left)
      }
    },
    /**
     * Amount of pixel to scroll to on the left.
     * @param left of the horizontal
     * @param behavior smooth|auto
     */
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
      this.debounceId = setTimeout(this.onScrollDebounce, 100);
    },
    onScrollDebounce(): void {
      this.refresh((data) => {
        this.$emit('scroll-debounce', data)
      })
    },
    /**
     * Manually refresh vue-horizontal
     * @param callback after refreshed, optional
     */
    refresh(callback: (data: VueHorizontalData) => void): void {
      nextTick(() => {
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
      const firstChild = this.children()[0]

      function hasNext(): boolean {
        return container.scrollWidth > container.scrollLeft + container.clientWidth + delta
      }

      function hasPrev(): boolean {
        if (container.scrollLeft === 0) {
          return false;
        }

        const containerVWLeft = container.getBoundingClientRect().left
        const firstChildLeft = firstChild?.getBoundingClientRect()?.left ?? 0
        return Math.abs(containerVWLeft - firstChildLeft) >= delta;
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
::v-slotted(.v-hl-container > *) {
  flex-shrink: 0;
  box-sizing: border-box;

  /* Prevent content from collapsing when empty. E.g. image while loading height=0. */
  min-height: 1px;
}

::v-slotted(.v-hl-snap-start > *) {
  scroll-snap-align: start;
}

::v-slotted(.v-hl-snap-center > *) {
  scroll-snap-align: center;
}

::v-slotted(.v-hl-snap-end > *) {
  scroll-snap-align: end;
}
</style>
