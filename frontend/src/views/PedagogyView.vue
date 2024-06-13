<template>
  <div class="general">
    <div class="main">
      <h1>{{ $t('message.pedagogypage') }}</h1>
        
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

import Catalogue from '../components/pedagogy/Catalogue.vue';
import SSPictograms from '../components/pedagogy/SSPictograms.vue';
import SSBase from '../components/pedagogy/SSBase.vue';
import Wheels from '../components/pedagogy/Wheels.vue';
import Summary from '../components/pedagogy/Summary.vue';
import Zerobarrier from '../components/pedagogy/Zerobarrier.vue';
import Occupational from '../components/pedagogy/Occupational.vue';
import CorporateCulture from '../components/pedagogy/CorporateCulture.vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const destinations = ref([
  { title: 'message.pedagogy1title', componentName: 'Catalogue' },
  { title: 'message.pedagogy2title', componentName: 'SSPictograms' },
  { title: 'message.pedagogy3title', componentName: 'SSBase' },
  { title: 'message.pedagogy4title', componentName: 'Wheels' },
  { title: 'message.pedagogy5title', componentName: 'Summary' },
  { title: 'message.pedagogy6title', componentName: 'Zerobarrier' },
  { title: 'message.pedagogy7title', componentName: 'Occupational' },
  { title: 'message.pedagogy8title', componentName: 'CorporateCulture' },
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
