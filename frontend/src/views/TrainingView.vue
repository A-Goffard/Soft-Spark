<template>
  <div class="general">
    <div class="main">
      <h1>{{ $t('message.trainingpage') }}</h1>
      
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

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const destinations = ref([
  { title: 'message.trainingmaterial1title', componentName: 'Kit' },
  { title: 'message.trainingmaterial2title', componentName: 'ToolCardsTrainSoftSkills' },
  { title: 'message.trainingmaterial3title', componentName: 'CertificatesTrainees' },
  { title: 'message.trainingmaterial4title', componentName: 'AttendanceSheet' },
  { title: 'message.trainingmaterial5title', componentName: 'SurveyTrainees' },
  { title: 'message.trainingmaterial6title', componentName: 'Techniques' },
  { title: 'message.trainingmaterial7title', componentName: 'SSTTrainers' },
  { title: 'message.trainingmaterial8title', componentName: 'CertificatesTrainers' },
  { title: 'message.trainingmaterial9title', componentName: 'SurveyTrainers' },
  { title: 'message.trainingmaterial10title', componentName: 'TTWBL'},
  { title: 'message.trainingmaterial11title', componentName: 'THWBL'}
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


