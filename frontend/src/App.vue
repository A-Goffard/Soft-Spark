<script setup>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="general">
    <NavBar />
    <main class="content">
      <router-view />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<style scoped>

</style>
