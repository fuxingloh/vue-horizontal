<template>
  <main>
    <header>
      <p>Assuming 24px container padding/margin with 8px peeking 16px gap. (8+16 = 24)</p>
    </header>

    <vue-horizontal :button="false" class="horizontal">
      <section v-for="i in [0,1,2]" :key="i">
        <div></div>
      </section>
    </vue-horizontal>
  </main>
</template>

<!-- Peeking Style -->
<style scoped>
.horizontal >>> .v-hl-container {
  scroll-padding-left: 16px;
  scroll-padding-right: 16px;
}

section {
  width: calc(100% - (16px + 16px));
  padding: 16px 8px;
}

section:first-child {
  width: calc(100% - (16px));
  padding-left: 24px;
}

section:last-child {
  width: calc(100% - (16px));
  padding-right: 24px;
}
</style>

<!-- Design Style -->
<style scoped>
section:nth-child(2) {
  background: green;
}

section > div {
  background: black;
  height: 100px;
  border-radius: 3px;
}

main {
  margin: 24px 0;
  background: purple;
}

header {
  margin: 0 24px;
  background: white;
}

.horizontal {
  background: orange;
}
</style>
