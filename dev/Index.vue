<template>
  <div>
    <section v-for="component in components" :key="component.name">
      <router-link :to="component.path">
        <h2>{{ component.name }}</h2>
        <p>{{ component.description }}</p>
      </router-link>
      <component :is="component.name"/>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import components from './components';

export default defineComponent({
  components: components.reduce((map, {name, component}) => {
    map[name] = component
    return map
  }, {} as {[id: string]: any}),
  data() {
    return {
      components: components.map(({name, description, path}) => {
        return {name, description, path}
      })
    }
  }
})
</script>

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
