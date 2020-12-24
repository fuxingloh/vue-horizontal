<template>
  <main>
    <vue-horizontal responsive scroll class="horizontal">
      <template v-slot:btn-next>
        <nav>
          <div>NAV</div>
        </nav>
      </template>
      <template v-slot:btn-prev>
        <nav>
          <div>NAV</div>
        </nav>
      </template>
      <section v-for="i in [0,1,2,3,4,5,6,7,8,9,10]" :key="i">
        <h5>ITEM</h5>
      </section>
    </vue-horizontal>
  </main>
</template>

<style scoped>
main {
  margin: 24px 0;
  padding: 0 24px;
  background: purple;
}

section {
  background: black;
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

nav {
  border-radius: 4px;
  background: red;
  font-weight: 600;
  color: white;
  padding: 8px 12px;
  line-height: 1.5;
}

.horizontal {
  background: orange;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar {
  height: 8px;
  width: 8px;
  background: transparent;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 99px;
  background: green;
}
</style>
