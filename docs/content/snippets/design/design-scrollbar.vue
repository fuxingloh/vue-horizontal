<template>
  <main>
    <vue-horizontal responsive scroll :button="false" class="horizontal" ref="container">
      <section v-for="i in [0,1,2,3,4,5,6,7,8,9,10]" :key="i">
        <h5>ITEM</h5>
      </section>
    </vue-horizontal>
  </main>
</template>

<script>
export default {
  mounted() {
    this.$refs.container.scrollToIndex(3)
  }
}
</script>

<style scoped>
.horizontal >>> .v-hl-container::-webkit-scrollbar {
  height: 12px;
  width: 12px;
  background: transparent;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 99px;
  background: black;
}
</style>


<style scoped>
section {
  background: #00000033;
  padding: 32px 24px;
  margin-right: 24px;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 4px;
  text-align: center;
}

section > * {
  color: white !important;
}

main {
  margin: 24px 0;
  padding: 0 32px;
  background: #80008033;
}

.horizontal {
  background: #ffa50033;
}
</style>
