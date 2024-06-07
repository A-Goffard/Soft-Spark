<template>
<div>
    <div class="card">
        <div class="text">
            <h2>{{ $t('message.subtitle') }}</h2>
            <p>{{ $t('message.subtitle') }}</p>
    
        </div>
        
        <div class="downloads">
            <button class="btn">{{ $t('message.subtitle') }}</button>
            <button class="btn">{{ $t('message.subtitle') }}</button>

        </div>
        
    </div>

</div>
</template>

<style scoped>
.card {
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.5rem;

  }
.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.downloads {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>

<script setup>
</script>