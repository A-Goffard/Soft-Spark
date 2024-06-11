<template>
  <div class="general">
    <div class="main">
      <h1>Pedagogía</h1>

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

import Catalogue from '../components/pedagogy/Catalogue.vue';
import SSPictograms from '../components/pedagogy/SSPictograms.vue';
import SSBase from '../components/pedagogy/SSBase.vue';
import Wheels from '../components/pedagogy/Wheels.vue';
import Summary from '../components/pedagogy/Summary.vue';
import Zerobarrier from '../components/pedagogy/Zerobarrier.vue';
import Occupational from '../components/pedagogy/Occupational.vue';
import CorporateCulture from '../components/pedagogy/CorporateCulture.vue';

const destinations = ref([
  { title: 'Catalogue', description: 'Target 1 description', imageUrl: '/1.png', componentName: 'Catalogue' },
  { title: 'SSPictograms', description: 'Target 2 description', imageUrl: '/2.png', componentName: 'SSPictograms' },
  { title: 'SSBase', description: 'Target 3 description', imageUrl: '/3.png', componentName: 'SSBase' },
  { title: 'Wheels', description: 'Target 4 description', imageUrl: '/4.png', componentName: 'Wheels' },
  { title: 'Summary', description: 'Target 5 description', imageUrl: '/5.png', componentName: 'Summary' },
  { title: 'Zerobarrier', description: 'Target 6 description', imageUrl: '/6.png', componentName: 'Zerobarrier' },
  { title: 'Occupational', description: 'Target 7 description', imageUrl: '/7.png', componentName: 'Occupational' },
  { title: 'CorporateCulture', description: 'Target 8 description', imageUrl: '/8.png', componentName: 'CorporateCulture' },
]);

const activeComponent = ref('');

const changeActiveComponent = (componentName) => {
  activeComponent.value = componentName;
};

const componentMap = {
  Catalogue,
  SSPictograms,
  SSBase,
  Wheels,
  Summary,
  Zerobarrier,
  Occupational,
  CorporateCulture
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin-top: 20px;
  perspective: 1000px;
}
</style>
