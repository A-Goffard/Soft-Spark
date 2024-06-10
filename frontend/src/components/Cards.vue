<template>
    <div :class="['card', versionClass]">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <a :href="downloadUrl" class="btnS" download>Descarga</a>
    </div>
  </template>
  
  <style scoped>
  .card {
    height: 40rem;
    width: 25rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
    
  }
  
  </style>
  
  <script setup>

  </script>
  