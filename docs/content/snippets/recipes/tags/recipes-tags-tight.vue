<template>
  <main>
    <div class="search">
      <div class="field">
        <label>
          <input placeholder="Search">
        </label>
      </div>

      <vue-horizontal class="horizontal" :displacement="0.9" :button-between="false" snap="center">
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
      <h3>Tight Spacing Tags</h3>
      <p>You want to put something on the left or right of the horizontal space.</p>
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
.search {
  display: flex;
}

input {
  font-weight: 600;
  font-size: 17px;
  padding: 4px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  width: 100%;
}

.field {
  padding-right: 24px;
  flex-shrink: 0;
  width: 65%;
}

.horizontal {
  flex-shrink: 1;
  flex-grow: 1;
  width: 20%;
}

.tag {
  font-weight: 600;
  font-size: 15px;
  color: #777;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  line-height: 1;
  height: 100%;
  padding-left: 18px;
  padding-right: 18px;
  margin-right: 16px;
}

.btn-left, .btn-right {
  padding: 8px 2px;
  height: 100%;
}

.btn-left {
  background: linear-gradient(to left, #ffffff00 0, #fff 80%, #fff);
}

.btn-right {
  background: linear-gradient(to right, #ffffff00 0, #fff 80%, #fff);
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
