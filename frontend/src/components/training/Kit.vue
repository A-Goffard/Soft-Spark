<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.trainingmaterial1title') }}</h2>
                <p>{{ $t('message.trainingmaterial1text') }}</p>
        
            </div>
            
            <div class="comp-downloads">
                <button class="btn">{{ $t('message.trainingmaterial1download1') }}</button>
                <button class="btn">{{ $t('message.trainingmaterial1download2') }}</button>
                <button class="btn">{{ $t('message.trainingmaterial1download3') }}</button>
                <button class="btn">{{ $t('message.trainingmaterial1download4') }}</button>
                <button class="btn">{{ $t('message.trainingmaterial1download5') }}</button>
            </div>
            
        </div>
    
    </div>
    </template>
    
    <style scoped>

    </style>
    
    <script setup>
    import { useI18n } from 'vue-i18n';
    
    const { t } = useI18n();
    
    const downloadFile = (fileName) => {
      const fileUrl = `/archives/Specific assessment grids/${fileName}`;
      window.location.href = fileUrl;
    };
    </script>