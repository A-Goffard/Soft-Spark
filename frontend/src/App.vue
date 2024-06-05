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

<style>

* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  text-decoration: none;
  box-sizing: border-box;
}

:root {

  --naranja: rgb(255, 192, 0);
  --naranajaclaro: rgb(255, 220, 114);

  --salmonclaro: rgb(255, 226, 211);
  --salmon: rgba(255, 153, 102);

  --amarillo: rgba(255, 255, 0);
  --amarilloclaro: rgb(255, 255, 161);

  --blanco: rgb(255, 255, 255);
  --negro: rgb(0, 0, 0);
  --grisoscuro: rgb(51, 51, 51);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
}

h2, h3, h4, p {
  margin: 1rem;
}

h1 {
  color: black;
  text-align: center;
  margin: 4rem;
}
.title {
  color: black;
  font-size: 4rem;
  font-weight: 900;
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
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.btn {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--amarilloclaro);
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 1rem;
  transition: ease all 250ms;
}
.btn:hover {
  border-color: rgb(255, 255, 200);
  box-shadow: 0px 0px 6px 1px rgb(255, 226, 211);
  background-color: var(--naranja);
}


/* WAVES */
main {
  background: linear-gradient(var(--naranajaclaro), white);
}

body {
  margin:0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
  text-align: left;
  padding: 1rem;
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 1.5rem;
  color: rgb(51, 51, 51);
  text-align: left;
}

.header {
  position:relative;
  text-align:center;
  background: white;
  color:white;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}




</style>
