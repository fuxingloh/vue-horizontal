<template>
  <div>
    <vue-horizontal :displacement="0.5">
      <component-example v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]">
        <h3>50% {{ i }}</h3>
      </component-example>
    </vue-horizontal>

    <vue-horizontal :displacement="1.75" style="margin-top: 24px">
      <component-example v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19]">
        <h3>175% {{ i }}</h3>
      </component-example>
    </vue-horizontal>
  </div>
</template>
