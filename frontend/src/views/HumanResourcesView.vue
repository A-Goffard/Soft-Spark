<template>
  <div class="general">
    <div class="main">
      <h1>Human Resources</h1>
    
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
          @click="changeActiveComponent(destination.componentName)"
        />
      </div>

      <div class="cards">
        <component :is="getComponent(activeComponent)" />
      </div>
      
    </div>
  

</div>

</template>

<style scoped>
.general {
  padding-top: 5rem;
}

.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin-top: 20px;
  perspective: 1000px;
}
</style>

<script setup>
import { ref } from 'vue';
import DestinationCard from '../components/DestinationCard.vue';

import HRM from '../components/human/HRM.vue';

const destinations = ref([
  { title: 'HRM', description: 'Target 1 description', imageUrl: '/1.png', componentName: 'HRM' },

]);

const activeComponent = ref('');

const changeActiveComponent = (componentName) => {
  activeComponent.value = componentName;
};

const componentMap = {
  HRM,
};

const getComponent = (name) => {
  return componentMap[name] || null;
};
 </script>