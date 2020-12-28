<template>
  <main>
    <vue-horizontal class="horizontal" :displacement="0.5" :button-between="false">
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

    <article>
      <h3>Full Width Tags</h3>
      <p>You want to show a bunch of text but don't want it to take up too much real estate.
        So you decided to overflow horizontally. Vue Horizontal to the rescue!</p>
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
      ]
    }
  }
}
</script>

<style scoped>
.tag {
  font-weight: 600;
  font-size: 15px;
  color: #777;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  line-height: 1;
  padding: 8px 24px;
  margin-right: 16px;
}

.btn-left, .btn-right {
  padding: 6px;
  height: 100%;
}

.btn-left {
  background: linear-gradient(to left, #ffffff00 0, #fff 50%, #fff);
}

.btn-right {
  background: linear-gradient(to right, #ffffff00 0, #fff 50%, #fff);
}

main {
  padding: 24px;
}

@media (min-width: 768px) {
  main {
    padding: 48px;
  }
}

article {
  margin-top: 24px;
}
</style>
