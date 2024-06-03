import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import PedagogyView from '../views/PedagogyView.vue';
import TrainingView from '../views/TrainingView.vue';
import AssessmentView from '../views/AssessmentView.vue';

const routes = [
  { path: '/', name: 'Inicio', component: HomeView },
  { path: '/about', name: 'Quienes Somos', component: AboutView },
  { path: '/pedagogy', name: 'Pedagogía', component: PedagogyView },
  { path: '/training', name: 'Formación', component: TrainingView },
  { path: '/assessment', name: 'Evaluación', component: AssessmentView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;