<template>
  <nav class="flex items-center py-4">
    <div class="mr-5">
      <h3>Brand Name</h3>
    </div>

    <div v-for="nav in ['Nav 1', 'Nav 2', 'Nav 3']" :key="nav"
         class="px-5 border-l-2 border-gray-200">
      <h3 class="leading-tight">{{ nav }}</h3>
    </div>

    <div class="flex-grow"></div>

    <div>
      <button class="uppercase text-gray-800 bg-gray-200 font-bold rounded px-5 py-2">Action</button>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
