<template>
  <div>
    <vue-horizontal ref="horizontal">
      <component-example v-for="i in [0,1,2,3,4,5,6,7,8,9,10,11,12]" :key="i">
        <h3>Event {{ i }}</h3>
      </component-example>
    </vue-horizontal>

    <button v-for="i in [0,100,150,300,1000,3000]" @click="$refs.horizontal.scrollToLeft(i)">
      {{i}}
    </button>
  </div>
</template>

<style scoped>
button {
  padding: 4px 16px;
  border-radius: 3px;
  background: black;
  color: white;
  font-weight: 700;
  margin: 24px 12px 0 0;
}
</style>
