<template>
  <div class="general">
    <div class="main">
      <h1>Training</h1>
      
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

import Kit from '../components/training/Kit.vue';
import ToolCardsTrainSoftSkills from '../components/training/ToolCardsTrainSoftSkills.vue';
import CertificatesTrainees from '../components/training/CertificatesTrainees.vue';
import AttendanceSheet from '../components/training/AttendanceSheet.vue';
import SurveyTrainees from '../components/training/SurveyTrainees.vue';
import Techniques from '../components/training/Techniques.vue';
import SSTTrainers from '../components/training/SSTTrainers.vue';
import CertificatesTrainers from '../components/training/CertificatesTrainers.vue';
import SurveyTrainers from '../components/training/SurveyTrainers.vue';
import TTWBL from '../components/training/TTWBL.vue';
import THWBL from '../components/training/THWBL.vue';

const destinations = ref([
{ title: 'Kit', description: 'Target 1 description', imageUrl: '/1.png', componentName: 'Kit' },
  { title: 'ToolCardsTrainSoftSkills', description: 'Target 1 description', imageUrl: '/1.png', componentName: 'ToolCardsTrainSoftSkills' },
  { title: 'CertificatesTrainees', description: 'Target 2 description', imageUrl: '/2.png', componentName: 'CertificatesTrainees' },
  { title: 'AttendanceSheet', description: 'Target 3 description', imageUrl: '/3.png', componentName: 'AttendanceSheet' },
  { title: 'SurveyTrainees', description: 'Target 4 description', imageUrl: '/4.png', componentName: 'SurveyTrainees' },
  { title: 'Techniques', description: 'Target 5 description', imageUrl: '/5.png', componentName: 'Techniques' },
  { title: 'SSTTrainers', description: 'Target 6 description', imageUrl: '/6.png', componentName: 'SSTTrainers' },
  { title: 'CertificatesTrainers', description: 'Target 7 description', imageUrl: '/7.png', componentName: 'CertificatesTrainers' },
  { title: 'SurveyTrainers', description: 'Target 8 description', imageUrl: '/8.png', componentName: 'SurveyTrainers' },
  { title: 'TTWBL', description: 'Target 8 description', imageUrl: '/8.png', componentName: 'TTWBL'},
  { title: 'THWBL', description: 'Target 8 description', imageUrl: '/8.png', componentName: 'THWBL'}
]);

const activeComponent = ref('');

const changeActiveComponent = (componentName) => {
  activeComponent.value = componentName;
};

const componentMap = {
  Kit,
  ToolCardsTrainSoftSkills,
  CertificatesTrainees,
  AttendanceSheet,
  SurveyTrainees,
  Techniques,
  SSTTrainers,
  CertificatesTrainers,
  SurveyTrainers,
  TTWBL,
  THWBL
};

const getComponent = (name) => {
  return componentMap[name] || null;
};
</script>

