<template>
  <vue-horizontal responsive class="horizontal" :displacement="0.7" snap="center">
    <div class="tag" v-for="i in [0,1,2,3,4,5,6,7,8,9,10,11,12]" :key="i">
      <div>
        <span>{{ i }}</span>
      </div>
    </div>
  </vue-horizontal>
</template>

<style scoped>
.horizontal >>> .v-hl-btn svg {
  border-radius: 0;
  margin: 0;
  padding: 8px;
  height: 100%;
  box-shadow: none;
  background: none;
}

.horizontal >>> .v-hl-btn-prev {
  background: linear-gradient(to left, #ffffff00 0, #fff 66%, #fff);
  padding-right: 24px;
}

.horizontal >>> .v-hl-btn-next {
  background: linear-gradient(to right, #ffffff00 0, #fff 66%, #fff);
  padding-left: 24px;
}

.horizontal >>> .v-hl-btn {
  top: 0;
  bottom: 0;
  transform: translateX(0);
}
</style>

<style scoped>
/* Content styling is done with tailwind postcss @apply for brevity. */
.tag {
  @apply border rounded py-2 px-4;
}

.tag > div {
  @apply h-4 bg-gray-300 rounded-sm flex justify-center items-center font-bold text-xs;
}
</style>
