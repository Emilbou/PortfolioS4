<template>
  <div class="bg-white">
    <h1>Projet</h1>
    <div v-if="Projetpagedata.length > 0">
      <h2 v-if="Projetpagedata[0].Projet">{{ Projetpagedata[0].Projet.nomprojet }}</h2>
      <div v-if="Projetpagedata[0].Projet">
        <img :src="Projetpagedata[0].Projet.imageprojet" class="rounded-lg" alt="" />
      </div>
    </div>
    <div class="flex">
      <div v-for="Technodata of Projetpagedata" :key="Technodata.id_Techno" class="flex flex-col">
        <div v-if="Technodata.Technos">
          <h3>{{ Technodata.Technos.nom_techno }}</h3>
          <img :src="Technodata.Technos.icone_techno" alt="" />
        </div>
        <h3 v-else>Techno non spécifiée</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/supabase'
const props = defineProps<{
  id_Projetprops: string
}>()

const { data: Projetpagedata, error } = await supabase
  .from('TechnosProjets')
  .select('id_Projet,Projet(*), id_Techno,Technos(*)')
  .eq('id_Projet', props.id_Projetprops)
console.log(Projetpagedata)
console.log(error)
</script>
