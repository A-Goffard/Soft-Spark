<template>
    <div :class="['container', id]">
      <div :class="['story', storyId]">
        <div class="info">
          <h3>{{ title }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    id: String,
    imageId: String,
    storyId: String,
    title: String,
  })
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 10rem;
    background-image: url("background.png");
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0px 0px 30px var(--darkgrey);
    transition: transform 0.4s ease;
  }
  
  .container:hover {
    cursor: pointer;
    transform: scale(1.1);
    z-index: 10;
  }
  
  .info h3 {
    text-align: center;
  }
  

  </style>
  