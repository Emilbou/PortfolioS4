<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { supabase } from '@/supabase'

import type { SchemaProjet } from '../types'

const props = defineProps<SchemaProjet>()

const showElement = ref(false)
const WordpressShow = ref(false)
const VuejsShow = ref(false)

// Est-ce un projet scolaire ?
supabase
  .from('Projet')
  .select('scolaireprojet')
  .then(({ data }) => {
    if (data) {
      showElement.value = false 
      data.forEach(row => {
        showElement.value = row.scolaireprojet ?? false
        console.log(`ID ${row.id} : showElement = ${showElement.value}`)
      })
    }
  })
  .catch(console.error)

  // Quelles technos ?
  supabase
  .from('Projet')
  .select('Wordpress')
  .then(({ data }) => {
    if (data) {
      WordpressShow.value = false 
      data.forEach(row => {
        WordpressShow.value = row.Wordpress?? false
        console.log(`ID ${row.id} : WordpressShow = ${WordpressShow.value}`)
      })
    }
  })
  supabase
  .from('Projet')
  .select('Vuejs')
  .then(({ data }) => {
    if (data) {
      VuejsShow.value = false 
      data.forEach(row => {
        VuejsShow.value = row.Vuejs?? false
        console.log(`ID ${row.id} : VuejsShow = ${VuejsShow.value}`)
      })
    }
  })
</script>

<template>
  <div class="bg-white h-auto lg:h-screen">
    <div class="flex justify-between">
      <h1>{{ props.nomprojet || 'Nom du projet non défini' }}</h1>
      <p v-if="showElement === null">Chargement...</p>
      <p v-else-if="showElement === true">Ceci est un projet réalisé dans le cadre de mes études</p>
      <p v-else>Projet perso</p>
    </div>

    <div class="flex">
      <img class="w-1/2" :src="props.imageprojet" alt="" />

      <div class="flex flex-col">
        <p>{{ props.descriptionprojet }}</p>
        
        <div>  
          <p v-if="WordpressShow === null">Chargement...</p>
                <p v-else-if="WordpressShow === true">avec wordpress</p>
                <p v-else>pas de wordpress</p>
        </div>
        <div>  
          <p v-if="VuejsShow === null">Chargement...</p>
                <p v-else-if="VuejsShow === true">avec Vuejs</p>
                <p v-else>pas de Vuejs</p>
        </div>
      </div>
    </div>
  </div>
</template>