<!-- src/views/HomeView.vue -->
<template>
  <div class="general">
    <div class="header">
      <div class="inner-header flex">
        <div class="header-content">
          <h1>Soft Skills</h1>
        </div>
      </div>
      <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <div class="main">
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
h1 {
  color: black;
}
.inner-header {
  position: relative;
}
.triangulitos {
  position: relative;
  top: -2.7rem;
  right: 1rem;
  width: 5rem;
  filter: drop-shadow(0px 0px 7px #FF9966);
}
.header {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>

<script setup>
</script>
