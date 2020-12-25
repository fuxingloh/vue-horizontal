<template>
  <div class="bg-gray-500 rounded" :class="{'p-4': !small, 'p-3': small}">
    <div class="flex items-center">
      <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <div class="leading-none font-bold text-black">
          <slot></slot>
        </div>
      </div>
      <div class="ml-3 flex-grow">
        <p class="w-full h-6 bg-white rounded-sm"></p>
      </div>
    </div>
    <div v-if="!small">
      <div class="mt-3">
        <p class="w-full h-3 bg-white rounded-sm"></p>
      </div>
      <div class="mt-2">
        <p class="w-3/4 h-3 bg-white rounded-sm"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: Boolean
  }
}
</script>
