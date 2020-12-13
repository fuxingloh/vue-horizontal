import Empty from './empty.vue';
import Simple from './simple.vue';
import ContentBox from './content-box.vue';

interface Component {
  path: string;
  name: string;
  description: string;
  component: any;
}

const components: Component[] = [
  {
    path: '/empty',
    name: 'empty',
    description: 'No content, for testing',
    component: Empty,
  },
  {
    path: '/simple',
    name: 'simple',
    description: 'Simple implementation with margin and flex-basis.',
    component: Simple,
  },
  {
    path: '/content-box',
    name: 'content-box',
    description: 'CSS: box-sizing: content-box testing.',
    component: ContentBox,
  },
]

export default components
