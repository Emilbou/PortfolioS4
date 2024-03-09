<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { supabase } from '@/supabase'

import type { SchemaProjet } from '../types'

const props = defineProps<SchemaProjet>()

const showElement = ref(false)

supabase
  .from('Projet')
  .select('scolaireprojet')
  .then(({ data }) => {
    if (data) {
      showElement.value = false // Réinitialiser showElement à false
      data.forEach(row => {
        // Mettre à jour showElement avec la valeur de scolaireprojet pour chaque entrée
        showElement.value = row.scolaireprojet ?? false
        // Faites quelque chose avec showElement.value ici
        console.log(`ID ${row.id} : showElement = ${showElement.value}`)
      })
    }
  })
  .catch(console.error)
</script>

<template>
  <div class="bg-white h-auto lg:h-screen">
    <div class="flex justify-between">
      <h1>{{ props.nomprojet || 'Nom du projet non défini' }}</h1>
      <p v-if="showElement === null">Chargement...</p>
      <p v-else-if="showElement === true" id="jeveuxquecamarcheici">Ceci est un projet réalisé dans le cadre de mes études</p>
      <p v-else>Projet perso</p>
    </div>

    <div class="flex">
      <img class="w-1/2" :src="props.imageprojet" alt="" />

      <div class="flex flex-col">
        <p>{{ props.descriptionprojet }}</p>
      </div>
    </div>
  </div>
</template>