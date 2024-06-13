<template>
  <div class="container">
    <div class="navbar-trigger" @click="toggleNavbar">
      <img src="/accesibility.png" alt="Menu Icon">
    </div>
    
    <div :class="['popup-navbar', { 'visible': isNavbarVisible }]" ref="popupNavbar">
      <ul>
        <li><h3>Herramientas de accesibilidad</h3></li>
        <li><button @click="increaseTextSize"><img src="/increase.png" alt="Icon 1">Incremento de texto</button></li>
        <li><button @click="decreaseTextSize"><img src="/decrease.png" alt="Icon 2">Decremento de texto</button></li>
        <li><button @click="resetTextSize"><img src="/resetvalues.png" alt="Icon 3">Restablecer texto</button></li>
        <li><button @click="toggleHighContrast"><img src="/contraste.png" alt="Icon 4">Alto contraste</button></li>
        <li><button @click="toggleNegativeContrast"><img src="/contrastenegativo.png" alt="Icon 5">Contraste Negativo</button></li>
        <li><button @click="toggleReadableFont"><img src="/readablefont.png" alt="Icon 6">Fuente Legible</button></li>
        <li><button @click="readPageAloud"><img src="/navegarsonido.png" alt="Icon 7">Navegar en voz alta</button></li>
        <li><button @click="toggleGreyScale"><img src="/greyscale.png" alt="Icon 8">Escalas de grises</button></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onBeforeUnmount } from 'vue';

/* ---------------------------------- ACCESSIBILITY TOGGLE FUNCTIONS ---------------------------------- */

const isHighContrast = ref(false);
const isGreyScale = ref(false);

// Readable font
const isReadableFont = inject('isReadableFont', ref(false));
const toggleReadableFont = inject('toggleReadableFont', () => {
  isReadableFont.value = !isReadableFont.value;
  document.body.style.fontFamily = isReadableFont.value ? 'Arial, sans-serif' : 'inherit';
});

// High contrast
const toggleHighContrast = () => {
  isHighContrast.value = !isHighContrast.value;
  if (isHighContrast.value) {
    document.documentElement.style.setProperty('--bg-color', 'var(--high-contrast-bg)');
    document.documentElement.style.setProperty('--text-color', 'var(--high-contrast-text)');
  } else {
    document.documentElement.style.setProperty('--bg-color', 'white');
    document.documentElement.style.setProperty('--text-color', 'black');
  }
};

// Grey scale
const toggleGreyScale = () => {
  isGreyScale.value = !isGreyScale.value;
  document.documentElement.style.filter = isGreyScale.value ? 'grayscale(100%)' : '';
};

// Negative contrast
const toggleNegativeContrast = () => {
  document.documentElement.style.filter = document.documentElement.style.filter === 'invert(1)' ? '' : 'invert(1)';
};

// Increment, decrement, reset text size
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

// Navbar toggle
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

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

// Read page aloud
let speechSynthesisUtterance = null;
let chunkIndex = 0;
let textChunks = [];

const splitTextIntoChunks = (text, chunkSize = 120) => {
  const words = text.split(' ');
  const chunks = [];
  let chunk = '';

  words.forEach(word => {
    if (chunk.length + word.length + 1 <= chunkSize) {
      chunk += (chunk ? ' ' : '') + word;
    } else {
      chunks.push(chunk);
      chunk = word;
    }
  });

  if (chunk) {
    chunks.push(chunk);
  }

  return chunks;
};

const readNextChunk = () => {
  if (chunkIndex < textChunks.length) {
    speechSynthesisUtterance = new SpeechSynthesisUtterance();
    speechSynthesisUtterance.lang = 'es-ES';
    speechSynthesisUtterance.text = textChunks[chunkIndex];
    speechSynthesisUtterance.pitch = 1;
    speechSynthesisUtterance.rate = 1;

    speechSynthesisUtterance.onend = () => {
      chunkIndex++;
      readNextChunk();
    };

    speechSynthesisUtterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error);
    };

    window.speechSynthesis.speak(speechSynthesisUtterance);
  } else {
    console.log('Speech synthesis finished.');
  }
};

const readPageAloud = () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  const text = document.body.innerText;
  textChunks = splitTextIntoChunks(text);
  chunkIndex = 0;
  readNextChunk();
};
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
