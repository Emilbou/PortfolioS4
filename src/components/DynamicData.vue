<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { supabase } from '@/supabase'
import { watch } from 'vue'

import type { SchemaProjet } from '../types'

const props = defineProps<SchemaProjet>()

const showElement = ref(false)
const WordpressShow = ref(false)
const VuejsShow = ref(false)
const TailwindcssShow = ref(false)
const HtmlShow = ref(false)
const CssShow = ref(false)
const Groupe = ref(false)

const fetchProjectData = async () => {
  const { data: projectData } = await supabase
    .from('Projet')
    .select('*')
    .eq('id', props.id)
    .single()

  if (projectData) {
    showElement.value = projectData.scolaireprojet ?? false
    WordpressShow.value = projectData.Wordpress ?? false
    VuejsShow.value = projectData.Vuejs ?? false
    TailwindcssShow.value = projectData.Tailwindcss ?? false
    HtmlShow.value = projectData.Html ?? false
    CssShow.value = projectData.Css ?? false
    Groupe.value = projectData.groupeprojet?? false
  }
}

watch(() => props.id, fetchProjectData, { immediate: true })
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
        <p>technos utilisées</p>
      <div class="flex w-full justify-between">
        
       
          <p v-if="WordpressShow === null">Chargement...</p>
                <div v-else-if="WordpressShow === true"><img class="w-10 asp" src="/img/iconestechnos/WordpressIcon.webp" alt=""></div>
                <div v-else class="hidden"></div>
        
       
          <p v-if="VuejsShow === null">Chargement...</p>
                <p v-else-if="VuejsShow === true"><img class="w-10 asp" src="/img/iconestechnos/VuejsIcon.webp" alt=""> </p>
                <div v-else class="hidden"></div>
      
       
          <p v-if="TailwindcssShow === null">Chargement...</p>
                <p v-else-if="TailwindcssShow === true"><img class="w-10 asp" src="/img/iconestechnos/TailwindIcon.webp" alt=""> </p>
                <div v-else class="hidden"></div>
    
       
          <p v-if="HtmlShow === null">Chargement...</p>
                <p v-else-if="HtmlShow === true"><img class="w-10 asp" src="/img/iconestechnos/HtmlIcon.webp" alt=""> </p>
                <div v-else class="hidden"></div>
     
       
          <p v-if="CssShow === null">Chargement...</p>
                <p v-else-if="CssShow === true"><img class="w-10 asp" src="/img/iconestechnos/CssIcon.webp" alt=""> </p>
                <div v-else class="hidden"></div>
   
        
      </div>

<!-- projet de groupe ou solo -->
<div v-if="Groupe === null">Chargement</div>
<div v-else-if="Groupe === true">Projet réalisé en groupe</div>
<div v-else="Groupe">Projet solo</div>

<!-- url du projet si il y en a une  -->
<a :href="urlprojet">l'url en question</a>
      </div>
    </div>
  </div>
</template>

