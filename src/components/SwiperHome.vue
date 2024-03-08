<script setup lang="ts">
import { register } from 'swiper/element/bundle';
import { supabase } from '../supabase';
import { useRouter } from 'vue-router';
import CardCarrousel from '../components/CardCarrousel.vue';

register();
const router = useRouter();
const { data: Projet, error } = await supabase.from('Projet').select('*');
console.log(Projet);

const handleSlideClick = (projet) => {
  router.push({ name: '/projet/[id]', params: { id: projet.id } });
};
</script>

<template>
  <swiper-container
    :slides-per-view="3"
    :space-between="20"
    :centered-slides="false"
    :grab-cursor="true"
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
      },
    }"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
    class="w-full"
  >
    <swiper-slide
      v-for="projet in Projet"
      :key="projet.id"
      class="rounded-md overflow-hidden cursor-pointer"
      @click="handleSlideClick(projet)"
    >
      <CardCarrousel v-bind="projet" />
    </swiper-slide>
  </swiper-container>
</template>