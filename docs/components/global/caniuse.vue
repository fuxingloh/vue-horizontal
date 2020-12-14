<template>
  <div>
    <iframe width="100%" :src="src" :height="`${height}px`"></iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const origin = "https://caniuse.bitsofco.de"

export default Vue.extend({
  props: {
    feature: {
      type: String,
      required: true,
    },
    periods: {
      type: Array,
      default: () => ['future_1', 'current', 'past_1', 'past_2', 'past_3'],
    },
    accessible: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      height: 400
    }
  },
  computed: {
    src(): string {
      return `${origin}/embed/index.html?feat=${this.feature}&periods=${this.periods.join(',')}&accessible-colours=${this.accessible}`
    },
  },
  mounted() {
    window.addEventListener("message", this.onMessage);
  },
  destroyed() {
    window.removeEventListener("message", this.onMessage);
  },
  methods: {
    onMessage(event: MessageEvent) {
      if (event.origin !== origin) {
        return;
      }

      if ("string" != typeof event.data) {
        return;
      }

      const parts = event?.data?.split(":")
      if (parts[1] === this.feature) {
        this.height = parseInt(parts[2]) + 30
      }
    },
  }
});
</script>
