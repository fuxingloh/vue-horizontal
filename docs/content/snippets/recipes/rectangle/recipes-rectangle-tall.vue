<template>
  <main>
    <vue-horizontal class="horizontal">
      <div class="item" v-for="item in items" :key="item.id">
        <div class="image" :style="{background: `url(${item.img.srcset.sm})`}"></div>
        <div class="title">
          <div class="circle"></div>
          <h4>{{ item.title }}</h4>
        </div>
        <div>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </vue-horizontal>
  </main>
</template>

<script>
// For convenience sake, I import a collection of images from unsplash.
import {shopping} from '../../../../assets/img'

export default {
  data() {
    return {
      items: shopping.items
    }
  }
}
</script>

<!-- Content Design -->
<style scoped>
.image {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  padding-top: 150%;
}

.title {
  margin-top: 8px;
  display: flex;
  align-items: center;
}

.title h4 {
  text-transform: capitalize;
  color: #555;
}

.circle {
  margin-right: 8px;
  width: 10px;
  height: 10px;
  background: #555;
}

.description {
  color: #555;
  font-size: 15px;
  margin-top: 4px;
  line-height: 1.5;
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
  --fixed: 220px;
  --count: 1;
  --gap: 16px;
  --margin: 24px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 3;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 4;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 5;
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
    width: var(--fixed);
    padding: 0 calc(var(--gap) / 2);
  }

  .item:first-child {
    width: calc(var(--fixed) + var(--margin) - (var(--gap) / 2));
    padding-left: var(--margin);
  }

  .item:last-child {
    width: calc(var(--fixed) + var(--margin) - (var(--gap) / 2));
    padding-right: var(--margin);
  }

  .item:only-child {
    width: calc(var(--fixed) + var(--margin) * 2 - var(--gap));
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
