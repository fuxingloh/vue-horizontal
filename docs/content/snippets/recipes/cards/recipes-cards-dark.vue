<template>
  <main>
    <div class="header">
      <h3>Top Stories</h3>
      <p>Responsive sizing, relative to the viewport.</p>
    </div>

    <vue-horizontal class="horizontal">
      <div class="item" v-for="item in items" :key="item.id">
        <div class="card">
          <div class="image" :style="{background: `url(${item.img.srcset.sm})`}"></div>
          <div class="content">
            <div class="name">{{ item.subtitle }}</div>
            <div class="title">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </vue-horizontal>
  </main>
</template>

<script>
// For convenience sake, I import a collection of images from unsplash.
import {singapore} from '../../../../assets/img'

export default {
  data() {
    return {
      items: singapore.items
    }
  }
}
</script>

<!-- Content Design -->
<style scoped>
.card {
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  position: relative;
}

.image {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  padding-top: 60%;
}

.content {
  padding: 6px 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000000BB;
  /* backdrop-filter drops FPS if it's in a modal due to fixed position repainting. */
  backdrop-filter: blur(3px);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.name {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
}

.title {
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<!-- Parent CSS (Container) -->
<style scoped>
.header {
  margin-bottom: 16px;
}

main {
  padding: 24px;
  background: black;
}

main * {
  color: white !important;
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
  --count: 1;
  --gap: 16px;
  --margin: 24px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 2;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 3;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 4;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
    --count: 6;
  }
}
</style>

<!--
## Responsive Logic
The margin removes the padding from the parent container and add it into vue-horizontal.
If the gap is less than margin, this causes overflow to show and peeks into the next content for better UX.
You can replace this section entirely for basic responsive CSS logic if you don't want this "peeking" experience
for the mobile web.
Note that this responsive logic is hyper sensitive to your design choices, it's not a one size fit all solution.
var() has only 95% cross browser compatibility, you should convert it to fixed values.

There are 2 set of logic:
0-768 for peeking optimized for touch scrolling.
>768 for navigation via buttons for desktop/laptop users.
-->
<style scoped>
@media (max-width: 767.98px) {
  .item {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count));
    padding: 0 calc(var(--gap) / 2);
  }

  .item:first-child {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) - (var(--gap) / 2));
    padding-left: var(--margin);
  }

  .item:last-child {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) - (var(--gap) / 2));
    padding-right: var(--margin);
  }

  .item:only-child {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) * 2 - var(--gap));
  }

  .horizontal {
    margin: 0 calc(var(--margin) * -1);
  }

  .horizontal >>> .v-hl-container {
    scroll-padding: 0 calc(var(--margin) - (var(--gap) / 2));
  }

  .horizontal >>> .v-hl-btn {
    display: none;
  }
}

@media (min-width: 768px) {
  .item {
    width: calc((100% - ((var(--count) - 1) * var(--gap))) / var(--count));
    margin-right: var(--gap);
  }
}
</style>

