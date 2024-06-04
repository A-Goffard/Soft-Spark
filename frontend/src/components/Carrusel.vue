<template>
  <div class="carousel">
    <button @click="prev" class="nav-button left">‹</button>
    <div class="carousel-container">
      <div
        v-for="(item, index) in filteredItems"
        :key="index"
        :class="['carousel-item', { active: index === currentIndex }]"
        :style="getStyle(index)"
      >
        <Cards 
          :title="item.title" 
          :content="item.content" 
          :downloadUrl="item.downloadUrl" 
          :version="item.version" 
        />
      </div>
    </div>
    <button @click="next" class="nav-button right">›</button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Cards from './Cards.vue';

const currentIndex = ref(0);
const items = ref([]);

const { locale } = useI18n();

onMounted(async () => {
  let cardTexts;
  switch (locale.value) {
    case 'es':
      cardTexts = await import('../i18n/cardsTexts_es.js');
      break;
    case 'fr':
      cardTexts = await import('../i18n/cardsTexts_fr.js');
      break;
    case 'de':
      cardTexts = await import('../i18n/cardsTexts_de.js');
      break;
    case 'sl':
      cardTexts = await import('../i18n/cardsTexts_sl.js');
      break;
    case 'eu':
      cardTexts = await import('../i18n/cardsTexts_eu.js');
      break;
    // Más casos para otros idiomas
    default:
      cardTexts = await import('../i18n/cardsTexts_en.js');
  }
  items.value = cardTexts.default;
});

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length;
};

const getStyle = (index) => {
  const totalItems = items.value.length;
  const position = (index - currentIndex.value + totalItems) % totalItems;
  const angle = position * 360 / totalItems;

  return {
    transform: `rotateY(${angle}deg) translateZ(300px)`,
  };
};
</script>


