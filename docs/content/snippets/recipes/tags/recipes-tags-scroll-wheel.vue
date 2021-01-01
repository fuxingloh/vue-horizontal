<template>
  <main>
    <div @wheel="onWheel">
      <vue-horizontal ref="horizontal" class="horizontal"
                      snap="none" :displacement="0.5" :button-between="false" @scroll="onScrollDebounce">
        <template v-slot:btn-prev>
          <svg class="btn-left" viewBox="0 0 24 24">
            <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
          </svg>
        </template>

        <template v-slot:btn-next>
          <svg class="btn-right" viewBox="0 0 24 24">
            <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
          </svg>
        </template>

        <div class="item" v-for="tag in tags" :key="tag.name">
          <button class="tag">
            {{ tag.name }}
          </button>
        </div>
      </vue-horizontal>
    </div>

    <article>
      <h3>Mouse Wheel Scroll Event</h3>
      <p>
        Usually you won't want to enable vertical scroll as well as horizontal scroll on any horizontal content on your
        web as it will interfere with the nature flow of the content.
        User expectation of vertical scroll is that the content scroll vertically and not try to act otherwise.
        But if the content is situated at the edge of the y axis (top/bottom) it might make sense to enable that
        user experience as it will not be interfering with the nature flow of the content.
      </p>

      <p>
        I personally would still stick with just the navigation button.
      </p>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {name: 'VueJS'}, {name: 'Nuxt'}, {name: 'Gridsome'}, {name: 'VuePress'},
        {name: 'ReactJS'}, {name: 'Next'}, {name: 'Gatsby'}, {name: 'Node.js'},
        {name: 'Typescript'}, {name: 'Javascript'}, {name: 'Webpack'}, {name: 'HTML'}, {name: 'CSS'},
        {name: 'Java'}, {name: 'Spring Boot'}, {name: 'Spring Framework'}, {name: 'Gradle'}, {name: 'Maven'},
        {name: 'Python'}, {name: 'Flutter'}, {name: 'Terraform'},
        {name: 'CircleCI'}, {name: 'IntelliJ'},
        {name: 'GitHub'},
      ],
      scrollDebounceId: null,
      left: 0
    }
  },
  methods: {
    onScrollDebounce({left}) {
      clearTimeout(this.scrollDebounceId);
      this.scrollDebounceId = setTimeout(() => {
        this.left = left
      }, 500);
    },
    onWheel(event) {
      this.left = this.left + event.deltaY
      this.left = this.left + event.deltaX
      this.$refs.horizontal.scrollToLeft(this.left, 'auto')
    },
  }
}
</script>

<style scoped>
.horizontal {
  margin: 4px 8px;
}

.tag {
  font-weight: 600;
  font-size: 15px;
  color: #777;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  line-height: 1;
  padding: 8px 24px;
  margin: 8px;
}

.btn-left, .btn-right {
  padding: 12px;
  height: 100%;
}

.btn-left {
  background: linear-gradient(to left, #ffffff00 0, #fff 50%, #fff);
}

.btn-right {
  background: linear-gradient(to right, #ffffff00 0, #fff 50%, #fff);
}

article {
  padding: 24px;
}
</style>
