<template>
  <main>
    <vue-horizontal class="horizontal">
      <div class="item" v-for="item in items" :key="item.id">
        <div class="card" :style="{background: `url(${item.img})`}">
          <div class="aspect-ratio-5-3"></div>
          <div class="overlay">
            <h2>{{ item.title }}</h2>
          </div>
        </div>
      </div>
    </vue-horizontal>
  </main>
</template>

<script>
// For convenience sake, I import a collection of images from my album.
import {singapore} from '../../../../assets/img'

export default {
  data() {
    return {
      items: singapore.items.map(({id, title, img}) => ({id, title, img}))
    }
  }
}
</script>

<!-- Content Design -->
<style scoped>
.card {
  background-position: center;
  background-size: cover !important;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

.aspect-ratio-5-3 {
  padding-top: 60%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000050;
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

<!-- Responsive Design Logic -->
<style scoped>

/* Container (Outside/Your Layout) */
main {
  padding: 24px;
}

@media (min-width: 768px) {
  main {
    padding: 48px;
  }
}

.horizontal {
  /* The margin removes the padding from the parent container and add it into vue-horizontal.
     If the gap is less than margin, this causes overflow to show and peeks into the next content for better UX.
     You can replace this section entirely for basic responsive CSS logic if you don't want this "peeking" experience
     for the mobile web. */

  /* Removes main padding. (See above) */
  --xs-margin: 24px;
  --sm-margin: 24px;

  --xs-gap: 16px;
  --sm-gap: 16px;
  --md-gap: 16px;
  --lg-gap: 16px;
  --xl-gap: 24px;
}

@media (max-width: 639.98px) {
  .item {
    width: calc(100% - (var(--xs-gap) * 2));
    padding: 0 calc(var(--xs-gap) / 2);
  }

  .item:first-child {
    width: calc(100% - var(--xs-gap));
    padding-left: var(--xs-margin);
  }

  .item:last-child {
    width: calc(100% - var(--xs-gap));
    padding-right: var(--xs-margin);
  }

  .item:only-child {
    width: 100%;
  }

  .horizontal {
    margin: 0 calc(var(--xs-margin) * -1);
  }

  .horizontal >>> .v-hl-container {
    scroll-padding-left: var(--xs-gap);
    scroll-padding-right: var(--xs-gap);
  }

  .horizontal >>> .v-hl-btn {
    display: none;
  }
}

@media (min-width: 640px) and (max-width: 767.98px) {
  .item {
    width: calc((100% - (var(--sm-gap) * 2)) / 2);
    padding: 0 calc(var(--sm-gap) / 2);
  }

  .item:first-child {
    width: calc(var(--sm-gap) + (100% - (var(--sm-gap) * 2)) / 2);
    padding-left: var(--sm-margin);
  }

  .item:last-child {
    width: calc(var(--sm-gap) + (100% - (var(--sm-gap) * 2)) / 2);
    padding-right: var(--sm-margin);
  }

  .horizontal {
    margin: 0 calc(var(--sm-margin) * -1);
  }

  .horizontal >>> .v-hl-container {
    scroll-padding-left: var(--sm-gap);
    scroll-padding-right: var(--sm-gap);
  }

  .horizontal >>> .v-hl-btn {
    display: none;
  }
}

@media (min-width: 768px) {
  .item {
    width: calc((100% - (2 * var(--md-gap))) / 3);
    margin-right: var(--md-gap);
  }
}

@media (min-width: 1024px) {
  .item {
    width: calc((100% - (3 * var(--lg-gap))) / 4);
    margin-right: var(--lg-gap);
  }
}

@media (min-width: 1280px) {
  .item {
    width: calc((100% - (4 * var(--xl-gap))) / 5);
    margin-right: var(--xl-gap);
  }
}
</style>

