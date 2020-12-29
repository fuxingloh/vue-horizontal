<template>
  <main>
    <div class="header">
      <h1>Hello You</h1>
      <div class="half"></div>
    </div>

    <div class="content">
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

      <br>
      <br>
      <h2>Hello Again</h2>
    </div>
  </main>
</template>

<script>
// For convenience sake, I import a collection of images from unsplash.
import {architecture} from '../../../../assets/img'

export default {
  data() {
    return {
      items: architecture.items
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
  height: 140px;
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

.description {
  color: #555;
  font-size: 15px;
  margin-top: 4px;
  line-height: 1.5;
}

.circle {
  margin-right: 8px;
  width: 10px;
  height: 10px;
  background: #555;
}

.half {
  height: 140px;
}

.header {
  background: #333;
  padding: 24px 24px 0 24px;
}

.content {
  padding: 0 24px 24px 24px;
  margin-top: -140px;
}

@media (min-width: 768px) {
  .header {
    padding: 48px 48px 0 48px;
  }

  .content {
    padding: 0 48px 48px 48px;
  }
}

.header h1 {
  color: white;
  margin-bottom: 24px;
}

.horizontal >>> .v-hl-btn svg {
  border-radius: 0;
  height: 32px;
  width: 32px;
  padding: 6px;
  box-shadow: none;
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
    --count: 5;
  }
}

@media (min-width: 1536px) {
  .horizontal {
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
