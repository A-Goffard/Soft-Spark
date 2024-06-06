<template>
    <div class="general">
        <div class="header">
            <!--Content before waves-->
            <div class="inner-header flex">
                <div class="header-content">
                    <div class="carrusel">
                        <h1>CATALOGO</h1>
                        <h2>CATÁLOGO EUROPEO DE REFERENCIAS DE SOFT SKILLS</h2>
                        <p>El “catálogo europeo de referencias de soft skills” ofrece una visión general del enfoque de soft skills que ha seguido el proyecto: contiene la lista de soft skills definidas en el marco del proyecto, los niveles de adquisición y sus definiciones, así como una descripción del proceso de adquisición de las soft skills y de la contextualización y la evaluación vinculadas a él.</p>
                        <ul>descargar pdf</ul>
                    </div>
                </div>
            </div>
            <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        </div>

    </div>
</template>

<style scoped>
.carrusel{
    width: 30rem;
    height: 40rem;
    margin-top: 20rem;
    border: solid 1px black;
}
p{
    margin-top: 2rem;
    text-align: center;
    font-size: 1.4rem;
}
.waves{
    margin-top: 20rem;
}
</style>

<script setup>
import Catalogue from '../components/pedagogy/Catalogue.vue';
</script>