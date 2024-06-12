<template>
  <div class="wrap">
    <div class="olas">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="var(--yellowtransp)" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="var(--salmontransp)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="var(--orangetransp)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="var(--ligthorange)" />
      </g>
      </svg>
    </div>
    <div>
    </div>
    <div class="general">
      <p>&#169; Powered by <a href="#">Voltus V</a> | Peñascal F5</p>
      <ul>
        <li><a href="#">{{ $t('message.footerpp') }}</a></li>
        <li><a href="#">{{ $t('message.footertu') }}</a></li>
        <li><a href="#">{{ $t('message.footerl') }}</a></li>
      </ul>
      <div>
        <img :src="footerLogo()" alt="Footer Logo" class="footer-logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const footerLogo = () => t('message.footerLogo'); // Función que devuelve la ruta según el idioma

</script>


<style scoped>
div {

  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
a{
  color: black;
  font-weight: 600;
}
.general {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--ligthorange);
  padding-bottom: 2rem;
}
ul {
  text-decoration: none;
  list-style:none;
  display: flex;
  gap: 2rem;
}
.wrap{
  display: flex;
  flex-direction: column;
}
.footer-logo {
  height: 3rem;
  margin: 1rem;
}
.olas{
  width: 100%;
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  p {
    font-size: medium;
  }
}
@media (max-width: 450px) {

  ul {
    display: flex;
    flex-direction: column;
  }
}
</style>
