<template>
  <div>
    <header>
      <placeholder-header></placeholder-header>
    </header>

    <div class="carousel">
      <vue-horizontal ref="horizontal" class="horizontal" :button-between="false" @scroll-debounce="onScrollDebounce">
        <div class="item" v-for="item in items" :key="item.id">
          <img :src="item.img">
          <div class="content">
            <h2>The Great Title</h2>
            <a :href="item.credit.url" target="_blank"><h4>{{ item.credit.name }}</h4></a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla congue enim, at convallis magna
              pulvinar vel. Suspendisse sed diam mi. Quisque purus velit, commodo non diam vitae, semper pharetra purus.
              Nam non gravida dolor.
            </p>
            <button>Action Button</button>
          </div>
        </div>
      </vue-horizontal>

      <div class="dots">
        <div class="dot" :class="{current: i === index}" v-for="(item, i) in items" :key="item.id"
             @click="onIndexClick(i)">
          <div></div>
        </div>
      </div>
    </div>

    <main>
      <article>
        <h2>Carousel</h2>
        <p>It's actually pretty easy to make carousel/slideshow with vue.</p>

        <br>
        <p>scrollWidth: {{ scrollWidth }}</p>
        <p>left: {{ left }}</p>
        <p>progress: {{ progress }}</p>
        <p>index: {{ index }}</p>
      </article>
    </main>
  </div>
</template>

<script>
// For convenience sake, I import a collection of images from unsplash.
import {architecture} from '../../../../assets/img'

export default {
  data() {
    return {
      items: architecture.items.map(({id, title, img: {credit, srcset: {sm}}}) => {
        return {
          id: id,
          title: title,
          credit: credit,
          img: sm
        };
      }),
      hasPrev: false,
      hasNext: false,
      interval: null,
      scrollWidth: 0,
      left: 0,
      progress: 0,
      index: 0,
    }
  },
  mounted() {
    // Custom observe visibility is below
    // Much easier way: https://www.npmjs.com/package/vue-observe-visibility
    observeVisibility(this.$refs.horizontal.$el, (visible) => {
      if (visible) {
        this.interval = setInterval(this.play, 5000)
      } else {
        clearInterval(this.interval)
      }
    })
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    onScrollDebounce({hasNext, hasPrev, scrollWidth, width, left}) {
      this.hasPrev = hasPrev
      this.hasNext = hasNext
      this.scrollWidth = scrollWidth
      this.left = left
      this.progress = left / scrollWidth
      this.index = Math.round(left / width)
    },
    onIndexClick(i) {
      this.$refs.horizontal.scrollToIndex(i)
    },
    play() {
      if (!this.hasNext && this.hasPrev) {
        this.$refs.horizontal.scrollToIndex(0)
        return
      }

      if (this.hasNext) {
        this.$refs.horizontal.next()
      }
    }
  }
}

/**
 * Custom function, much easier way: https://www.npmjs.com/package/vue-observe-visibility
 *
 * @param element to track visibility
 * @param callback: function(boolean) when visibility change
 */
function observeVisibility(element, callback) {
  const observer = new IntersectionObserver((records) => {
    callback(records.find(record => record.isIntersecting))
  }, {rootMargin: '10% 0% 10% 0%', threshold: 0.5});
  observer.observe(element);
}
</script>

<!-- Content Design -->
<style scoped>
.item {
  width: 100%;
  background: #f7fafc;
  overflow: hidden;
  display: flex;
}

img {
  width: 50%;
  object-fit: cover;
}

.content {
  padding: 32px;
}

.content h2 {
  margin-bottom: 8px;
}

.content p {
  margin: 8px 0;
}

button {
  margin-top: 24px;

  padding: 6px 24px;
  font-size: 18px;
  border-radius: 3px;
  background: white;
  font-weight: 600;
  border: 1px solid #333333;
}

.carousel {
  position: relative;
}

.dots {
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.dot {
  padding: 4px;
  cursor: pointer;
}

.dot > div {
  border-radius: 10px;
  width: 10px;
  height: 10px;
  background: #33333350;
}

.dot:hover > div {
  background: white;
  border: 1px solid black;
}

.dot.current > div {
  border: 3px solid black;
  background: white;
}

.horizontal >>> .v-hl-btn svg {
  box-shadow: none;
  margin: 12px;
}
</style>

<!-- Parent CSS (Container) -->
<style scoped>
main, header {
  padding: 0 24px;
}

@media (min-width: 768px) {
  main, header {
    padding: 0 48px;
  }
}

article {
  padding: 24px 0;
}
</style>
