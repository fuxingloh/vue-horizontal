<template>
  <ul>
    <li v-for="item in list" :key="item.path">
      <n-link :to="item.path">{{ item.title }}</n-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "recipes-list",
  mounted() {
    this.$content('/en/recipes')
      .only(['path', 'title'])
      .where({title: {$ne: 'About Recipes'}})
      .fetch().then((items) => {
      this.list = items
    })
  },
  data() {
    return {
      list: []
    }
  }
}
</script>
