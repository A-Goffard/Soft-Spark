<template>
  <div class="general">
    <div class="main">
      <h1>{{ $t('message.humanrpage') }}</h1>
      <DestinationList />
      <div class="cards">
        <HRM/>


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
import HRM from '../components/human/HRM.vue';
 </script>