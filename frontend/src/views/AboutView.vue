<template>
  <div class="general aboutg">
    <div class="header">
      <!--Content before waves-->
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
      <div class="socios">
        <img :class="{ grayscale: !hoverSoft1 }" src="/public/logos/softskill1.png" id="logoSoft1" alt="">
        <img :class="{ grayscale: !hoverSoft2 }" src="/public/logos/softskill2.png" id="logoSoft2" alt="">
      </div>
      <div class="imgSponsors">
        <a href="https://www.chanceb-gruppe.at/" target="_blank" class="sponsors soft1 soft2"
          @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/CHance B.png" alt="CHANGE B" class="sponsors">
        </a>
        <a href="https://www.center-db.si/" target="_blank" class="sponsors soft1 soft2"
          @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/CUDV.png" alt="CUDV DRAGA" class="sponsors">
        </a>
        <a href="https://www.discovia.fr/home" target="_blank" class="sponsors soft2"
          @mouseover="handleHover(true, 'soft2')" @mouseout="handleHover(false, 'soft2')">
          <img src="/public/sponsors/DISCOVIA_BLEU_SS.jpg" alt="DISCOVIA" class="sponsors">
        </a>
        <a href="http://www.leplope.be/index.php" target="_blank" class="sponsors soft1 soft2"
          @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/le-plope-1-3.gif" alt="LE PLOPE" class="sponsors">
        </a>
        <a href="http://www.workinn.be/" target="_blank" class="sponsors soft1 soft2"
          @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/logo_workinn.png" alt="WORK INN" class="sponsors" id="workinn">
        </a>
        <a href="https://www.regiedesecrivains.com/" target="_blank" class="sponsors soft1 soft2"
          @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/logo régie.jpg" alt="REGIE DE ESCRIVANS" class="sponsors">
        </a>
        <a href="https://www.grupopenascal.com/" target="_blank" class="sponsors soft1 soft2"
          @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/Penascal.png" alt="PENASCAL KOOPERATIVA" class="sponsors">
        </a>
        <a href="http://www.solivers.eu/accueil" target="_blank" class="sponsors soft1 soft2"
          @mouseover="handleHover(true, 'soft1', 'soft2')" @mouseout="handleHover(false, 'soft1', 'soft2')">
          <img src="/public/sponsors/solivers-2017.png" alt="SOLIVERS" class="solivers">
        </a>
        <a href="https://www.e2oespana.org/" target="_blank" class="sponsors soft1"
          @mouseover="handleHover(true, 'soft1')" @mouseout="handleHover(false, 'soft1')">
          <img src="/public/sponsors/escuelaLogo.png" alt="E2o ESPAÑA" class="sponsors" id="escuela">
        </a>

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
*{
  margin: 0;
  padding: 0;
}
.general {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
}
h1 {
  color: black;
  text-align: center;
  margin-bottom: 1rem;
}
p{
  margin-top: 0.5rem ;
  text-align: center;
  font-size: 1.5rem;
}
.header {
  height: 50rem;
  width: 50rem;
  padding-top: 12rem;
  margin-left: 7rem ;
}
.mainJ {
  width: 60rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 7rem;
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
  height: 28rem;
}
.textAbout {
  width: 100%;
  margin-bottom: 9rem;
  text-align: center;
  margin-bottom: 1rem;
}
.imgSponsors {
  margin: auto;
  width: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-right: 15rem;
}
#escuela{
  width: 8rem;
}
#workinn{
  width: 9rem;
}
.sponsors {
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 12rem;
}
.solivers {
  background-color: rgb(255, 255, 255);
  height: 3.5rem;
  width: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.socios {

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: solid 1px rgb(#ffc000);
  width: 35rem;
  border-radius: 2rem;
  -webkit-box-shadow: 0px 0px 43px 3px rgba(255, 192, 0, 1);
  -moz-box-shadow: 0px 0px 43px 3px rgba(255, 192, 0, 1);
  box-shadow: 0px 0px 43px 3px rgba(255, 192, 0, 1);
  margin: 2rem;
}

#logoSoft1 {
  width: 40%; 
}

#logoSoft2 {
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
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
@media (max-width: 1425px){
  .imgSponsors {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .general{
    grid-template-columns: repeat(1, 1fr);
    display: block;
  }
  .header{
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 3rem;
    height: 33rem;
    margin-bottom: 1rem;
  }
  .mainJ {
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem;
  }
}
@media (max-width: 1150px){
  #logoSoft1 {
    width: 20rem;
    height: 12rem;
  }
  #logoSoft2 {
    width: 20rem;
    height: 12rem;
  }
  .mainJ {
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem;
  }
}
@media (max-width: 1090px){
  #logoSoft1 {
    width: 19rem;
    height: 11rem;
  }
  #logoSoft2 {
    width: 19rem;
    height: 11rem;
  }
}
@media (max-width: 1040px){
  #logoSoft1 {
    width: 18rem;
    height: 10rem;
  }
  #logoSoft2 {
    width: 17rem;
    height: 10rem;
  }
}
@media (max-width: 1000px){
  #logoSoft1 {
    width: 17rem;
    height: 10rem;
  }
  #logoSoft2 {
    width: 18rem;
    height: 10rem;
  }
  .mainJ {
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem
  }
}
@media (max-width: 750px) {
  p {
    font-size: 1.3rem;
    margin: 0rem;
    text-align: center;
  }
  .header{
    height: 29rem;
    text-align: center;
    justify-content: center;
    width: 40rem;
  }
  .mainJ {
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem;
  }
  h1{
    margin: auto;
  }
  .general{
    display: block;
  }
  .imgSponsors{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
  }
  .sponsors{
    width: 8rem;
  }
  #escuela{
  width: 5rem;
  }
  #workinn{
  width: 6rem;
  }
  .solivers{
    width:9rem;
    height: 2.5rem;
  }
  #logoSoft1{
    width: 13rem;
    height: 7rem;
  }
  #logoSoft2{
    width: 13rem;
    height: 7rem;
  }
  .socios{
    width: 32rem;
    height: 8rem;
    border-radius: 3rem;
  }
}
@media (max-width: 520px) {
  p {
    font-size: 1.3rem;
    margin: 0rem;
    text-align: center;
  }
  .header{
    height: 33rem;
    text-align: center;
    justify-content: center;
    width: 29rem;

  }
  h1{
    margin: 0;
  }
  .general{
    display: block;
  }
  .imgSponsors{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
  }
  .sponsors{
    width: 7rem;
  }
  #escuela{
  width: 4rem;
  }
  #workinn{
  width: 6rem;
  }
  .solivers{
    width: 8rem;
    height: 2.5rem;
  }
  #logoSoft1{
    width: 13rem;
    height: 7rem;
  }
  #logoSoft2{
    width: 13rem;
    height: 7rem;
  }
  .socios{
    width: 32rem;
    height: 8rem;
    border-radius: 3rem;
  }
}

</style>