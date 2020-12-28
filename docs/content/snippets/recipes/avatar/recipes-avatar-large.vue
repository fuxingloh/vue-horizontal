<template>
  <main>
    <div class="header">
      <h1>Large Avatar</h1>
      <p>Images of people in a responsive grid</p>
    </div>

    <vue-horizontal class="horizontal">
      <div class="item" v-for="item in items" :key="item.id">
        <div class="avatar" :style="{background: `url(${item.img})`}">
          <div class="aspect-ratio"></div>
          <div class="content">
            <h4>{{ item.name }}</h4>
          </div>
        </div>
      </div>
    </vue-horizontal>
  </main>
</template>

<script>
// For convenience sake, I import a collection of images from unsplash.
import {portrait} from '../../../../assets/img'
import PlaceholderComponent from "../../../../components/global/placeholder-component";

export default {
  components: {PlaceholderComponent},
  data() {
    return {
      items: portrait.items.map(({id, img: {srcset: {sm}, credit: {name}}}) => {
        return {
          id: id,
          img: sm,
          name: name,
        };
      })
    }
  }
}
</script>

<!-- Content Design -->
<style scoped>
.avatar {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.aspect-ratio {
  padding-top: 100%;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000010;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
}

.content > * {
  color: white;
  line-height: 1.25;
}
</style>

<!-- Parent CSS (.container) -->
<style scoped>
main {
  padding: 24px;
}

.header {
  margin-bottom: 24px;
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
  --margin: 24px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 4;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 5;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --gap: 24px;
    --count: 6;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 32px;
    --count: 8;
  }
}
</style>

<!-- Responsive Logic -->
<style scoped>
@media (max-width: 767.98px) {
  /* The --margin removes the padding from the parent container and add it into vue-horizontal.
   If the gap is less than margin, this causes overflow to show and peeks into the next content for better UX.
   You can replace this section entirely for basic responsive CSS logic if you don't want this "peeking" experience
   for the mobile web. */
  /* This responsive logic is hyper sensitive to your design choices, it's not a one size fit all solution. */
  .item {
    width: calc((100% - (var(--gap) * 2)) / var(--count));
    padding: 0 calc(var(--gap) / 2);
  }

  .item:first-child {
    width: calc(var(--gap) + (100% - (var(--gap) * 2)) / var(--count));
    padding-left: var(--margin);
  }

  .item:last-child {
    width: calc(var(--gap) + (100% - (var(--gap) * 2)) / var(--count));
    padding-right: var(--margin);
  }

  .item:only-child {
    width: calc((var(--gap) * 2) + (100% - (var(--gap) * 2)) / var(--count));
  }

  .horizontal {
    margin: 0 calc(var(--margin) * -1);
  }

  .horizontal >>> .v-hl-container {
    scroll-padding-left: var(--gap);
    scroll-padding-right: var(--gap);
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
