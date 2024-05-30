<script setup>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <div class="general">
    <NavBar />
    <main class="content">
      <HomeView />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<style scoped>

</style>
