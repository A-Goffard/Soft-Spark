<template>
  <div :class="['container', id]" @click="$emit('click')">
    <div :class="['image', imageId]">
      <img :src="imageUrl" :alt="title" class="city-image" />
    </div>
    <div :class="['story', storyId]">
      <div class="info">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  id: String,
  imageId: String,
  storyId: String,
  title: String,
  description: String,
  imageUrl: String
});

const emits = defineEmits(['click']);
</script>

<style scoped>
.container {
  width: 100%;
  height: 20rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 20px 40px #555;
  overflow:hidden;
  transition: 0.6s;
}
.container:hover {
  cursor: pointer;
  z-index: 10;
  -webkit-transform:scale(0.1);transform:scale(1.4);
}

.image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.city-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  max-width: 100%;
  max-height: 100%;
}

.story {
  padding: 15px;
  height: 50%;
  background: linear-gradient(to bottom, #eba65b 0%, #d99267 40%);
}

.info h3 {
  text-align: center;
  color: #eee;
  letter-spacing: 2px;
}

.info p {
  font-size: 14px;
  color: #fff;
  padding: 0px 20px 20px 20px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 1px;
}

@media (max-width: 1200px) {
  .container {
    width: calc(50% - 20px); /* Dos columnas en pantallas medianas */
  }
}

@media (max-width: 768px) {
  .container {
    width: calc(100% - 20px); /* Una columna en pantallas pequeñas */
  }
}

</style>
