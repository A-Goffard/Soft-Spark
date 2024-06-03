<script setup>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
import HomeView from './views/HomeView.vue'
import About from './components/About.vue'
</script>

<template>
  <div class="general">
    <NavBar />
    <main class="content">
      <HomeView />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped>
.general {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
