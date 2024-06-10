<template>
    <div class="wrapper">
      <DestinationCard
        v-for="(destination, index) in destinations"
        :key="index"
        :id="'c' + index"
        :image-id="'i' + index"
        :story-id="'s' + index"
        :title="destination.title"
        :description="destination.description"
        :image-url="destination.imageUrl" 
       
      />
      
      <div class="page">
        <h4>Hover the card</h4>
        <ul>
          <li> <<< </li>
          <li> >>> </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import DestinationCard from './DestinationCard.vue'
  
  const destinations = ref([
    { title: 'Target numero1', description: 'Target 1 description', imageUrl: '/1.png'},
    { title: 'Target numero2', description: 'Target 2 description', imageUrl: '/2.png'},
    { title: 'Target numero3', description: 'Target 3 description', imageUrl: '/3.png'},
    { title: 'Target numero4', description: 'Target 4 description', imageUrl: '/4.png'},
    { title: 'Target numero5', description: 'Target 5 description', imageUrl: '/5.png'},
    { title: 'Target numero6', description: 'Target 6 description', imageUrl: '/6.png'}
  ])
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    margin-top: 20px;
    perspective: 1000px;
  }
  
  .page {
    text-align: center;
    margin-top: 20px;
  }
  
  .page ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .page ul li {
    padding: 10px;
    border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .page ul li:hover {
    background-color: #f0f0f0;
  }
  
  li:nth-child(1) {
    animation: simple1 1s linear infinite;
  }
  
  li:nth-child(2) {
    animation: simple 1s linear infinite;
  }
  
  @keyframes simple {
    50% {
      transform: translateX(10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(10px);
      opacity: 0;
    }
  }
  
  @keyframes simple1 {
    50% {
      transform: translateX(-10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(-10px);
      opacity: 0;
    }
  }
  </style>
  