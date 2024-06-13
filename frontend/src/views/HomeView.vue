<template>
  <div class="general">
    <Header />

    <div class="hometext">
      <div class="text">
        <h1>{{ $t("message.subtitle") }}</h1>
        
        <div class="container1">
          <div class="hometext_1">
            <p>{{ $t("message.paragraph1") }}</p>
            <p>{{ $t("message.paragraph2") }}</p>
          </div>
          <img class="img" src="/public/1.png" alt="Skills" />
        </div>

        <div class="container2">
          <img class="img" src="/public/2.png" alt="Skills" />
          <div class="hometext_2">
            <p>{{ $t("message.paragraph3") }}</p>
            <p>{{ $t("message.paragraph4") }}</p>
          </div>
        </div>

        <div class="container3">
          <p>{{ $t("message.paragraph5") }}</p>
          <p>{{ $t("message.paragraph6") }}</p>
        </div>

        <button class="btn" @click="handleFile($t('message.button1'))">{{ $t('message.btnhomed') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hometext {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  background: linear-gradient(var(--ligthorange) 0%, var(--white) 100%);
}
.text {
  max-width: 65rem;
  margin: auto;
}
.container1,
.container2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}
.hometext_1,
.hometext_2 {
  display: flex;
  flex-direction: column;
  max-width: 50%;
}
img {
  max-width: 45%;
  height: auto;
}
</style>

<script setup>
import Header from '../components/Header.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const handleFile = (fileName) => {
  const fileExtension = fileName.split('.').pop().toLowerCase();
  const fileUrl = `/archives/Impact measurement report/${fileName}`;
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
