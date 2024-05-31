import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PedagogyView from '../views/PedagogyView.vue';
import TrainingView from '../views/TrainingView.vue';
import AssessmentView from '../views/AssessmentView.vue';
import AboutView from '../views/AboutView.vue';
import SecretView from '../views/SecretView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/pedagogy',
    name: 'PedagogyView',
    component: PedagogyView,
  },
  {
    path: '/training',
    name: 'TrainingView',
    component: TrainingView,
  },
  {
    path: '/assessment',
    name: 'AssessmentView',
    component: AssessmentView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/secret',
    name: 'SecretView',
    component: SecretView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;