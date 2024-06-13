<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.assessment3title') }}</h2>
                <p>{{ $t('message.assessment3text') }}</p>
        
            </div>
            
            <div class="comp-downloads">

                <button class="btn" @click="handleFile($t('message.assessment3download1'))">{{ $t('message.btnassessment3download1') }}</button>
                <button class="btn" @click="handleFile($t('message.assessment3download2'))">{{ $t('message.btnassessment3download2') }}</button>
                <button class="btn" @click="handleFile($t('message.assessment3download3'))">{{ $t('message.btnassessment3download3') }}</button>
                <button class="btn" @click="handleFile($t('message.assessment3download4'))">{{ $t('message.btnassessment3download4') }}</button>
                <button class="btn" @click="handleFile($t('message.assessment3download5'))">{{ $t('message.btnassessment3download5') }}</button>
                <button class="btn" @click="handleFile($t('message.assessment3download6'))">{{ $t('message.btnassessment3download6') }}</button>
                <button class="btn" @click="handleFile($t('message.assessment3download7'))">{{ $t('message.btnassessment3download7') }}</button>

            </div>
            
        </div>
    
    </div>
</template>

<style scoped>
</style>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const handleFile = (fileName) => {
const fileExtension = fileName.split('.').pop().toLowerCase();
const fileUrl = `/archives/Specific placement grids/${fileName}`;
if (fileExtension === 'pdf') {
  // Abrir PDFs en una nueva pestaña
  window.open(fileUrl, '_blank');
} else {
  // Descargar otros tipos de archivos
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  link.click();
}
};
</script>