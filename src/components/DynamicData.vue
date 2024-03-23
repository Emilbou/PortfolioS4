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

<template>
  <div class="bg-white">
    <h1>Projet</h1>
    <div v-if="Projetpagedata.length > 0">
      <h2>{{ Projetpagedata[0].Projet.nomprojet }}</h2>
      <img :src="Projetpagedata[0].Projet.imageprojet" alt="" />
    </div>
    <div class="flex">
      <div v-for="Technodata of Projetpagedata">
        <h3>{{ Technodata.Technos.nom_techno }}</h3>
      </div>
    </div>
  </div>
</template>
