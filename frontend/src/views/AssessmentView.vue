<template>
  <div class="general">
    <div class="main">
      <h1>{{ $t('message.assessmentpage') }}</h1>
      
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

import AProtocol from '../components/assessment/AProtocol.vue';
import GerenicPlacementGrid from '../components/assessment/GerenicPlacementGrid.vue';
import SpecificPlacementGrids from '../components/assessment/SpecificPlacementGrids.vue';
import GenericAssessmentGrid from '../components/assessment/GenericAssessmentGrid.vue';
import SpecificAssessmentGrids from '../components/assessment/SpecificAssessmentGrids.vue';
import SoftSkillsChecklistForTrainers from '../components/assessment/SoftSkillsChecklistForTrainers.vue';
import MethodsWBL from '../components/assessment/MethodsWBL.vue';

const destinations = ref([
  { title: 'AProtocol', description: 'Target 1 description', imageUrl: '/1.png', componentName: 'AProtocol' },
  { title: 'GerenicPlacementGrid', description: 'Target 1 description', imageUrl: '/1.png', componentName: 'GerenicPlacementGrid' },
  { title: 'SpecificPlacementGrids', description: 'Target 2 description', imageUrl: '/2.png', componentName: 'SpecificPlacementGrids' },
  { title: 'GenericAssessmentGrid', description: 'Target 3 description', imageUrl: '/3.png', componentName: 'GenericAssessmentGrid' },
  { title: 'SpecificAssessmentGrids', description: 'Target 4 description', imageUrl: '/4.png', componentName: 'SpecificAssessmentGrids' },
  { title: 'SoftSkillsChecklistForTrainers', description: 'Target 5 description', imageUrl: '/5.png', componentName: 'SoftSkillsChecklistForTrainers' },
  { title: 'MethodsWBL', description: 'Target 6 description', imageUrl: '/6.png', componentName: 'MethodsWBL' },
  
]);

const activeComponent = ref('');

const changeActiveComponent = (componentName) => {
  activeComponent.value = componentName;
};

const componentMap = {
  AProtocol,
  GerenicPlacementGrid,
  SpecificPlacementGrids,
  GenericAssessmentGrid,
  SpecificAssessmentGrids,
  SoftSkillsChecklistForTrainers,
  MethodsWBL,
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

