<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.trainingmaterial3title') }}</h2>
                <p>{{ $t('message.trainingmaterial3text') }}</p>
        
            </div>
            
            <div class="comp-downloads">
                <button class="btn">{{ $t('message.trainingmaterial3download1') }}</button>
                <button class="btn">{{ $t('message.trainingmaterial3download2') }}</button>
                <button class="btn">{{ $t('message.trainingmaterial3download3') }}</button>
                <button class="btn">{{ $t('message.trainingmaterial3download4') }}</button>

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