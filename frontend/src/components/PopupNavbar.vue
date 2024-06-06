<template>
  <div class="container">
    <div class="navbar-trigger" @click="toggleNavbar">
      <img src="/iconoaccesibilidad.png" alt="Menu Icon">
    </div>
    
    <div :class="['popup-navbar', { 'visible': isNavbarVisible }]" ref="popupNavbar">
      <ul>
        <li><button @click="increaseTextSize"><img src="/increase.png" alt="Icon 1">{{ $t('text_increase') }}</button></li>
        <li><button @click="decreaseTextSize"><img src="/decrease.png" alt="Icon 2">{{ $t('text_decrease') }}</button></li>
        <li><button @click="resetTextSize"><img src="/resetvalues.png" alt="Icon 3">{{ $t('text_reset') }}</button></li>
        <li><button @click="toggleHighContrast"><img src="/contraste.png" alt="Icon 4">{{ $t('high_contrast') }}</button></li>
        <li><button @click="toggleNegativeContrast"><img src="/contrastenegativo.png" alt="Icon 5">{{ $t('negative_contrast') }}</button></li>
        <li><button @click="handleButtonClick(6)"><img src="/readablefont.png" alt="Icon 6">{{ $t('readable_font') }}</button></li>
        <li><button @click="readPageAloud"><img src="/navegarsonido.png" alt="Icon 7">{{ $t('read_aloud') }}</button></li>
        <li><button @click="toggleGreyScale"><img src="/greyscale.png" alt="Icon 8">{{ $t('grey_scale') }}</button></li>
      </ul>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

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

/* -----------------------INCREMENT, DECREMENT, RESET TEXT SIZE, AND TOGGLE HIGH CONTRAST------------------- */
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

/* --------------------------------HIGH CONTRAST TOGGLE FUNCTION------------------ */
const isHighContrast = ref(false);

const toggleHighContrast = () => {
  isHighContrast.value = !isHighContrast.value;
  if (isHighContrast.value) {
    document.body.classList.add('high-contrast');
  } else {
    document.body.classList.remove('high-contrast');
  }

  console.log(`High contrast mode ${isHighContrast.value ? 'enabled' : 'disabled'}`);
};

/* ------------------------------NEGATIVE CONTRAST TOGGLE FUNCTION------------------ */
const isNegativeContrast = ref(false);

const toggleNegativeContrast = () => {
  isNegativeContrast.value = !isNegativeContrast.value;
  if (isNegativeContrast.value) {
    document.body.classList.add('negative-contrast');
  } else {
    document.body.classList.remove('negative-contrast');
  }

  console.log(`Negative contrast mode ${isNegativeContrast.value ? 'enabled' : 'disabled'}`);
};

/* -----------------------------GREYSCALE TOGGLE FUNCTION--------------------------- */
const isGreyScale = ref(false);

const toggleGreyScale = () => {
  isGreyScale.value = !isGreyScale.value;
  if (isGreyScale.value) {
    document.body.classList.add('grey-scale');
    console.log("Greyscale mode enabled");
  } else {
    document.body.classList.remove('grey-scale');
    console.log("Greyscale mode disabled");
  }

  console.log(`Grey scale mode ${isGreyScale.value ? 'enabled' : 'disabled'}`);
};

/* --------------------------------TEXT-TO-SPEECH FUNCTION------------------ */
let speechSynthesisUtterance = null;
let chunkIndex = 0;
let chunks = [];

const readPageAloud = () => {
  const maxChunkLength = 160; // Maximum number of characters per chunk
  const text = document.body.innerText;
  chunks = text.match(new RegExp('.{1,' + maxChunkLength + '}', 'g'));
  chunkIndex = 0;

  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  speakChunk();
};

const speakChunk = () => {
  if (chunkIndex >= chunks.length) return;

  speechSynthesisUtterance = new SpeechSynthesisUtterance();
  speechSynthesisUtterance.lang = 'es-ES';
  speechSynthesisUtterance.text = chunks[chunkIndex];
  speechSynthesisUtterance.pitch = 1;
  speechSynthesisUtterance.rate = 1;

  speechSynthesisUtterance.onend = () => {
    chunkIndex++;
    speakChunk();
  };

  speechSynthesisUtterance.onerror = (event) => {
    console.error('Speech synthesis error:', event.error);
    chunkIndex++;
    speakChunk();
  };

  window.speechSynthesis.speak(speechSynthesisUtterance);
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

body.high-contrast {
  background-color: black;
  color: yellow;
}

body.negative-contrast {
  background-color: black;
  color: white;
}

body.negative-contrast * {
  background-color: inherit;
  color: inherit;
}

body.grey-scale {
  filter: grayscale(100%);
}
</style>


