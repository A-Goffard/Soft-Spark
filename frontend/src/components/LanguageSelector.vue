<template>
    <div class="language-selector">
      <select v-model="currentLocale" @change="changeLanguage">
        <option v-for="(language, code) in languages" :key="code" :value="code">
          {{ language }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { locale } = useI18n();
  
  const currentLocale = ref(locale.value);
  const languages = {
    en: 'EN',
    es: 'ES',
    de: 'DE',
    fr: 'FR',
    sl: 'SL',
  };
  
  const changeLanguage = () => {
    locale.value = currentLocale.value;
  };
  </script>
  
  <style scoped>
  .language-selector {
    display: flex;
    justify-content: left;
    padding: 0.5rem;
    background-color: transparent;
    position: absolute;
    top: 2rem;
    right: 1rem;
    z-index: 1100; 
  }
  select {
    padding: 0.5rem;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  </style>
  