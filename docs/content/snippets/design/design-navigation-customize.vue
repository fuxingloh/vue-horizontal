<template>
  <vue-horizontal responsive class="horizontal">
    <div slot="btn-next" class="replaced-btn">
      <div>MORE</div>
    </div>
    <placeholder-component-design v-for="i in [0,1,2,3,4,5,6,7,8,9]" :key="i">
    </placeholder-component-design>
  </vue-horizontal>
</template>

<style scoped>
.horizontal >>> .v-hl-btn-prev svg {
  background: red;
  color: white;
  border-radius: 0;
}

.horizontal >>> .v-hl-btn-next {
  top: 0;
  bottom: 0;
}

.replaced-btn {
  height: 100%;
  background: linear-gradient(to right, #ffffff00, white);
  padding: 0 8px 0 24px;
  display: flex;
  align-items: center;
}

.replaced-btn > div {
  font-weight: 700;
  font-size: 15px;
  line-height: 1;
  color: black;
  padding: 8px 12px;
  background: white;
  border-radius: 3px;
  border: 1px solid black;
}
</style>
