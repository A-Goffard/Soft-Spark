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

import HRM from '../components/human/HRM.vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const destinations = ref([
  { title: 'message.humanresources1title', componentName: 'HRM' },

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

