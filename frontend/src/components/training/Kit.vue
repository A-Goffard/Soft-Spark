<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.trainingmaterial1title') }}</h2>
                <p>{{ $t('message.trainingmaterial1text') }}</p>
        
            </div>
            
            <div class="comp-downloads">

                <button class="btn" @click="handleFile($t('message.trainingmaterial1download1'))">{{ $t('message.btntrainingmaterial1download1') }}</button>
                <button class="btn" @click="handleFile($t('message.trainingmaterial1download2'))">{{ $t('message.btntrainingmaterial1download2') }}</button>
                <button class="btn" @click="handleFile($t('message.trainingmaterial1download3'))">{{ $t('message.btntrainingmaterial1download3') }}</button>
                <button class="btn" @click="handleFile($t('message.trainingmaterial1download4'))">{{ $t('message.btntrainingmaterial1download4') }}</button>
                <button class="btn" @click="handleFile($t('message.trainingmaterial1download5'))">{{ $t('message.btntrainingmaterial1download5') }}</button>

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
const fileUrl = `/archives/Training kit/${fileName}`;
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