<script setup>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
import HomeView from './views/HomeView.vue'
import PopupNavbar from './components/PopupNavbar.vue';

</script>

<template>
  <div class="general">
    <NavBar />
    <main class="content">
      <HomeView />
    </main>
    <FooterComponent />
    <PopupNavbar /> <!-- Include PopupNavbar component -->
  </div>
</template>

<style>
:root {
  --bg-color: white;
  --text-color: black;
  --high-contrast-bg: black;
  --high-contrast-text: yellow;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.general {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
