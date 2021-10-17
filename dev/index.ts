import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Index from './Index.vue'
import components from './components'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Index},
    ...components.map(({path, component}) => {
      return {path, component}
    })
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
