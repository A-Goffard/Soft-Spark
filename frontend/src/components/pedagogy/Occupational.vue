<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.pedagogy7title') }}</h2>
                <p>{{ $t('message.pedagogy7text') }}</p>
        
            </div>
            
            <div class="comp-downloads">
                <button class="btn">{{ $t('message.pedagogy7download1') }}</button>
                <button class="btn">{{ $t('message.pedagogy7download2') }}</button>
                <button class="btn">{{ $t('message.pedagogy7download3') }}</button>
                <button class="btn">{{ $t('message.pedagogy7download4') }}</button>
                <button class="btn">{{ $t('message.pedagogy7download5') }}</button>
                <button class="btn">{{ $t('message.pedagogy7download6') }}</button>
                <button class="btn">{{ $t('message.pedagogy7download7') }}</button>
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