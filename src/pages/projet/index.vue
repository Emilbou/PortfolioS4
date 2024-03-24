<script setup lang="ts">
import { supabase } from '@/supabase'
const { data: projets, error } = await supabase.from('Projet').select('*')
</script>

<template>
  <div class="bg-white">
    <div v-if="error">
      <p>Une erreur s'est produite : {{ error.message }}</p>
    </div>
    <div v-else-if="!projets">
      <p>Chargement...</p>
    </div>
    <div v-else class="flex flex-col items-center">
      <div
        v-for="(projet, index) in projets"
        :key="projet.id"
        class="flex flex-row items-end justify-center w-full my-10 p-10"
        :class="{ 'flex-row-reverse': index % 2 !== 0 }"
      >
        <img
          :src="projet.imageprojet"
          :alt="projet.nomprojet"
          class="w-2/5 rounded-lg object-cover aspect-video"
        />
        <div class="w-1/2 px-8">
          <h2 class="text-2xl font-bold mb-4">{{ projet.nomprojet }}</h2>

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
