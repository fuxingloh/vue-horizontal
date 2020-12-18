import Empty from './empty.vue';
import Simple from './simple.vue';
import ContentBox from './content-box.vue';
import VariousWidth from './various-width.vue';
import ScrollToIndex from './scroll-to-index.vue';
import Snapping from './snapping.vue';
import NavButton from './nav-button.vue';
import Event from './event.vue';
import Responsive from './responsive.vue';
import RegressionCSS from './regression-css.vue';

export interface ComponentMeta {
  path: string;
  name: string;
  description: string;
  component: any;
}

const components: ComponentMeta[] = [
  {
    path: '/empty',
    name: 'empty',
    description: 'No content, for testing. Below should be empty.',
    component: Empty,
  },
  {
    path: '/simple',
    name: 'simple',
    description: 'Simple implementation with margin and flex-basis. CSS: border-sizing.',
    component: Simple,
  },
  {
    path: '/content-box',
    name: 'content-box',
    description: 'CSS: box-sizing: content-box testing.',
    component: ContentBox,
  },
  {
    path: '/various-width',
    name: 'various-width',
    description: 'Various width testing, non-standard width, content influence width.',
    component: VariousWidth,
  },
  {
    path: '/scroll-to-index',
    name: 'scroll-to-index',
    description: 'Scroll to index $horizontal.scrollToIndex(0)',
    component: ScrollToIndex,
  },
  {
    path: '/snapping',
    name: 'snapping',
    description: 'Snapping on/off testing',
    component: Snapping,
  },
  {
    path: '/nav-button',
    name: 'nav-button',
    description: 'Multiple nav button testing scenario',
    component: NavButton,
  },
  {
    path: '/event',
    name: 'event',
    description: 'Emit event bubbling',
    component: Event,
  },
  {
    path: '/responsive',
    name: 'responsive',
    description: 'Build-in opinionated responsive classes for users to get responsiveness at the get-go.',
    component: Responsive,
  },
  {
    path: '/regression-css',
    name: 'regression-css',
    description: 'Regression testing to make sure outer css does not influence internal css.',
    component: RegressionCSS,
  },
]

export default components
