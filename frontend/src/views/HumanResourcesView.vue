<template>
  <div class="general">
    <div class="main">
      <h1>{{ $t('message.humanrpage') }}</h1>
    
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  max-width: 1200px;
  margin-top: 20px;
}
</style>

