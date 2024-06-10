<template>
  <div class="general">
    <div class="main">
      <h1>Assessment</h1>
      <DestinationList />
      <div class="cards">
        <AProtocol/>
        <GerenicPlacementGrid/>
        <SpecificPlacementGrids/>
        <GenericAssessmentGrid/>
        <SpecificAssessmentGrids/>
        <SoftSkillsChecklistForTrainers/>
        <MethodsWBL/>

      </div>
      
    </div>
  

</div>

</template>

<style scoped>
.general {
  padding-top: 5rem;
}
</style>

<script setup>
import DestinationList from '../components/DestinationList.vue';
import AProtocol from '../components/assessment/AProtocol.vue';
import GerenicPlacementGrid from '../components/assessment/GerenicPlacementGrid.vue';
import SpecificPlacementGrids from '../components/assessment/SpecificPlacementGrids.vue';
import GenericAssessmentGrid from '../components/assessment/GenericAssessmentGrid.vue';
import SpecificAssessmentGrids from '../components/assessment/SpecificAssessmentGrids.vue';
import SoftSkillsChecklistForTrainers from '../components/assessment/SoftSkillsChecklistForTrainers.vue';
import MethodsWBL from '../components/assessment/MethodsWBL.vue';
 </script>