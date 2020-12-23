<template>
  <div :style="{background: color}">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
  }
}
</script>

<style scoped lang="less">
div {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 3px;
}

span {
  color: white;
  font-family: Arial, serif;
  font-weight: 700;
  font-size: 15px;
}
</style>
