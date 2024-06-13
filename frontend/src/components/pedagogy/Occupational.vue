<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.pedagogy7title') }}</h2>
                <p>{{ $t('message.pedagogy7text') }}</p>
        
            </div>
            
            <div class="comp-downloads">
            
                <button class="btn" @click="handleFile($t('message.pedagogy7download1'))">{{ $t('message.btnpedagogy7download1') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download2'))">{{ $t('message.btnpedagogy7download2') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download3'))">{{ $t('message.btnpedagogy7download3') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download4'))">{{ $t('message.btnpedagogy7download4') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download5'))">{{ $t('message.btnpedagogy7download5') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download6'))">{{ $t('message.btnpedagogy7download6') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download7'))">{{ $t('message.btnpedagogy7download7') }}</button>

            
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
const fileUrl = `/archives/Occupational standards/${fileName}`;
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