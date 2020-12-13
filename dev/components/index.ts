import Simple from './simple.vue';
import Empty from './empty.vue';

interface Component {
  path: string;
  name: string;
  description: string;
  component: any;
}

const components: Component[] = [
  {path: '/empty', name: 'empty', description: 'No content, for testing', component: Empty},
  {path: '/simple', name: 'simple', description: 'Simple implementation with margin and flex-basis.', component: Simple},
]

export default components
