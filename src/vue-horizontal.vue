<template>
  <div class="vue-horizontal">
    <div class="vue-horizontal-btn" :class="{'no-button': !button}">
      <div class="vue-horizontal-btn-left" v-if="hasPrev" @click="prev">
        <slot name="btn-left">
          <svg viewBox="0 0 24 24">
            <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
          </svg>
        </slot>
      </div>

      <div class="vue-horizontal-btn-right" v-if="hasNext" @click="next">
        <slot name="btn-right">
          <svg viewBox="0 0 24 24">
            <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
          </svg>
        </slot>
      </div>
    </div>

    <div class="vue-horizontal-container" ref="container"
         :class="{'no-scroll': !scroll}" @scroll.passive="onScrollDebounced">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {VNode} from 'vue'

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
    }
  },
  props: {
    button: {
      type: Boolean,
      default: () => true
    },
    scroll: {
      type: Boolean,
      default: () => false
    },
  },
  mounted() {
    this.onScroll();
  },
  computed: {
    hasPrev(): boolean {
      const {container, slotted} = this as VueHorizontalData
      return container.absoluteLeft !== slotted.absoluteLeft
    },
    hasNext(): boolean {
      const {scrollLeft, scrollWidth, clientWidth} = this.container
      return scrollWidth !== scrollLeft + clientWidth
    }
  },
  methods: {
    prev(): void {
      const element = this.$refs.container as Element
      const left = element.scrollLeft - element.clientWidth
      element.scrollTo({left: left, behavior: "smooth"});
    },
    next(): void {
      const element = this.$refs.container as Element
      const left = element.scrollLeft + element.clientWidth
      element.scrollTo({left: left, behavior: "smooth"});
    },
    onScrollDebounced(): void {
      clearTimeout(this.timeoutId);
      this.timeoutId = window.setTimeout(this.onScroll, 100);
    },
    onScroll(): void {
      const container = this.$refs.container as Element
      this.container.scrollLeft = container.scrollLeft;
      this.container.clientWidth = container.clientWidth;
      this.container.scrollWidth = container.scrollWidth;
      this.container.absoluteLeft = container.getBoundingClientRect().left

      const slotted = (this.$slots.default[0] as VNode).elm as Element
      this.slotted.absoluteLeft = slotted.getBoundingClientRect().left

      console.log(this.container.scrollLeft)
    },
  },
});
</script>

<style scoped>
.vue-horizontal {
  position: relative;
}

.vue-horizontal-btn {
  display: flex;
  align-items: center;
  /*position: absolute;*/

  width: 100%;
  height: 100%;
}

.vue-horizontal-btn-left {
  margin-left: -24px;
  margin-right: auto;
}

.vue-horizontal-btn-right {
  margin-left: auto;
  margin-right: -24px;
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

.vue-horizontal-container {
  display: flex;
  box-sizing: content-box;

  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
}

.vue-horizontal-container > * {
  scroll-snap-align: start;
  flex-shrink: 0;
}

.vue-horizontal-btn.no-button {
  display: none;
}

.vue-horizontal-container.no-scroll {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.vue-horizontal-container.no-scroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
