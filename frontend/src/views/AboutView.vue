<template>
  <div class="general">
    <div class="header">
      <!--Content before waves-->
      <div class="inner-header flex">
        <div class="header-content">
          <h1>{{ $t('message.subtitle2') }}</h1>
          <div class="textAbout">
            <p>{{ $t('message.partners') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mainJ">
      <div class="imgSponsors">
        <a href="https://www.chanceb-gruppe.at/" target="_blank" class="sponsors">
          <img src="/public/sponsors/CHance B.png" alt="" class="sponsors">
        </a>
        <a href="https://www.center-db.si/" target="_blank" class="sponsors">
          <img src="/public/sponsors/CUDV.png" alt="" class="sponsors">
        </a>
        <a href="https://www.discovia.fr/home" target="_blank" class="sponsors">
          <img src="/public/sponsors/DISCOVIA_BLEU_SS.jpg" alt="" class="sponsors">
        </a>
        <a href="http://www.leplope.be/index.php" target="_blank" class="sponsors">
          <img src="/public/sponsors/le-plope-1-3.gif" alt="" class="sponsors">
        </a>
        <a href="https://www.regiedesecrivains.com/" target="_blank" class="sponsors">
          <img src="/public/sponsors/logo régie.jpg" alt="" class="sponsors">
        </a>
        <a href="http://www.workinn.be/" target="_blank" class="sponsors">
          <img src="/public/sponsors/logo_workinn.png" alt="" class="sponsors">
        </a>
        <a href="https://www.grupopenascal.com/" target="_blank" class="sponsors">
          <img src="/public/sponsors/Penascal.png" alt="" class="sponsors">
        </a>
        <a href="http://www.solivers.eu/accueil" target="_blank" class="sponsors">
          <img src="/public/sponsors/solivers-2017.png" alt="" class="solivers">
        </a>
      </div>
      <div class="socios">
        <img src="/public/logos/softskill1.png" id="logoSoft1" alt="">
        <img src="/public/logos/softskill2.png" id="logoSoft2" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
// No necesitas importar ni registrar la directiva aquí si ya lo hiciste en el archivo principal
</script>

<style scoped>
/* Estilos de tu componente */
h1 {
  color: black;
  text-align: center;
  margin: 4rem;
}

.mainJ {
  max-width: 80%;
  background-color: white;
  padding-bottom: 2rem;
  margin: auto;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.btn {
  margin: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.header-content {
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.textAbout {
  width: 90%;
  margin: auto;
  text-align: center;
}

.imgSponsors {
  margin: auto;
  width: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding: 2rem;
}

.main {
  max-width: 75%;
}

.sponsors {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.solivers {
  background-color: rgb(255, 255, 255);
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.socios {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: solid 1px rgb(#ffc000);
  width: 60%;
  border-radius: 4rem;
  -webkit-box-shadow: 0px 0px 43px 3px rgba(255, 192, 0, 1);
  -moz-box-shadow: 0px 0px 43px 3px rgba(255, 192, 0, 1);
  box-shadow: 0px 0px 43px 3px rgba(255, 192, 0, 1);
  margin-top: 2rem;
}

#logoSoft1 {
  width: 21rem;
  height: 13rem;
  filter: grayscale(1);
}

#logoSoft2 {
  width: 21rem;
  height: 13rem;
  filter: grayscale(1);

}

.sponsors img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.sponsors:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

@media (max-width: 750px) {
  p {
    font-size: 1.3rem;
  }
}
</style>
