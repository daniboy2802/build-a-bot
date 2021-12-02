import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';

export default createRouter({
  history: createWebHashHistory(),
  route: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        path: 'heads',
        name: 'BrowseHeads',
        component: BrowseHeads,
      },
    ],
  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
  }],
});
