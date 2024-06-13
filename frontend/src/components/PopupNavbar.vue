<template>
  <div class="container">
    <div class="navbar-trigger" @click="toggleNavbar">
      <img src="/iconoaccesibilidad.png" alt="Menu Icon">
    </div>
    
    <div :class="['popup-navbar', { 'visible': isNavbarVisible }]" ref="popupNavbar">
      <ul>
        <li><h3>Herramientas de accesibilidad</h3></li>
        <li><button @click="increaseTextSize"><img src="/increase.png" alt="Icon 1">Incrementar texto</button></li>
        <li><button @click="decreaseTextSize"><img src="/decrease.png" alt="Icon 2">Disminuir texto</button></li>
        <li><button @click="resetTextSize"><img src="/resetvalues.png" alt="Icon 3">Restablecer texto</button></li>
        <li><button @click="toggleGreyScale"><img src="/greyscale.png" alt="Icon 8">Escalas de grises</button></li>
        <li><button @click="readPageAloud"><img src="/navegarsonido.png" alt="Icon 7">Navegar en voz alta</button></li>
        <li><button :class="{ 'selected-language': selectedLanguage.value === 'es' }" @click="changeLanguage('es')">Español</button></li>
        <li><button :class="{ 'selected-language': selectedLanguage.value === 'en' }" @click="changeLanguage('en')">Inglés</button></li>
        <li><button :class="{ 'selected-language': selectedLanguage.value === 'sl' }" @click="changeLanguage('sl')">Esloveno</button></li>
        <li><button :class="{ 'selected-language': selectedLanguage.value === 'fr' }" @click="changeLanguage('fr')">Francés</button></li>
        <li><button :class="{ 'selected-language': selectedLanguage.value === 'de' }" @click="changeLanguage('de')">Alemán</button></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isNavbarVisible = ref(false);
const popupNavbar = ref(null);
const selectedLanguage = ref('es'); // Valor predeterminado en español
const isGreyScale = ref(false);

const toggleGreyScale = () => {
  isGreyScale.value = !isGreyScale.value;
  if (isGreyScale.value) {
    document.documentElement.style.filter = 'grayscale(100%)';
  } else {
    document.documentElement.style.filter = '';
  }
};

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

const changeLanguage = (language) => {
  console.log(`Changing language to: ${language}`);
  selectedLanguage.value = language;
  console.log(`Current selected language: ${selectedLanguage.value}`);
};

const getLangCode = (language) => {
  switch (language) {
    case 'es':
      return 'es-ES';
    case 'en':
      return 'en-US';
    case 'sl':
      return 'sl-SI';
    case 'fr':
      return 'fr-FR';
    case 'de':
      return 'de-DE';
    default:
      return 'es-ES';
  }
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
  speechSynthesisUtterance.lang = getLangCode(selectedLanguage.value);
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

li {
  background-color: var(--ligthyellow);
}

.selected-language {
  border: 2px solid orange; /* Borde naranja */
  background-color: var(--orange);
}
</style>
