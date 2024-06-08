<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.pedagogy7title') }}</h2>
                <p>{{ $t('message.pedagogy7text') }}</p>
        
            </div>
            
            <div class="comp-downloads">
            
                <button class="btn" @click="handleFile($t('message.pedagogy7download1'))">{{ $t('message.pedagogy7download1') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download1'))">{{ $t('message.pedagogy7download1') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download1'))">{{ $t('message.pedagogy7download1') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download1'))">{{ $t('message.pedagogy7download1') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download1'))">{{ $t('message.pedagogy7download1') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download1'))">{{ $t('message.pedagogy7download1') }}</button>
                <button class="btn" @click="handleFile($t('message.pedagogy7download1'))">{{ $t('message.pedagogy7download1') }}</button>

            
            </div>
            
        </div>
    
    </div>
</template>

<style scoped>
</style>

<script setup>
import { useI17n } from 'vue-i17n';

const { t } = useI17n();

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