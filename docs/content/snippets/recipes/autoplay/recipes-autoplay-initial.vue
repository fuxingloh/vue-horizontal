<template>
  <vue-horizontal responsive ref="horizontal">
    <placeholder-component v-for="i in [0,1,2,3,4,5,6,7,8,9]" :key="i">
      {{i}}
    </placeholder-component>
  </vue-horizontal>
</template>

<script>
export default {
  mounted() {
    this.$refs.horizontal.scrollToIndex(1);
  }
}
</script>
