<template>
    <div :class="['container', id]">
      <div :class="['image', imageId]">
        <img :src="imageUrl" :alt="title" class="city-image" />
      </div>
      <div :class="['story', storyId]">
        <div class="info">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
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
    description: String,
    imageUrl: String 
  })
  </script>
  
  <style scoped>
  .container {
    width: calc(33.333% - 20px);
    height: 320px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 20px 50px #555;
    transition: transform 0.5s ease, z-index 0.5s ease;
    transform: rotateX(50deg) scale(0.85);
  }
  
  .container:hover {
    cursor: pointer;
    transform: rotateX(0deg) scale(1) translateY(10px);
    z-index: 10;
  }
  
  .image {
    width: 100%;
    height: 50%;
  }
  .city-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Mantener la proporción de la imagen */
}
  
  #i0, #i1, #i2, #i3, #i4, #i5 {
    background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
  }
  
  .story {
    padding: 15px;
    height: 50%;
    background: linear-gradient(to bottom, #eba65b 0%, #d99267 40%);
  }
  
  #s1, #s2, #s3, #s4, #s5 {
    background: linear-gradient(to top, #5b62a2 0%, #7b88d1 100%);
  }
  
  .info h3 {
    text-align: center;
    color: #eee;
    letter-spacing: 2px;
  }
  
  .info p {
    font-size: 14px;
    color: #fff;
    padding: 0px 20px 20px 20px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 1px;
  }
  </style>
  