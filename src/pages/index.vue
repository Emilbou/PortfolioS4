


    <script setup lang="ts">
    import { supabase } from '../supabase'
    import CardCarrousel from '../components/CardCarrousel.vue';
    import { register } from 'swiper/element/bundle';
    import { gsap } from "gsap/dist/gsap";

    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


    register();
    const { data: Projet, error } = await supabase
        .from('Projet')
        .select('*')
    console.log(Projet)

    
    </script>

    <script lang="ts">
    export default {
        mounted() {
              gsap.registerPlugin(ScrollTrigger);

            const timelinetest = gsap.timeline({
                scrollTrigger: {
               
                    start: "+=120svh",
                    end: "+=90svh",
                    scrub: false,
                    markers: true,
                },
            })

            timelinetest.to(".card-basis-child", {
          
                duration: 1,
                y: 0,
            })
        }

        }
    
    </script>



 
<template>
    <div class="h-screenheight flex flex-col justify-between p-5 ">

 



     <swiper-container 
    
        :slides-per-view="3"
        :space-between="20"
        :centered-slides="false"
        :mousewheel="{
            enabled: true,
            releaseOnEdges: true
        }"
         :autoplay="{
             delay: 2500,
             disableOnInteraction: false,
         }"
        :loop="true"
        :breakpoints="{
           0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }"
        @swiperprogress="onProgress"
        @swiperslidechange="onSlideChange" class="w-full ">
          <swiper-slide class="rounded-md overflow-hidden"  v-for="projet in Projet"  :key="projet.id"><CardCarrousel v-bind="projet"/></swiper-slide>

        </swiper-container>







        <div class="flex flex-col ">

            <div class="w-full text-center">
                <h1 class="text-titre">EMILBOU</h1>
            </div>
            <span class="text-center font-bold text-2xl">[ Scroll Down ]</span>
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


    <div class="w-full flex gap-5 p-5" id="card-basis">
        <div class="card-basis-child w-1/3 h-64 transition-width duration-400 bg-black translate-y-20 hover:w-2/3"></div>
        <div class="card-basis-child w-1/3 h-64 transition-width duration-400 bg-black translate-y-32 hover:w-2/3"></div>
        <div class="card-basis-child w-1/3 h-64 transition-width duration-400 bg-black translate-y-44 hover:w-2/3"></div>
    </div>

<div class="mb-[900px]"></div>

</template>

