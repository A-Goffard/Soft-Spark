<template>
  <div class="general">
    <!-- Contenido del Footer -->
    <p>&#169; Powered by <a href="#">Voltus V</a> | Peñascal F5</p>
  <ul>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms of Use</a></li>
    <li><a href="#">Legal</a></li>
  </ul>
  </div>
</template>

<script setup>

</script>

<style scoped>
div {
  background-color: #FF7CE2;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
a{
  color: black;
  font-weight: 600;
}
.general {
  display: flex;
  flex-direction: column;
}
ul {
  text-decoration: none;
  list-style:none;
  display: flex;
  gap: 2rem;
}

</style>
