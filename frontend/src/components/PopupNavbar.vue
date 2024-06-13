<template>
  <div class="container">
    <div class="navbar-trigger" @click="toggleNavbar">
      <img src="/iconoaccesibilidad.png" alt="Menu Icon">
    </div>
    
    <div :class="['popup-navbar', { 'visible': isNavbarVisible }]" ref="popupNavbar">
      <ul>
        <li><button @click="increaseTextSize"><img src="/increase.png" alt="Icon 1">Incrementar texto</button></li>
        <li><button @click="decreaseTextSize"><img src="/decrease.png" alt="Icon 2">Disminuir texto</button></li>
        <li><button @click="resetTextSize"><img src="/resetvalues.png" alt="Icon 3">Restablecer texto</button></li>
<!--         <li><button @click="toggleHighContrast"><img src="/contraste.png" alt="Icon 4">Alto contraste</button></li>
        <li><button @click="toggleNegativeContrast"><img src="/contrastenegativo.png" alt="Icon 5">Contraste negativo</button></li>
        <li><button @click="toggleReadableFont"><img src="/readablefont.png" alt="Icon 6">Fuente legible</button></li>
 -->        <li><button @click="readPageAloud"><img src="/navegarsonido.png" alt="Icon 7">Navegar en voz alta</button></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isNavbarVisible = ref(false);
const popupNavbar = ref(null);

const toggleNavbar = (event) => {
  event.stopPropagation();
  isNavbarVisible.value = !isNavbarVisible.value;
};

const handleClickOutside = (event) => {
  if (popupNavbar.value && !popupNavbar.value.contains(event.target)) {
    isNavbarVisible.value = false;
  }
};

const increaseTextSize = () => {
  const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  document.documentElement.style.fontSize = `${currentSize * 1.1}px`;
};

const decreaseTextSize = () => {
  const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  document.documentElement.style.fontSize = `${currentSize * 0.9}px`;
};

const resetTextSize = () => {
  document.documentElement.style.fontSize = '';
};

const isHighContrast = ref(false);

const toggleHighContrast = () => {
  isHighContrast.value = !isHighContrast.value;
  document.documentElement.style.filter = isHighContrast.value ? 'contrast(1.5)' : 'contrast(1)';
};

const toggleNegativeContrast = () => {
  document.documentElement.style.filter = document.documentElement.style.filter === 'invert(1)' ? 'invert(0)' : 'invert(1)';
};

const toggleReadableFont = () => {
  document.body.style.fontFamily = document.body.style.fontFamily === 'Arial, sans-serif' ? 'inherit' : 'Arial, sans-serif';
};

let speechSynthesisUtterance = null;
let textChunks = [];
let currentChunkIndex = 0;

const splitTextIntoChunks = (text, chunkSize = 160) => {
  const regex = new RegExp(`.{1,${chunkSize}}`, 'g');
  return text.match(regex);
};

const readChunk = () => {
  if (currentChunkIndex >= textChunks.length) return;

  speechSynthesisUtterance = new SpeechSynthesisUtterance();
  speechSynthesisUtterance.lang = 'es-ES';
  speechSynthesisUtterance.text = textChunks[currentChunkIndex];
  speechSynthesisUtterance.pitch = 1;
  speechSynthesisUtterance.rate = 1;

  speechSynthesisUtterance.onend = () => {
    currentChunkIndex++;
    readChunk();
  };

  speechSynthesisUtterance.onerror = (event) => {
    console.error('Speech synthesis error:', event.error);
  };

  window.speechSynthesis.speak(speechSynthesisUtterance);
};

const readPageAloud = () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  const text = document.body.innerText;
  textChunks = splitTextIntoChunks(text);
  currentChunkIndex = 0;
  readChunk();
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>


<style scoped>
:root {
  --bg-color: white;
  --text-color: black;
  --high-contrast-bg: #000000;
  --high-contrast-text: #FFFF00;
  --negative-contrast-bg: #000000;
  --negative-contrast-text: #FFFFFF;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.container {
  position: relative;
}

.navbar-trigger {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000;
}

.navbar-trigger img {
  width: 30px;
  height: 30px;
}

.popup-navbar {
  position: fixed;
  top: 50%;
  right: -250px;
  transform: translateY(-50%);
  width: 250px;
  background-color: var(--white);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: right 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--orange);
}

.popup-navbar.visible {
  right: 0;
}

.popup-navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.popup-navbar li {
  margin: 0;
  width: 100%;
  text-align: center;
}

.popup-navbar button {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: var(--ligthyellow);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  outline: none;
}

.popup-navbar button img {
  margin-right: 10px;
  width: 20px;
  height: 20px;
}

.popup-navbar button:hover {
  background-color: var(--orange);
}
</style>
