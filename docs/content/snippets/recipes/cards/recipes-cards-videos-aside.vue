<template>
  <main>
    <div class="layout">
      <article>
        <h2>Article</h2>
        <p>Bla bla bla</p>
        <div class="placeholders">
          <div v-for="i in [0,1,2,3,4]" :key="i" class="placeholder">
            <placeholder-component></placeholder-component>
          </div>
        </div>
      </article>

      <aside>
        <div class="header">
          <h3>Top Videos</h3>
          <p>Responsive sizing, relative to the viewport on the side.
            Fixed once the viewport width gets too small.
          </p>
        </div>

        <vue-horizontal class="horizontal">
          <div class="item" v-for="item in items" :key="item.id">
            <div class="card">
              <div class="image" :style="{background: `url(${item.img.srcset.sm})`}">
                <div class="playback">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4z"/>
                  </svg>
                </div>
              </div>
              <div class="content">
                <div>
                  <div class="title">{{ item.description }}</div>
                </div>

                <div class="date">
                  <b>ABC</b><br>
                  TubeYou • Jan 9 2019
                </div>
              </div>
            </div>
          </div>
        </vue-horizontal>
      </aside>
    </div>
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
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.image {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  padding-top: 50%;
  position: relative;
}

.image .playback {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image svg {
  height: 48px;
  width: 48px;
  fill: currentColor;
  color: #ffffff99;
}

.card:hover svg {
  color: white;
}

.content {
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 8px;
}

.date {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
}
</style>

<!-- Parent CSS (main, header, layout) -->
<style scoped>
.header {
  margin-bottom: 16px;
}

main {
  padding: 24px;
}

.placeholders {
  margin: -16px;
  padding: 16px 0;
}

.placeholder {
  padding: 16px;
  opacity: 0.25;
}

@media (min-width: 768px) {
  main {
    padding: 48px;
  }
}
</style>

<!-- Responsive Breakpoints -->
<style scoped>
.layout {
  display: flex;
  flex-wrap: wrap;
  margin: -32px;
}

article, aside {
  flex-grow: 1;
  width: 100%;
  padding: 32px;
}

.horizontal {
  --fixed: 200px;
  --count: 1;
  --gap: 12px;
  --margin: 24px;
}

@media (min-width: 768px) {
  .layout {
    flex-wrap: nowrap;
  }

  .horizontal {
    --count: 2;
    --margin: 0;
    --gap: 16px;
  }

  aside {
    width: 40%;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 2;
  }

  aside {
    width: 40%;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --count: 3;
  }

  aside {
    width: 50%;
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
    width: var(--fixed);
    padding: 0 calc(var(--gap) / 2);
  }

  .item:first-child {
    width: calc(var(--fixed) + var(--margin));
    padding-left: var(--margin);
  }

  .item:last-child {
    width: calc(var(--fixed) + var(--margin));
    padding-right: var(--margin);
  }

  .item:only-child {
    width: calc(var(--fixed) + var(--margin) * 2);
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
    width: var(--fixed);
    margin-right: var(--gap);
  }
}

@media (min-width: 1024px) {
  .item {
    width: calc((100% - ((var(--count) - 1) * var(--gap))) / var(--count));
  }
}
</style>
