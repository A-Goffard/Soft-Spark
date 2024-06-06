<template>
    <div class="general">
      <Header />
      <div class="main">
        <h1>Recursos humanos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vero rem natus dicta voluptate commodi officia sunt quis vitae, tempore soluta consectetur eum in ullam id, voluptas ipsum. Vero, blanditiis!</p>
        <button>Impact measurement report</button>
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


</style>
  
  <script setup>
import Header from '../components/Header.vue';
  </script>