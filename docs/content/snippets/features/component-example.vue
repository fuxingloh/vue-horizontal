<template>
  <section>
    <slot>
      <h3>Title</h3>
    </slot>
    <p>Paragraph Text</p>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
section {
  padding: 16px 24px;
  margin-right: 24px;
  background: #f3f3f3;
  border-radius: 4px;
}
</style>
