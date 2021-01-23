<template>
  <main>
    <vue-horizontal ref="horizontal" class="horizontal" :button-between="false" @scroll-debounce="onScrollDebounce">
      <div class="item" v-for="(item, index) in items" :key="index">
        <div class="content" :style="{background: `url(${item.img})`}">
          <div class="aspect-ratio"></div>
        </div>

        <div class="title">
          <h2>{{ item.title }}</h2>
        </div>
      </div>
    </vue-horizontal>

    <div class="pagination">
      <div class="dot" :class="{current: i - 1 === index}"
           v-for="i in pages" :key="i"
           @click="onPageClick(i - 1)">
        <div></div>
      </div>
    </div>
  </main>
</template>

<script>
// For convenience sake, I import a collection of images from unsplash.
import {architecture} from '../../../../assets/img'

export default {
  data() {
    return {
      items: [...architecture.items, ...architecture.items].map(({title, img: {srcset: {sm}}}) => {
        return {
          title: title,
          img: sm
        };
      }),
      width: 0,
      index: 0,
      pages: 0,
    }
  },
  methods: {
    onScrollDebounce({scrollWidth, width, left}) {
      this.width = width
      this.index = Math.round(left / width)
      this.pages = Math.round(scrollWidth / width)
    },
    onPageClick(i) {
      if (i === this.pages - 1) {
        this.$refs.horizontal.scrollToLeft((i + 1) * this.width)
      } else {
        this.$refs.horizontal.scrollToLeft(i * this.width)
      }
    },
  }
}
</script>

<!-- Content Design -->
<style scoped>
.item {
  width: 240px;
  padding: 32px 32px 24px 32px;
  background: #f1f1f1;
  margin-right: 8px;
}

.content {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

.aspect-ratio {
  padding-top: 60%;
}

.title {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}
</style>

<style scoped>
.pagination {
  margin-top: 12px;
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
</style>

<!-- Parent CSS (Container) -->
<style scoped>
main, article {
  padding: 24px 0;
}
</style>

