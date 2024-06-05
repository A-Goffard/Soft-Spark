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
  
  .soft-skills-2-0{
    background-color: rgb(255, 217, 159);
    border-color: #ea8623;
    box-shadow: 0px 0px 10px 5px rgb(255, 203, 47);
  }
  
  .soft-skills {
    background-color: rgb(200, 230, 255);
    border-color: #2ea3ea;
    box-shadow: 0px 0px 10px 5px rgb(47, 147, 255);
  }
  </style>
  
  <script setup>
  const props = defineProps({
    title: String,
    content: String,
    downloadUrl: String,
    version: String,
  });
  
  const versionClass = computed(() => {
    return props.version === '2.0' ? 'soft-skills-2-0' : 'soft-skills';
  });
  </script>
  