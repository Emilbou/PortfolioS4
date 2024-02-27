


    <script setup lang="ts">
 import SwiperHome from '../components/SwiperHome.vue';
import CardScroll from '../components/CardScroll.vue';
import FillText from '../components/FillText.vue';
import CountComponent from '../components/CountComponent.vue';
import PerspectiveCard from '../components/PerspectiveCard.vue';
import FirstView from '../components/FirstView.vue';
    </script>





 
<template>
<div class="scroll-smooth">
  
  <FirstView />
  <div  id="next"></div>
  <FillText class="h-screen" content="En quête de devenir un développeur créatif, je m'efforce de créer des sites web futuristes et innovants, combinant esthétique et fonctionnalité de manière harmonieuse."/>
  
  
  
      <div class="h-screenheight flex flex-col justify-between p-5 scroll-smooth" >
  <SwiperHome />
          <div class="flex flex-col ">
  
              <div class="w-full text-center">
                  <h1 class="text-[10vw]">EMILBOU</h1>
              </div>
              <span class="text-center font-bold text-2xl">[ Scroll Down ]</span>
          </div>
      </div>
</div>




    <!-- <div>
        <h1>Supabase</h1>
        <ul>
          <li v-for="projets in Projet" :key="projets.id">
            <RouterLink :to="{ name: 'edit', params: { id: projets.id } }">
              <div v-bind="projets" >
                <p>{{ projets.nomprojet }}</p>
                <p>{{ projets.id }}</p>
                </div>
            </RouterLink>
          </li>
        </ul>
      </div> -->

<CardScroll />

<CountComponent />

<div class="mb-[900px]"></div>

<PerspectiveCard></PerspectiveCard>
<div class="mb-[900px]"></div>

</template>

