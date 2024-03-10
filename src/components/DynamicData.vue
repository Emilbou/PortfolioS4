<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { supabase } from '@/supabase'
import { watch } from 'vue'
import SchoolIcon from '../components/SchoolIcon.vue'
import type { SchemaProjet } from '../types'

const props = defineProps<SchemaProjet>()

const showElement = ref(false)
const WordpressShow = ref(false)
const VuejsShow = ref(false)
const TailwindcssShow = ref(false)
const HtmlShow = ref(false)
const CssShow = ref(false)
const Groupe = ref(false)
const Urlprojet = ref(null)




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
    Urlprojet.value = projectData.urlprojet?? null
  }
}

watch(() => props.id, fetchProjectData, { immediate: true })
</script>

<template>
  <div class="bg-white h-auto lg:h-screen p-10">
    <div class="flex gap-16 justify-start items-start">
      <h1 class="text-5xl pb-10">{{ props.nomprojet || 'Nom du projet non défini' }}</h1>
      <p v-if="showElement === null">Chargement...</p>
      <div v-else-if="showElement === true"><SchoolIcon class="w-16"/></div>
      <div class="hidden" v-else></div class="hidden">
    </div>

    <div class="flex">
      <img class=" aspect-square object-cover hauteurimage"  :src="props.imageprojet" alt="" />

      <div class="flex flex-col h-[80vh] w-full justify-between pl-10">
        <div>
<div class="flex flex-col pb-10">
  
  <h2 class="text-3xl pb-5">Description</h2>
          <p class="text-pretty">{{ props.descriptionprojet }}</p>
  
</div>
<div class="pb-10">
  
          <h2 class="text-3xl pb-5">Outils de développement</h2>
        <div class="flex w-full gap-5 flex-wrap">
  
  
            <p v-if="WordpressShow === null">Chargement...</p>
                  <div v-else-if="WordpressShow === true"><img class="w-10 " src="/img/iconestechnos/WordpressIcon.webp" alt=""></div>
  
  
            <p v-if="VuejsShow === null">Chargement...</p>
                  <p v-else-if="VuejsShow === true"><img class="w-10 " src="/img/iconestechnos/VuejsIcon.webp" alt=""> </p>
  
  
            <p v-if="TailwindcssShow === null">Chargement...</p>
                  <p v-else-if="TailwindcssShow === true"><img class="w-10 " src="/img/iconestechnos/TailwindIcon.webp" alt=""> </p>
  
  
            <p v-if="HtmlShow === null">Chargement...</p>
                  <p v-else-if="HtmlShow === true"><img class="w-10 " src="/img/iconestechnos/HtmlIcon.webp" alt=""> </p>
  
  
            <p v-if="CssShow === null">Chargement...</p>
                  <p v-else-if="CssShow === true"><img class="w-10 " src="/img/iconestechnos/CssIcon.webp" alt=""> </p>
  
</div>
        
      </div>

<!-- projet de groupe ou solo -->
<div v-if="Groupe === null">Chargement</div>
<div v-else-if="Groupe === true" class="text-3xl">Projet réalisé en groupe </div>
<div v-else="Groupe"></div>

</div>
<!-- url du projet si il y en a une  -->

<div v-if="Urlprojet !== null" class="flex justify-center items-center">
  <div class="border text-center w-fit  px-10 py-2 bg-black rounded-full ">
  
  <a :href="urlprojet" target="_blank" class="text-center text-4xl font-normal text-white">{{nomprojet}}</a>
</div>
</div>

    </div>
    </div>
  </div>


</template>


<style>
.hauteurimage
{
  height: 80vh;
  aspect-ratio: 12/9;
}
</style>