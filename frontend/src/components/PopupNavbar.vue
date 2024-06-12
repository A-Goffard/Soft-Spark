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


/* --------------------------------HIGH CONTRAST/GREY SCALE TOGGLE FUNCTION------------------ */

const isHighContrast = ref(false);

const isGreyScale = ref(false);
const isNegativeContrast = inject('isNegativeContrast'); // Add this line
const toggleNegativeContrast = inject('toggleNegativeContrast'); // Add this line

// Readable font
const isReadableFont = inject('isReadableFont');
const toggleReadableFont = inject('toggleReadableFont');

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

/* ----------------GREYSCALE PART--------------- */

const toggleGreyScale = () => {
  isGreyScale.value = !isGreyScale.value;
  if (isGreyScale.value) {
    document.documentElement.style.filter = 'grayscale(100%)';
  } else {
    document.documentElement.style.filter = '';
  }
};

/* ------------------------------POPUP NAVBAR------------------------ */
const isNavbarVisible = ref(false);
const popupNavbar = ref(null);

const toggleNavbar = (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  isNavbarVisible.value = !isNavbarVisible.value;
};

const handleClickOutside = (event) => {
  if (popupNavbar.value && !popupNavbar.value.contains(event.target)) {
    isNavbarVisible.value = false;
  }
};

/* -----------------------INCREMENT, DECREMENT, RESET TEXT SIZE------------------ */
const handleButtonClick = (itemNumber) => {
  console.log(`Button ${itemNumber} clicked`);
  // Add your button click handling logic here
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

/* --------------------------------TEXT-TO-SPEECH FUNCTION------------------ */
/* let speechSynthesisUtterance = null;

const readPageAloud = () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  speechSynthesisUtterance = new SpeechSynthesisUtterance();
  speechSynthesisUtterance.lang = 'es-ES'; // Set the language to Spanish (Spain)
  speechSynthesisUtterance.text = document.body.innerText;
  speechSynthesisUtterance.pitch = 1;
  speechSynthesisUtterance.rate = 1;

  speechSynthesisUtterance.onend = () => {
    console.log('Speech synthesis finished.');
    readPageAloud();
  };

  speechSynthesisUtterance.onerror = (event) => {
    console.error('Speech synthesis error:', event.error);
  };

  window.speechSynthesis.speak(speechSynthesisUtterance);
};
 */
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
    speechSynthesisUtterance.lang = 'en-EN';
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
/* --------------------------CLICK OUTSIDE NAVBAR TO CLOSE IT------------------- */
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>

.container {
  position: relative;
}

.navbar-trigger {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000; /* Ensure the icon is above other content */
}

.navbar-trigger img {
  width: 30px;
  height: 30px;
}

.popup-navbar {
  position: fixed;
  top: 50%;
  right: -250px; /* Start off-screen */
  transform: translateY(-50%);
  width: 250px;
  background-color: greenyellow;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 999; /* Ensure the navbar is above other content */
  transition: right 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-navbar.visible {
  right: 0; /* Move on-screen */
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
  margin: 0px 0;
  width: 100%;
  text-align: center;
}

.popup-navbar button {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: greenyellow;
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
  background-color: red;
}
</style>

