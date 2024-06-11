<template>
    <div>
      <div class="comp-card">
        <div class="comp-text">
          <h2>{{ $t('message.assessment5title') }}</h2>
          <p>{{ $t('message.assessment5text') }}</p>
        </div>
  
        <div class="comp-downloads">

          <button class="btn" @click="handleFile($t('message.assessment5download1'))">{{ $t('message.btnassessment5download1') }}</button>
          <button class="btn" @click="handleFile($t('message.assessment5download2'))">{{ $t('message.btnassessment5download2') }}</button>
          <button class="btn" @click="handleFile($t('message.assessment5download3'))">{{ $t('message.btnassessment5download3') }}</button>
          <button class="btn" @click="handleFile($t('message.assessment5download4'))">{{ $t('message.btnassessment5download4') }}</button>
          <button class="btn" @click="handleFile($t('message.assessment5download5'))">{{ $t('message.btnassessment5download5') }}</button>
          <button class="btn" @click="handleFile($t('message.assessment5download6'))">{{ $t('message.btnassessment5download6') }}</button>
          <button class="btn" @click="handleFile($t('message.assessment5download7'))">{{ $t('message.btnassessment5download7') }}</button>

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
const fileUrl = `/archives/Specific assessment grids/${fileName}`;
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