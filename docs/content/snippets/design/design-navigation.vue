<template>
  <main>
    <vue-horizontal responsive class="horizontal" ref="container">
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
.horizontal >>> .v-hl-btn svg {
  background: black;
  color: white;
  animation: blink 0.2s;
  animation-direction: alternate;
  animation-iteration-count: 3;
}

@keyframes blink {
  from {
    background: white;
    color: black;
  }
  to {
    background: black;
    color: white;
  }
}
</style>


<style scoped>
section {
  background: #00000020;
  padding: 32px 24px;
  margin-right: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  text-align: center;
}

section > * {
  color: white !important;
}

main {
  margin: 24px 0;
  padding: 0 32px;
  background: #80008020;
}

.horizontal {
  background: #ffa50020;
}
</style>
