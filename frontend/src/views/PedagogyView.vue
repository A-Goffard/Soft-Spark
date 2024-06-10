<template>
    <div class="general">
      <div class="main">
        <h1>{{ $t('message.pedagogypage') }}</h1>
        
        <DestinationList />
        <div class="cards">
          <Catalogue/>
          <SSPictograms/>
          <SSBase/>
          <Wheels/>
          <Summary/>
          <Zerobarrier/>
          <Occupational/>
          <CorporateCulture/>
        </div>
        
      </div>
    

  </div>

</template>
  
<style scoped>
.general {
  padding-top: 5rem;
}
.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>

<script setup>
  import Cards from '../components/Cards.vue';
  import DestinationList from '../components/DestinationList.vue';
  import Catalogue from '../components/pedagogy/Catalogue.vue';
  import SSPictograms from '../components/pedagogy/SSPictograms.vue';
  import SSBase from '../components/pedagogy/SSBase.vue';
  import Wheels from '../components/pedagogy/Wheels.vue';
  import Summary from '../components/pedagogy/Summary.vue';
  import Zerobarrier from '../components/pedagogy/Zerobarrier.vue';
  import Occupational from '../components/pedagogy/Occupational.vue';
  import CorporateCulture from '../components/pedagogy/CorporateCulture.vue';
</script>