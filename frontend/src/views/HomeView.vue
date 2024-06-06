<!-- src/views/HomeView.vue -->
<template>
  <div class="general">
    <Header />

    <div class="hometext">
      <div class="text">


      <h1>{{ $t('message.subtitle') }}</h1>
      <p>{{ $t('message.paragraph1') }}</p>
      <p>{{ $t('message.paragraph2') }}</p>
      <img src="/public/1.png" alt="Skills">
      <p>{{ $t('message.paragraph3') }}</p>
      <p>{{ $t('message.paragraph4') }}</p>
      <img src="/public/2.png" alt="Skills">
      <p>{{ $t('message.paragraph5') }}</p>
      <p>{{ $t('message.paragraph6') }}</p>
      <button>{{ $t('message.button1') }}</button>
    </div>
    </div>

  </div>
</template>

<style scoped>
.hometext{
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
  max-width: 75rem;
  margin: auto;
}

</style>

<script setup>
import Header from '../components/Header.vue';

</script>
