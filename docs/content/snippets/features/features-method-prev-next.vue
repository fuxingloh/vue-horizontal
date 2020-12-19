<template>
  <div>
    <vue-horizontal ref="horizontal">
      <component-example v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]">
        <h3>Event {{ i }}</h3>
      </component-example>
    </vue-horizontal>

    <button @click="$refs.horizontal.prev()">Prev</button>
    <button @click="$refs.horizontal.next()">Next</button>
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
