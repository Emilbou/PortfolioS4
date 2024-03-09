


    <script setup lang="ts">
 import SwiperHome from '../components/SwiperHome.vue';
import CardScroll from '../components/CardScroll.vue';
import FillText from '../components/FillText.vue';
import CountComponent from '../components/CountComponent.vue';
import PerspectiveCard from '../components/PerspectiveCard.vue';
import FirstView from '../components/FirstView.vue';
import FooterPortfolio from '../components/FooterPortfolio.vue';
    </script>
<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const timelinefooter = gsap.timeline({
      scrollTrigger: {
        trigger: "#footergsap",
        start: "center+=200px bottom",
        toggleActions: "play reverse play reverse",
        markers: true,
      },
    });

    timelinefooter.to(".footergsapclass", {
      duration: "0.3",
      width: "95%",
      borderRadius: 50,
      y: "0",
      paddingBottom: "200px",
    });
  },
};
</script>




 
<template>
  <div id="top"></div>
  <div class="w-full flex items-center justify-center overflow-x-hidden">
    
    <div class="footergsapclass w-full h-full bg-white pb-80">
    
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
    
    </div>
  </div>
  <div id="footergsap"></div>
<FooterPortfolio></FooterPortfolio>
</template>

