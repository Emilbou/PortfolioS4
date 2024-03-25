<script setup lang="ts">
import { supabase } from '@/supabase'
import ListeTechnos from '@/components/ListeTechnos.vue'
import FooterPortfolio from '../../components/FooterPortfolio.vue'
// @ts-ignore
const { data: projets, error } = await supabase.from('Projet').select('*')
</script>
<template>
  <div class="bg-white">
    <div class="bg-white pt-10 flex justify-center">
      <RouterLink class="bg-white border p-5 rounded-full flex-col md:flex-row" to="/"
        ><img class="w-20" src="/public/favicon.ico" alt="" />
      </RouterLink>
    </div>

    <div
      v-for="(unseulprojet, index) in projets"
      :key="index"
      class="flex bg-white items-end justify-center w-full my-10 p-10"
    >
      <RouterLink
        :to="{
          name: '/projet/[id]',
          params: { id: unseulprojet.id }
        }"
        class="flex justify-center flex-col md:flex-row"
      >
        <img
          :src="unseulprojet.imageprojet ?? ''"
          :alt="unseulprojet.nom_projet"
          class="w-full md:w-2/5 rounded-lg object-cover aspect-video"
        />
        <div class="w-full md:w-1/2 px-8 flex flex-col justify-end">
          <h2 class="text-2xl font-bold mb-4 mt-10 md:mt-0">{{ unseulprojet.nomprojet }}</h2>

          <ListeTechnos :id_Projetprops="unseulprojet.id" />
          <hr />
        </div>
      </RouterLink>
    </div>
  </div>
  <FooterPortfolio></FooterPortfolio>
</template>
