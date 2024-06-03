<template>
  <div class="container">
    <div class="navbar-trigger" @click="toggleNavbar">
      <img src="/iconoaccesibilidad.png" alt="Menu Icon">
    </div>
    
    <div v-if="isNavbarVisible" class="popup-navbar" ref="popupNavbar">
      <ul>
        <li><button @click="increaseTextSize"><img src="/increase.png" alt="Icon 1">Incremento de texto</button></li>
        <li><button @click="decreaseTextSize"><img src="/decrease.png" alt="Icon 2">Decremento de texto</button></li>
        <li><button @click="resetTextSize"><img src="/resetvalues.png" alt="Icon 3">Restablecer texto</button></li>
        <li><button @click="toggleHighContrast"><img src="/contraste.png" alt="Icon 4">Alto contraste</button></li>
        <li><button @click="handleButtonClick(5)"><img src="/contrastenegativo.png" alt="Icon 5">Contraste Negativo</button></li>
        <li><button @click="handleButtonClick(6)"><img src="/readablefont.png" alt="Icon 6">Fuente Legible</button></li>
        <li><button @click="handleButtonClick(7)"><img src="/navegarsonido.png" alt="Icon 7">Navegar en voz alta</button></li>
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
    document.documentElement.style.setProperty('--bg-color', 'var(--high-contrast-bg)');
    document.documentElement.style.setProperty('--text-color', 'var(--high-contrast-text)');
  } else {
    document.documentElement.style.setProperty('--bg-color', 'white');
    document.documentElement.style.setProperty('--text-color', 'black');
  }
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
:root {
  --bg-color: white;
  --text-color: black;
  --high-contrast-bg: black;
  --high-contrast-text: yellow;
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
  z-index: 1000; /* Ensure the icon is above other content */
}

.navbar-trigger img {
  width: 30px;
  height: 30px;
}

.popup-navbar {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 250px;
  background-color: greenyellow;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 999; /* Ensure the navbar is above other content */
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
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
