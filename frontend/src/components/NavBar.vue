<template>
  <nav class="navbar">
    <div class="menu-icon" @click="toggleMenu">
      <div :class="{ 'menu-icon-line': true, 'active': isMenuOpen }"></div>
    </div>
    <ul :class="{ 'nav-links': true, 'active': isMenuOpen }">
      <li v-for="tab in tabs" :key="tab.name" :class="{ active: isActiveTab(tab.component) }" @click="setCurrentTab(tab)">
        {{ tab.name }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import PedagogyView from '../views/PedagogyView.vue';
import TrainingView from '../views/TrainingView.vue';
import AssessmentView from '../views/AssessmentView.vue';

const router = useRouter();
const route = useRoute();

const tabs = [
  { name: 'Inicio', path: '/', component: HomeView },
  { name: 'Quiénes Somos', path: '/about', component: AboutView },
  { name: 'Pedagogía', path: '/pedagogy', component: PedagogyView },
  { name: 'Formación', path: '/training', component: TrainingView },
  { name: 'Evaluación', path: '/assessment', component: AssessmentView }
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const setCurrentTab = (tab) => {
  router.push({ path: tab.path });
  isMenuOpen.value = false; // Close the menu after selecting a tab
};

const isActiveTab = (component) => {
  return route.matched.some(record => record.components.default === component);
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000; 
}

.menu-icon {
  display: none;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 21px;
  margin-left: auto;
}

.menu-icon-line,
.menu-icon-line::before,
.menu-icon-line::after {
  content: '';
  display: block;
  background-color: #FFFFFF;
  height: 3px;
  border-radius: 2px;
  transition: all 0.3s;
}

.menu-icon-line::before,
.menu-icon-line::after {
  position: absolute;
  width: 100%;
}

.menu-icon-line::before {
  top: -8px;
}

.menu-icon-line::after {
  top: 8px;
}

.menu-icon-line.active {
  background-color: transparent;
}

.menu-icon-line.active::before {
  transform: translateY(8px) rotate(45deg);
}

.menu-icon-line.active::after {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-links {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
}

.nav-links li {
  margin: 0 1rem;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: #FF7CE2;
  color: #FFFFFF;
  font-size: 1.25rem;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-links li:hover,
.nav-links li.active {
  background-color: rgb(255, 56, 212);
}

@media (max-width: 950px) {
  .menu-icon {
    display: block;
    z-index: 10000;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 15rem;
    height: 100vh;
    background-color: rgb(255, 56, 212, 0.7);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .nav-links li {
    margin: 0.5rem 0;
  }
}
</style>
