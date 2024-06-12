<!-- src/views/HomeView.vue -->
<template>
  <div class="general">
    <Header />

    <div class="hometext">
      <div class="text">
        <div class="container1">
          <div class="hometext_1">
            <h1>{{ $t("message.subtitle") }}</h1>
            <p>{{ $t("message.paragraph1") }}</p>
            <p>{{ $t("message.paragraph2") }}</p>
          </div>
          <img class="img" src="/public/1.png" alt="Skills" />
        </div>

        <br><br><br><br>

        <div class="container2">
          <div class="hometext_2">
            <p>{{ $t("message.paragraph3") }}</p>
            <p>{{ $t("message.paragraph4") }}</p>
          </div>
          <img class="img" src="/public/2.png" alt="Skills" />
        </div>

        <br><br><br><br>

        <p>{{ $t("message.paragraph5") }}</p>
        <p>{{ $t("message.paragraph6") }}</p>

        <br><br><br><br>


        <button class="btn" @click="handleFile($t('message.button1'))">
          {{ $t("message.button1") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hometext {
  padding-top: 2rem;
  text-align: center;
  background: linear-gradient(var(--ligthorange) 0%, var(--white) 100%);
}
/* ------------container 1------------ */
.container1 {
  display: flex;
  
}

.container1 img {
  width: 50%;
  margin-left: 5%;
}

.hometext_1 {
  display: flex;
  flex-direction: column;

  height: 50%;
}

/* --------------container 2--------------- */

.container2 {
  display: flex;
  flex-direction: row-reverse;
}

.container2 img {
  width: 50%;
}

.text {
  max-width: 75rem;
  margin: auto;
}
</style>

<script setup>
import Header from "../components/Header.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const handleFile = (fileName) => {
  const fileExtension = fileName.split(".").pop().toLowerCase();
  const fileUrl = `/archives/Impact measurement report/${fileName}`;
  if (fileExtension === "pdf") {
    // Abrir PDFs en una nueva pestaña
    window.open(fileUrl, "_blank");
  } else {
    // Descargar otros tipos de archivos
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }
};
</script>