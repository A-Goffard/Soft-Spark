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
          :title="$t(destination.title)"
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

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const destinations = ref([
  { title: 'message.assessment1title', componentName: 'AProtocol' },
  { title: 'message.assessment2title', componentName: 'GerenicPlacementGrid' },
  { title: 'message.assessment3title', componentName: 'SpecificPlacementGrids' },
  { title: 'message.assessment4title', componentName: 'GenericAssessmentGrid' },
  { title: 'message.assessment5title', componentName: 'SpecificAssessmentGrids' },
  { title: 'message.assessment6title', componentName: 'SoftSkillsChecklistForTrainers' },
  { title: 'message.assessment7title', componentName: 'MethodsWBL' },
  
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
.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.wrapper {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 65rem;
}

@media (max-width: 1200px) {
  .general {
  padding-top: 0rem;
}
}
</style>
