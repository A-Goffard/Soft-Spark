<template>
    <div>
    
    <div class="header">
      
      <!--Content before waves-->
    <div class="inner-header flex">
      <div class="header-content">
        <h1>Soft&nbsp;skills</h1>
      </div>
      <svg class="triangulitos" width="1013" height="1131" viewBox="0 0 1013 1131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M622.257 576.998C622.446 576.263 623.356 576.003 623.912 576.525L942.993 876.131C943.559 876.663 943.333 877.603 942.589 877.816L515.198 999.85C514.453 1000.06 513.755 999.386 513.947 998.637L622.257 576.998Z" fill="#FFFF00"/>
        <path d="M463.212 128.189C463.211 127.421 464.049 126.944 464.72 127.332L848.253 349.339C848.921 349.726 848.921 350.683 848.252 351.063L465.721 568.386C465.052 568.766 464.215 568.285 464.214 567.519L463.212 128.189Z" fill="#FF9966"/>
        <path d="M321.42 384.386C321.962 383.855 322.872 384.09 323.083 384.814L447.54 813.283C447.756 814.027 447.075 814.726 446.323 814.532L1.70789 700.02C0.955805 699.827 0.70656 698.888 1.26245 698.343L321.42 384.386Z" fill="#FFC000"/>
      </svg>

    </div>

    <div>
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

    </div>
  </div>

  </template>
  
<style scoped>
h1 {
  color: var(--black);
  font-size: 4rem;
  font-weight: 900;
}
.inner-header {
  position: relative;

}
.triangulitos {
  position: relative;
  top: -5rem;
  right: 3rem;
  width: 8rem;
  filter: drop-shadow(0px 0px 7px var(--salmon));
}

.header {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  text-align:center;
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
}
/*Shrinking for mobile*/
@media (max-width: 450px) {

  h1 {
    font-size: 3rem;
  }

  .triangulitos {
  position: relative;
  top: -5rem;
  right: 3rem;
  width: 6rem;
  filter: drop-shadow(0px 0px 7px var(--salmon));
}
}
</style>
  
  <script setup>

  </script>