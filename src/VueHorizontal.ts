import {defineComponent, nextTick, h, VNode, createCommentVNode} from 'vue'

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

      debounceId: undefined as any,
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
  beforeDestroy() {
    clearTimeout(this.debounceId)
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
    prev(e: Event): void {
      e.stopPropagation()
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
    next(e: Event): void {
      // TODO(fuxing): test stop stopPropagation
      e.stopPropagation()
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
     * @param {number} i index
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
     * @param {number} left of the horizontal
     * @param {'smooth' | 'auto} [behavior='smooth']
     */
    scrollToLeft(left: number, behavior: "smooth" | "auto" = "smooth"): void {
      const element = this.$refs.container as Element
      element.scrollTo({left: left, behavior: behavior});
    },
    onScroll(): void {
      const container = this.$refs.container as Element
      if (!container) return

      this.$emit('scroll', {
        left: container.scrollLeft,
      })

      clearTimeout(this.debounceId);
      this.debounceId = setTimeout(this.onScrollDebounce, 100);
    },
    onScrollDebounce(): Promise<void> {
      return this.refresh((data) => {
        this.$emit('scroll-debounce', data)
      })
    },
    /**
     * Manually refresh vue-horizontal
     * @param {(data: any) => void} [callback] after refreshed, optional
     */
    refresh(callback?: (data: any) => void): Promise<void> {
      return nextTick(() => {
        const data = this.calculate()

        this.left = data.left
        this.width = data.width
        this.scrollWidth = data.scrollWidth
        this.hasNext = data.hasNext
        this.hasPrev = data.hasPrev

        callback?.(data)
      })
    },
    calculate() {
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
  render() {
    const svgButton = (direction: 'prev' | 'next') => {
      const previous = h("path", {d: "m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"})
      const next = h('path', {d: "m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"})

      return h('svg', {
        class: "v-hl-svg",
        viewBox: "0 0 24 24",
        "aria-label": `horizontal scroll area button for navigation to ${direction === 'prev' ? 'previous' : 'next'} section`,
        style: {
          width: "40px",
          height: "40px",
          margin: "6px",
          padding: "6px",
          "border-radius": "20px",
          "box-sizing": "border-box",
          background: "white",
          color: "black",
          fill: "currentColor",
          "box-shadow": "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
        }
      }, [
        direction === 'prev' ? previous : next
      ])
    };

    const slotButton = (direction: 'prev' | 'next') => {
      if (!this.button) {
        return createCommentVNode('', true)
      }

      if (direction === 'prev' && !this.hasPrev) {
        return createCommentVNode('', true)
      }

      if (direction === 'next' && !this.hasNext) {
        return createCommentVNode('', true)
      }

      return h('div', {
        key: direction === 'prev' ? 0 : 1,
        class: `v-hl-btn v-hl-btn-${direction}`,
        onClick: direction === 'prev' ? this.prev : this.next,
        role: "button",
        style: {
          ...direction === 'prev' ? {
            left: 0,
            transform: this.buttonBetween ? "translateX(-50%)" : "none"
          } : {
            right: 0,
            transform: this.buttonBetween ? "translateX(50%)" : "none"
          },
          cursor: "pointer",
          position: "absolute",
          top: 0,
          bottom: 0,
          display: "flex",
          "align-self": "center",
          "z-index": 1,
          "align-items": "center",
          // container scroll overflow mirroring/fix
          ...this.scroll ? {} : {
            "overflow-x": "scroll",
            "scrollbar-width": "none",
            "-ms-overflow-style": "none",
            "padding-bottom": "30px",
            "margin-bottom": "-30px",
            "clip-path": "inset(0 0 30px 0)",
          }
        }
      }, [
        direction === 'prev' ?
          this.$slots['btn-prev'] ? this.$slots['btn-prev']() : svgButton('prev') :
          this.$slots['btn-next'] ? this.$slots['btn-next']() : svgButton('next')
      ])
    };

    const slotItems = () => {
      if (!this.$slots.default) {
        return []
      }

      const injectStyle = (slot: VNode) => {
        slot.props = slot.props || {}
        slot.props.style = slot.props.style || {}
        slot.props.style = {
          'flex-shrink': 0,
          'box-sizing': 'border-box',
          /* Prevent content from collapsing when empty. E.g. image while loading height=0. */
          'min-height': '1px',
          'scroll-snap-align': this.snap,
        }
      }

      const slots = this.$slots.default()
      slots.forEach(slot => {
        if (slot.el) {
          return injectStyle(slot)
        }

        if (slot.children && Array.isArray(slot.children)) {
          slot.children.forEach(slot => {
            injectStyle(slot as VNode)
          })
        }
      })
      return slots
    }

    return h('div', {
      class: 'vue-horizontal',
      style: {
        position: 'relative',
        display: 'flex',
      }
    }, [
      slotButton('prev'),
      slotButton('next'),
      h('div', {
        class: "v-hl-container",
        ref: "container",
        onScrollPassive: this.onScroll,
        style: {
          display: "flex",
          width: "100%",
          margin: 0,
          padding: 0,
          border: "none",
          "box-sizing": "content-box",
          "overflow-x": "scroll",
          "overflow-y": "hidden",
          "scroll-snap-type": "x mandatory",
          "-webkit-overflow-scrolling": "touch",
          ...this.scroll ? {} : {
            // container scroll overflow mirroring/fix
            "scrollbar-width": "none",
            "-ms-overflow-style": "none",
            "padding-bottom": "30px",
            "margin-bottom": "-30px",
            "clip-path": "inset(0 0 30px 0)",
          },
        }
      }, slotItems()),
    ])
  }
});
