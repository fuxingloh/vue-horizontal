<template>
  <main>
    <vue-horizontal class="horizontal">
      <div class="item" v-for="item in items" :key="item.id">
        <div class="content" :style="{background: `url(${item.img})`}">
          <div class="aspect-ratio"></div>
          <div class="overlay">
            <h2>{{ item.title }}</h2>
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
      items: singapore.items.map(({id, title, img: {srcset: {sm}}}) => {
        return {
          id: id,
          title: title,
          img: sm
        };
      })
    }
  }
}
</script>

<!-- Content Design -->
<style scoped>
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

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000010;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
}

.overlay > * {
  color: white;
}
</style>

<!-- Parent CSS (Container) -->
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
    --count: 2;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 3;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
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

