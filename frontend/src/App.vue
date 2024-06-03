<script setup>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import LanguageSelector from './components/LanguageSelector.vue';
</script>

<template>
  <div class="general">
    <NavBar />
    <LanguageSelector />
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
