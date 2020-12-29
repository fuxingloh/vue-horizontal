<template>
  <main>
    <vue-horizontal class="horizontal">
      <div class="item" v-for="item in items" :key="item.name">
        <div class="card">
          <div>
            <div class="title">
              <svg height="24" viewBox="0 0 24 24" width="24">
                <path
                  d="M14.17,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9.83c0-0.53-0.21-1.04-0.59-1.41l-4.83-4.83 C15.21,3.21,14.7,3,14.17,3L14.17,3z M8,15h8c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H8c-0.55,0-1-0.45-1-1v0C7,15.45,7.45,15,8,15z M8,11h8c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H8c-0.55,0-1-0.45-1-1v0C7,11.45,7.45,11,8,11z M8,7h5c0.55,0,1,0.45,1,1v0 c0,0.55-0.45,1-1,1H8C7.45,9,7,8.55,7,8v0C7,7.45,7.45,7,8,7z"/>
              </svg>
              <div>{{ item.name }}</div>
            </div>
            <div class="description">
              {{ item.description }}
            </div>
          </div>
          <div class="stats">
            <div>
              <div class="circle"></div>
              <span>
                {{ item.lang }}
              </span>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
                <path
                  d="M13.0375,7.05882353 L11.2,1.36470588 C10.8375,0.247058824 9.1625,0.247058824 8.8125,1.36470588 L6.9625,7.05882353 L1.4,7.05882353 C0.1875,7.05882353 -0.3125,8.52941176 0.675,9.18823529 L5.225,12.2470588 L3.4375,17.6705882 C3.075,18.7647059 4.425,19.6470588 5.3875,18.9529412 L10,15.6588235 L14.6125,18.9647059 C15.575,19.6588235 16.925,18.7764706 16.5625,17.6823529 L14.775,12.2588235 L19.325,9.2 C20.3125,8.52941176 19.8125,7.07058824 18.6,7.07058824 L13.0375,7.07058824 L13.0375,7.05882353 Z"/>
              </svg>
              <span>{{ item.stars }}</span>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
                <path
                  d="M14.4444444,4 L14.4444444,10 C14.4444444,11.1 15.4444444,12 16.6666667,12 L17.7777778,12 L17.7777778,19 C17.7777778,19.55 18.2777778,20 18.8888889,20 C19.5,20 20,19.55 20,19 L20,1.13 C20,0.48 19.3222222,8.8817842e-16 18.6222222,0.15 C16.2222222,0.68 14.4444444,2.51 14.4444444,4 Z M8.88888889,7 L6.66666667,7 L6.66666667,1 C6.66666667,0.45 6.16666667,0 5.55555556,0 C4.94444444,0 4.44444444,0.45 4.44444444,1 L4.44444444,7 L2.22222222,7 L2.22222222,1 C2.22222222,0.45 1.72222222,0 1.11111111,0 C0.5,0 0,0.45 0,1 L0,7 C0,9.21 1.98888889,11 4.44444444,11 L4.44444444,19 C4.44444444,19.55 4.94444444,20 5.55555556,20 C6.16666667,20 6.66666667,19.55 6.66666667,19 L6.66666667,11 C9.12222222,11 11.1111111,9.21 11.1111111,7 L11.1111111,1 C11.1111111,0.45 10.6111111,0 10,0 C9.38888889,0 8.88888889,0.45 8.88888889,1 L8.88888889,7 Z"/>
              </svg>
              <span>{{ item.forks }}</span>
            </div>
          </div>
        </div>
      </div>
    </vue-horizontal>
  </main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "vue-horizontal",
          stars: 999,
          forks: 99,
          lang: "Vue",
          description: "An ultra simple pure vue horizontal layout for modern responsive web with zero dependencies. (SPA/SSG/SSR)"
        },
        {
          name: "vue-horizontal-list",
          stars: 999,
          forks: 99,
          lang: "Vue",
          description: "An ultra simple pure vue horizontal layout for modern responsive web with zero dependencies. (SPA/SSG/SSR)"
        },
        {
          name: "vue-masonry-wall",
          stars: 999,
          forks: 99,
          lang: "Vue",
          description: "A pure vue responsive masonry layout without direct dom manipulation and ssr support."
        },
        {
          name: "vue-horizontal.fuxing.dev",
          stars: 999,
          forks: 99,
          lang: "Vue",
          description: "An ultra simple pure vue horizontal layout for modern responsive web with zero dependencies. (SPA/SSG/SSR)"
        },
        {
          name: "vue-horizontal-1",
          stars: 999,
          forks: 99,
          lang: "Vue",
          description: "An ultra simple pure vue horizontal layout for modern responsive web with zero dependencies. (SPA/SSG/SSR)"
        },
        {
          name: "vue-horizontal-2",
          stars: 999,
          forks: 99,
          lang: "Vue",
          description: "An ultra simple pure vue horizontal layout for modern responsive web with zero dependencies. (SPA/SSG/SSR)"
        },
      ]
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  height: 100%;
}

svg {
  fill: currentColor;
}

.title {
  font-weight: 600;
  color: #444;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  margin-bottom: 8px;
}

.title svg {
  margin-right: 8px;
}

.description, .stats {
  font-weight: 500;
  color: #555;
  font-size: 14px;
  line-height: 1.5;
}

.stats {
  display: flex;
  align-items: center;
  margin: -4px;
  padding-top: 12px;
}

.stats > * {
  display: flex;
  align-items: center;
  height: 12px;
  margin: 4px;
  line-height: 1 !important;
  font-weight: 600;
}

.stats .circle {
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background: black;
  margin-right: 4px;
}

.stats svg {
  margin-right: 4px;
}

.stats > *:first-child {
  margin-right: 8px;
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
    --count: 3;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
    --count: 4;
  }
}

@media (min-width: 1536px) {
  .horizontal {
    --count: 5;
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
