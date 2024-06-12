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

* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  text-decoration: none;
  box-sizing: border-box;
}

:root {
  --black: #000000;
  --white: #ffffff;

  --darkgrey: #333333;

  --ligthorange: #ffe9a5;
  --orange: #FFC000;
  --orangetransp: #ffbf00c8;

  --ligtheryellow: #fefee6;
  --ligthyellow: #ffffa4;
  --yellow: #FFFF00;
  --yellowtransp: #ffff00bb;

  --ligthsalmon: #ffd6c1;
  --salmon: #FF9966;
  --salmontransp: #ff9966ca;


  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
  
}


h2, h3, h4, p {
  margin: 1rem;
}

.img {
  width: 90%;
  margin: 1rem;
  border-radius: 8px;

}

.general {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 75rem;
  margin: auto;
}


.main {
  background-color: var(--white);
  padding: 2rem;
}

body {
  margin:0;
}

h1 {
  font-family: 'Lato', sans-serif;
  letter-spacing: 2px;
  font-size:3rem;
  padding: 1rem;
  text-align: center;
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 1.5rem;
  color: var(--darkgrey);
  text-align: left;
}


.logo {
  width:50px;
  fill:var(--white);
  padding-right:15px;
  display:inline-block;
  vertical-align: middle;
}

.inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/*BUTTONS*/

.btn {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--ligthorange);
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 1rem;
  transition: ease all 250ms;
}
.btn:hover {
  background-color: var(--orange);
  border-color: var(--ligthyellow);
  box-shadow: 0px 0px 6px 1px var(--salmon);
}

/* CARDS */

.comp-card {
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.6em 1.2em;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--white);
  margin: 1rem;
  transition: ease all 250ms;
  border: solid 2px var(--ligthorange);
}
.comp-card:hover {
  background-color: var(--ligtheryellow);
  border-color: var(--orange);
  box-shadow: 0px 0px 10px 5px var(--salmon);
}

.comp-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.comp-downloads {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media (max-width: 620px) {

  h1{
    font-size:2rem;
  }
}

@media (max-width: 460px) {

h1{
  font-size:1.8rem;
}
h2 {
  font-size: 1.3rem;
}

}

@media (max-width: 420px) {

h1{
  font-size:1.3rem;
}
h2 {
  font-size: 1rem;
}

}
</style>
