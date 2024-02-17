<script setup>
import { supabase } from '../supabase'
import CardCarrousel from '../components/CardCarrousel.vue';
import { register } from 'swiper/element/bundle';
register();
//const { data: Projet, error } = await supabase
//    .from('Projet')
//    .select('*')
//console.log(Projet)


</script>

 
<template>
    <div class="h-screenheight flex flex-col justify-between p-5 ">

     


     <swiper-container :slides-per-view="3"
        :space-between="20"
        :centered-slides="false"
         :autoplay="{
             delay: 2500,
             disableOnInteraction: false,
         }"
        :loop="true"
        :breakpoints="{
            768: {
                slidesPerView: 4,
            },
        }"
        @swiperprogress="onProgress"
        @swiperslidechange="onSlideChange" class="w-full ">
          <swiper-slide><CardCarrousel />1</swiper-slide>
          <swiper-slide><CardCarrousel />2</swiper-slide>
          <swiper-slide><CardCarrousel />3</swiper-slide>
          <swiper-slide><CardCarrousel />4</swiper-slide>
          <swiper-slide><CardCarrousel />5</swiper-slide>
          <swiper-slide><CardCarrousel />6</swiper-slide>

        </swiper-container>







        <div class="flex flex-col ">

            <div class="w-full text-center">
                <h1 class="text-titre">EMILBOU</h1>
            </div>
            <span class="text-center font-bold text-2xl">[ Scroll Down ]</span>
        </div>
    </div>

    <div>
        <div v-for="projet in Projet" :key="projet.id">
            <div>{{ projet.nomprojet }}</div>
        </div>
    </div>
</template>

<style>
.imagetest {
    background-image: url('/img/place-des-saveurs.png');
    background-size: cover;
    background-position: center center;
    aspect-ratio: 9/10;
}
</style>