<template>
  <div class="general">
    <div class="main">
      <h1>Training</h1>
      <DestinationList />
      <div class="cards">
        <Kit/>
        <ToolCardsTrainSoftSkills/>
        <CertificatesTrainees/>
        <AttendanceSheet/>
        <SurveyTrainees/>
        <Techniques/>
        <SSTTrainers/>
        <CertificatesTrainers/>
        <SurveyTrainers/>
        <TTWBL/>
        <THWBL/>
      </div>
      
    </div>
  

</div>

</template>

<style scoped>

</style>

<script setup>
import DestinationList from '../components/DestinationList.vue';
import Kit from '../components/training/Kit.vue';
import ToolCardsTrainSoftSkills from '../components/training/ToolCardsTrainSoftSkills.vue';
import CertificatesTrainees from '../components/training/CertificatesTrainees.vue';
import AttendanceSheet from '../components/training/AttendanceSheet.vue';
import SurveyTrainees from '../components/training/SurveyTrainees.vue';
import Techniques from '../components/training/Techniques.vue';
import SSTTrainers from '../components/training/SSTTrainers.vue';
import CertificatesTrainers from '../components/training/CertificatesTrainers.vue';
import SurveyTrainers from '../components/training/SurveyTrainers.vue';
import TTWBL from '../components/training/TTWBL.vue';
import THWBL from '../components/training/THWBL.vue';
 </script>