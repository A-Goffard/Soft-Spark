<template>
  <div class="general">
    
    <div class="header">
      <!--Content before waves-->
    <div class="inner-header flex">
      <div class="header-content">
        <h1>{{ $t('message.subtitle2') }}</h1>
        <p>{{ $t('message.partners') }}</p>
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

      <div class="mainJ">
        <div class="imgSponsors">
        <a href="https://www.chanceb-gruppe.at/" target="_black" class="sponsors"><img src="/public/sponsors/CHance B.png" alt="" class="sponsors"></a>
        <a href="https://www.center-db.si/" target="_black" class="sponsors"><img src="/public/sponsors/CUDV.png" alt="" class="sponsors"></a>
        <a href="https://www.discovia.fr/home" target="_black" class="sponsors"><img src="/public/sponsors/DISCOVIA_BLEU_SS.jpg" alt="" class="sponsors" title="hola"></a>
        <a href="http://www.leplope.be/index.php" target="_black" class="sponsors"><img src="/public/sponsors/le-plope-1-3.gif" alt="" class="sponsors"></a>
        <a href="https://www.regiedesecrivains.com/" target="_black" class="sponsors"><img src="/public/sponsors/logo régie.jpg" alt="" class="sponsors"></a>
        <a href="http://www.workinn.be/" target="_black" class="sponsors"><img src="/public/sponsors/logo_workinn.png" alt="" class="sponsors"></a>
        <a href="https://www.grupopenascal.com/" target="_black" class="sponsors"><img src="/public/sponsors/Penascal.png" alt="" class="sponsors"></a>
        <a href="http://www.solivers.eu/accueil" target="_black" class="sponsors"><img src="/public/sponsors/solivers-2017.png" alt="" class="solivers"></a>
      </div>
      </div>
    </div>
  </div>

  </template>
  
<style scoped>
h1 {
  color: black;
  text-align: center;
  margin: 1rem;
}
.mainJ {
  width: 100vw;
  background-color: white;
  padding-bottom: 2rem;
}
.header-content {
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.imgSponsors{
  margin: auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;
}
.sponsors{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto; 
}
.sponsorsGray{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto; 
}
.solivers{
  background-color: rgb(255, 255, 255);
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto; 
}

.sponsors img {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.sponsors:hover img {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}

</style>
  
  <script setup>

  </script>