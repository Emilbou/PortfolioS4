
<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { defineComponent, ref } from 'vue';


const showCopiedMessage = ref(false);

const copyEmail = () => {
  const email = 'emil.boucard@gmail.com';
  navigator.clipboard.writeText(email)
    .then(() => {
      showCopiedMessage.value = true;
      setTimeout(() => {
        showCopiedMessage.value = false;
      }, 2000);
    })
    .catch((err) => {
      console.error('Impossible de copier l\'adresse e-mail:', err);
    });
};
</script>
<template>
  <div class="flex w-full justify-center flex-col items-center overflow-x-hidden  h-[80svh]">
    <div class=" flex flex-col bg-black ">
      <div class="flex whitespace-nowrap">
        <div
          class="text-white w-full flex">
          <h1 class="text-marquee whitespace-nowrap">EMILIEN BOUCARD&nbsp;</h1>
          <h1 class="text-marquee whitespace-nowrap">EMILIEN BOUCARD&nbsp;</h1>
        </div>
        <div
          class="text-white w-full flex">
          <h1 class="text-marquee whitespace-nowrap">EMILIEN BOUCARD&nbsp;</h1>
          <h1 class="text-marquee whitespace-nowrap">EMILIEN BOUCARD&nbsp;</h1>
        </div>
      </div>
    </div>
<div class="flex flex-col w-full p-10">
  <span class="text-white mb-5">Copyright © Emilien Boucard</span>
  <div class="lg:flex-row flex flex-col">
    
    <div class="flex gap-16 w-auto lg:w-1/3 lg:justify-between">
      <nav>
      <ul class="text-white">
        <li><RouterLink class="underline font-light" to="/">Accueil</RouterLink></li>
        <li><RouterLink class="underline font-light" to="/projet">Projets</RouterLink></li>
        <li><RouterLink class="underline font-light" to="/">A propos</RouterLink></li>
      </ul>
      </nav>
    
      <nav>
      <ul class="text-white">
        <li><a class="underline font-light" href="https://www.instagram.com/emilien_bc.d/">Instagram</a></li>
        <li><a class="underline font-light" href="https://www.linkedin.com/in/emilienboucard/">Linkedin</a></li>
        <li><a class="underline font-light" href="https://github.com/Emilbou">GitHub</a></li>
      </ul>
      </nav>
    </div>
    
    <div class="w-full lg:px-48">
    <div class="w-full bg-white h-fit rounded-xl text-center text-xl py-2 mt-12 lg:mt-0 border-black border "  @click="copyEmail">
    emil.boucard@gmail.com
    </div>
     <div v-if="showCopiedMessage" class="mt-4 text-green-500">Adresse e-mail copiée !</div>
    
    </div>
    </div>
  </div>



  </div>
</template>

<style>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.text-marquee {
  white-space: nowrap;
  animation: marquee 5s linear infinite;
}
</style>