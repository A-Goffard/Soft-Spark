<template>
    <div class="general">
      <Header />

      <div class="main">
        <h1>Pedagogía</h1>
        <div class="foto">

          <Carrusel/>
        </div>
      </div>
    

  </div>

  </template>
  
<style scoped>
h1 {
  color: black;
}
.inner-header {
  position: relative;
}
.triangulitos {
  position: relative;
  top: -2.7rem;
  right: 1rem;
  width: 5rem;
  filter: drop-shadow(0px 0px 7px #FF9966);
}

.header {
  display: flex;
  flex-direction: column;
  position: relative;
}



@media (max-width: 500px){
  
}
</style>
  
  <script setup>
import Header from '../components/Header.vue';
import Carrusel from '../components/Carrusel.vue';
  </script>