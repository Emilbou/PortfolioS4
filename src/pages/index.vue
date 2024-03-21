


    <script setup lang="ts">
 import SwiperHome from '../components/SwiperHome.vue';
import CardScroll from '../components/CardScroll.vue';
import CardCarrousel from '../components/CardCarrousel.vue';
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
        markers: false,
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
        
              <div class="h-screenheight flex flex-col  p-5 scroll-smooth mt-32" >
                  
                <h2 class="text-5xl mb-32 font-black"> Mes Projets </h2>
                <SwiperHome />
              </div>
              
              
            </div>
            <div class="px-5 flex flex-col">
              <div>
              
              <h2 class="text-5xl mb-12 font-black"> Qui suis-je ? </h2>
              
                <div >
                <div class="w-full md:w-1/2 xl:w-1/3 flex justify-center my-24  relative">
                  <div class="absolute w-44 aspect-square bg-red-600 rounded-full -top-12 -right-5 "></div>
                  <div class="absolute w-64 aspect-square bg-red-600 rounded-full -bottom-12 -left-5 "></div>
              
                  <img class="w-4/5 rounded-xl max-w-96 z-20" src="/img/about/MoiContentPhotoPeter.jpg" alt="">
                </div>
            </div>
            </div>




</div>

            
      <CardScroll />
    
    </div>
  </div>
  <div id="footergsap"></div>
<FooterPortfolio></FooterPortfolio>
</template>

<style>


</style>