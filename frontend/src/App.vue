<script setup>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import LanguageSelector from './components/LanguageSelector.vue';
import PopupNavbar from './components/PopupNavbar.vue';
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
    <PopupNavbar /> <!-- Include PopupNavbar component -->
  </div>
</template>

<style>
:root {
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
  
}


h2, h3, h4, p {
  margin: 1rem;
}

img {
  width: 90%;
  margin: 1rem;
  border-radius: 8px;

}

.general {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
