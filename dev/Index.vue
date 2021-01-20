<template>
  <div>
    <h1>Index</h1>
    <!--    <section v-for="component in components" :key="component.name">-->
    <!--      <router-link :to="component.path">-->
    <!--        <h2>{{ component.name }}</h2>-->
    <!--        <p>{{ component.description }}</p>-->
    <!--      </router-link>-->
    <!--      <component :is="component.name"/>-->
    <!--    </section>-->
  </div>
</template>

<style scoped>
h2 {
  text-transform: capitalize;
}

p {
  margin-bottom: 16px;
}

section {
  margin-bottom: 48px;
}
</style>
