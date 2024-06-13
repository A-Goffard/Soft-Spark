<template>
  <div class="aboutg">
    <div class="header">

      <div class="about flex">
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

        <div class="logotrio">
          <a href="https://www.chanceb-gruppe.at/" target="_blank" class="sponsors soft1 soft2"
           @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/CHance B.png" alt="CHANGE B">
        </a>
        <a href="https://www.center-db.si/" target="_blank" class="sponsors soft1 soft2"
           @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/CUDV.png" alt="CUDV DRAGA">
        </a>
        <a href="https://www.discovia.fr/home" target="_blank" class="sponsors soft2"
           @mouseover="handleHover(true, 'soft2')" @mouseout="handleHover(false, 'soft2')">
          <img src="/public/sponsors/DISCOVIA_BLEU_SS.jpg" alt="DISCOVIA" >
        </a>

        </div>

        <div class="logotrio">
          <a href="http://www.leplope.be/index.php" target="_blank" class="sponsors soft1 soft2"
           @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/le-plope-1-3.gif" alt="LE PLOPE" >
        </a>
        <a href="http://www.workinn.be/" target="_blank" class="sponsors soft1 soft2"
           @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/logo_workinn.png" alt="WORK INN">
        </a>
        <a href="https://www.regiedesecrivains.com/" target="_blank" class="sponsors soft1 soft2"
           @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/logo régie.jpg" alt="REGIE DE ESCRIVANS">
        </a>

        </div>

        <div class="logotrio">
          <a href="https://www.grupopenascal.com/" target="_blank" class="sponsors soft1 soft2"
           @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/Penascal.png" alt="PENASCAL KOOPERATIVA">
        </a>
        <a href="http://www.solivers.eu/accueil" target="_blank" class="sponsors soft1 soft2"
           @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/solivers-2017.png" alt="SOLIVERS" >
        </a>
        <a href="https://www.e2oespana.org/" target="_blank" class="sponsors soft1"
           @mouseover="handleHover(true, 'soft1')" @mouseout="handleHover(false, 'soft1')">
          <img src="/public/sponsors/escuelaLogo.png" alt="E2o ESPAÑA" >
        </a>

        </div>
        
        <div class="socios">
          <img :class="{ grayscale: !hoverSoft1 }" src="/public/logos/softskill1.png" id="logoSoft1" alt="">
          <img :class="{ grayscale: !hoverSoft2 }" src="/public/logos/softskill2.png" id="logoSoft2" alt="">
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hoverSoft1 = ref(false)
const hoverSoft2 = ref(false)

const handleHover = (hovering, ...groups) => {
  groups.forEach(group => {
    if (group === 'soft1') hoverSoft1.value = hovering
    if (group === 'soft2') hoverSoft2.value = hovering
  })
}
</script>


<style scoped>
/* Estilos de tu componente */


.mainJ {
  max-width: 80%;
  background-color: white;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: auto;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.header-content {
  max-width: 50rem;
  margin: 5rem;
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
  margin-bottom: 1rem;
}

.aboutg{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2rem;
}
.imgSponsors {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.logotrio {
  display: flex;
}

.sponsors {
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin: 1rem;
}
img {
  width: 100%;

}

.socios {

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: solid 1px rgb(#ffc000);
  border-radius: 4rem;
  -webkit-box-shadow: 0px 0px 43px 3px rgba(255, 192, 0, 1);
  -moz-box-shadow: 0px 0px 43px 3px rgba(255, 192, 0, 1);
  box-shadow: 0px 0px 43px 3px rgba(255, 192, 0, 1);
  margin: 2rem;
}

#logoSoft1 {
  max-width: 15rem;
  margin: 0.5rem;
  width: 40%;
}

#logoSoft2 {
  max-width: 15rem;
  margin: 0.5rem;
  width: 40%;
}

.grayscale {
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

@media (max-width: 1200px) {
  .header-content {
    margin: 1rem;
  }
  .aboutg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;
  }
  .mainJ {
    padding-top: 0rem;
  }

}

@media (max-width: 780px) {
  p {
    font-size: 1.3rem;
  }

  .logotrio {
  display: flex;
  flex-direction: column;
}
}
</style>