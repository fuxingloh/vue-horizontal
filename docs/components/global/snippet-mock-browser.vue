<template>
  <div :class="{fullscreen}">
    <div class="overlay" @click="fullscreen = false"></div>
    <main class="mock-browser overflow-hidden rounded-md border border-pre-color">
      <header class="bg-pre-color sticky">
        <div class="flex items-center justify-between" @click="fullscreen = false">
          <div class="dots">
            <div>
              <div class="bg-red-500"/>
            </div>
            <div>
              <div class="bg-yellow-500"/>
            </div>
            <div>
              <div class="bg-green-500"/>
            </div>
          </div>

          <div class="flex items-center text-white fill-current cursor-pointer px-2"
               @click.stop="fullscreen = !fullscreen">
            <div class="text-sm font-black" v-if="!fullscreen && zoom">
              Zoom: 50% | 100% →
            </div>
            <svg v-if="fullscreen" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
              <path
                  d="M21.29,4.12l-4.59,4.59l1.59,1.59c0.63,0.63,0.18,1.71-0.71,1.71H13c-0.55,0-1-0.45-1-1V6.41c0-0.89,1.08-1.34,1.71-0.71 l1.59,1.59l4.59-4.59c0.39-0.39,1.02-0.39,1.41,0v0C21.68,3.1,21.68,3.73,21.29,4.12z M4.12,21.29l4.59-4.59l1.59,1.59 c0.63,0.63,1.71,0.18,1.71-0.71V13c0-0.55-0.45-1-1-1H6.41c-0.89,0-1.34,1.08-0.71,1.71l1.59,1.59l-4.59,4.59 c-0.39,0.39-0.39,1.02,0,1.41l0,0C3.1,21.68,3.73,21.68,4.12,21.29z"/>
            </svg>

            <svg v-else height="24" viewBox="0 0 24 24" width="24">
              <path
                  d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"/>
            </svg>
          </div>
        </div>
      </header>

      <div>
        <div class="viewport bg-white" :class="{zoom}">
          <slot></slot>
        </div>

        <div class="snippet">
          <slot name="snippet"></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    zoom: Boolean,
  },
  data() {
    return {
      fullscreen: false
    }
  }
}
</script>

<style lang="less" scoped>
@pre-color: #2d3748;

.dots {
@apply flex -m-1 p-3;

  > div {
  @apply p-1;

    > div {
    @apply w-3 h-3 rounded-full;
    }
  }
}

.snippet /deep/ pre {
  margin: 0 !important;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bg-pre-color {
  background: @pre-color;
}

.border-pre-color {
  border-color: @pre-color;
}

.viewport {
  font-family: "-apple-system", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", 'sans-serif';

  /deep/ & {
    p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
      border: 0;

      &::before {
        display: none;
      }
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 700;
    }

    p {
      font-weight: 500;
    }
  }
}

/* TODO(fuxing): Wait for https://github.com/nuxt/content/pull/691 to be fixed */
.snippet /deep/ .filename {
  display: none;
}

.snippet /deep/ pre {
  padding-top: 1.25rem !important;
  font-size: 0.9em;
}

.viewport.zoom {
  zoom: 0.5;
}

.fullscreen {
@apply fixed inset-0;
  background: #33333344;
  backdrop-filter: blur(2px);
  z-index: 100;

  .dots > div:first-child {
  @apply cursor-pointer;
  }

  .overlay {
  @apply absolute inset-0;
    z-index: -1;
  }

  .viewport.zoom {
    zoom: 1;
  }

  > main {
  @apply mx-auto;
    margin-top: 5vh;
    height: 90vh;
    width: 100vw;
    max-width: 1600px;
    background: white;

    @media (min-width: 1280px) {
      width: 96vw;
    }

    > div {
      overflow-y: scroll;
      height: calc(100% - 32px);
    }
  }
}
</style>
