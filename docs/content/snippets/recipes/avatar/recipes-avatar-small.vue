<template>
  <main>
    <div class="header">
      <h1>Stories</h1>
      <p>Seems to be trending to add stories on top of your feed these few days.</p>
    </div>

    <div class="feed">
      <div class="stories">
        <vue-horizontal class="horizontal" :button-between="false" snap="none">
          <div class="item" v-for="item in items" :key="item.id">
            <div class="ring">
              <div class="avatar" :style="{background: `url(${item.img})`}">
              </div>
            </div>
          </div>
        </vue-horizontal>
      </div>

      <div class="content">
        <div v-for="i in [0,1,2,3,4,5,6]" :key="i" class="feed-item">
          <placeholder-component></placeholder-component>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// For convenience sake, I import a collection of images from unsplash.
import {portrait} from '../../../../assets/img'

export default {
  data() {
    return {
      items: portrait.items.map(({id, img: {srcset: {sm}}}) => {
        return {
          id: id,
          img: sm
        };
      })
    }
  }
}
</script>

<!-- Content Design -->
<style scoped>
.item {
  padding: 14px 6px;
}

.item:first-child {
  padding-left: 21px;
}

.item:last-child {
  padding-right: 21px;
}

.ring {
  width: 64px;
  height: 64px;
  border-radius: 32px;

  border: 3px solid transparent;
  background: #e2e8f0;

  cursor: pointer;
  transition: All 0.3s ease;
  overflow: hidden;
}

.ring:hover {
  /* This is a very simple trick to animation a ring of colors, you should go find a library for this*/
  transform: rotate(9deg) scale(1.05) translate(1px);
  animation: colors 1s ease infinite;
  background-size: 200% 200%;
  background-color: #663dff;
  border: 4px solid transparent;
  animation-direction: alternate;
  background-image: linear-gradient(319deg, #7d5fee 0%, #b72bff 33%, #ff2eb0 66%, #7eee40 100%);
}

@keyframes colors {
  0% {
    background-position: 10% 0
  }
  100% {
    background-position: 91% 100%
  }
}

.avatar {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  height: 100%;
  width: 100%;
}

/* You can add your own button or you could just, */
/* Override default button design to make it smaller. */
.horizontal >>> .v-hl-btn svg {
  padding: 2px;
  height: 24px;
  width: 24px;
}
</style>

<!-- Parent CSS (.container) and other stuff -->
<style scoped>
main {
  padding: 24px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.stories {
  border-bottom: 1px solid #e2e8f0;
}

.feed {
  border-radius: 5px;
  border: 1px solid #e2e8f0;
}

.content {
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  opacity: 0.25;
}

.feed-item {
  padding: 12px;
  width: 50%;
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
