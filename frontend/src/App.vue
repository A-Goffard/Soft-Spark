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
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 75rem;
  margin: auto;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: inherit;
  background-color: #fb6ff1;
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 1rem;
  transition: ease all 250ms;
}
button:hover {
  border-color: #e68bfd;
  box-shadow: 0px 0px 6px 1px rgb(230, 139, 253, 1);
}

/* WAVES */
.main {
  background-color: white;
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
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 1.5rem;
  color: #333333;
  text-align: left;
}

.header {
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, rgb(255, 211, 245, 1) 0%, rgb(230, 139, 253, 1) 100%);
  color:white;
}
.logo {
  width:50px;
  fill:white;
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

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  h1 {
    font-size:24px;
  }
}


</style>
