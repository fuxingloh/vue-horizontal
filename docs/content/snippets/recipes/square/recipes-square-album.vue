<template>
  <main>
    <div class="header">
      <h2>Album</h2>

      <nav>
        <button @click="prev" :class="{'active': hasPrev, 'inactive': !hasPrev}">
          <svg viewBox="0 0 24 24">
            <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
          </svg>
        </button>
        <button @click="next" :class="{'active': hasNext, 'inactive': !hasNext}">
          <svg viewBox="0 0 24 24">
            <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
          </svg>
        </button>
      </nav>
    </div>

    <vue-horizontal ref="horizontal" class="horizontal" :button="false" @scroll-debounce="onScrollDebounce">
      <div class="item" v-for="item in items" :key="item.id">
        <div class="image" :style="{background: `url(${item.img.srcset.sm})`}">
          <div class="overlay">
            <div class="text">{{ item.img.credit.name }}</div>
          </div>
        </div>
        <div class="content">
          <h6>{{ item.title }}</h6>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </vue-horizontal>
  </main>
</template>

<script>
// For convenience sake, I import a collection of images from unsplash.
import {portrait} from '../../../../assets/img'

export default {
  data() {
    return {
      items: portrait.items,
      hasPrev: false,
      hasNext: true,
    }
  },
  methods: {
    prev() {
      this.$refs.horizontal.prev()
    },
    next() {
      this.$refs.horizontal.next()
    },
    onScrollDebounce({hasPrev, hasNext}) {
      this.hasPrev = hasPrev
      this.hasNext = hasNext
    }
  },
}
</script>

<!-- Content Design -->
<style scoped>
.image {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  padding-top: 100%;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(345deg, #00000080 0, #00000060 5%, #00000040 20%, #00000000 50%);
}

.overlay .text {
  padding: 12px;
  line-height: 1;
  font-weight: 700;
  font-size: 14px;
  color: white;
}

.content {
  margin-top: 6px;
}

.content h6 {
  font-size: 14px;
  text-transform: capitalize;
  line-height: 1.5;
}

.content p {
  line-height: 1.5;
  font-size: 12px;
  margin-top: 2px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.header {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  display: flex;
  align-items: center;
}

svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
  color: black;
}

button.inactive svg {
  color: #BBB;
}

button {
  padding: 4px;
}

button:focus {
  outline: none;
}

</style>

<!-- Parent CSS (.container) -->
<style scoped>
main {
  padding: 24px;
}

@media (min-width: 768px) {
  main {
    padding: 48px;
  }
}
</style>

<!-- Responsive Breakpoints -->
<style scoped>
.horizontal {
  --count: 2;
  --gap: 16px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 3;
    --gap: 24px;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 4;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 5;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --count: 6;
  }
}

.item {
  width: calc((100% - ((var(--count) - 1) * var(--gap))) / var(--count));
  margin-right: var(--gap);
}
</style>
