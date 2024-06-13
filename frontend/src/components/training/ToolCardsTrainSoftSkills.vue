<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.trainingmaterial2title') }}</h2>
                <p>{{ $t('message.trainingmaterial2text') }}</p>
        
            </div>
            
            <div class="comp-downloads">
                <button class="btn" @click="handleFile($t('message.trainingmaterial2download1'))">{{ $t('message.btntrainingmaterial2download1') }}</button>
                <button class="btn" @click="handleFile($t('message.trainingmaterial2download2'))">{{ $t('message.btntrainingmaterial2download2') }}</button>
                <button class="btn" @click="handleFile($t('message.trainingmaterial2download3'))">{{ $t('message.btntrainingmaterial2download3') }}</button>

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
const fileUrl = `/archives/Toolcards to train soft skills/${fileName}`;
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