<script setup lang="ts">
import { supabase } from '../supabase'
const propsid = defineProps<{
  id_Projetprops: string
}>()
const { data: Projetpagedata, error } = await supabase
  .from('TechnosProjets')
  .select('id_Projet,Projet(*), id_Techno,Technos(*)')
  .eq('id_Projet', propsid.id_Projetprops)
</script>
<template>
  <div class="flex p-5 gap-5">
    <div v-for="Technodata in Projetpagedata" :key="Technodata.id_Techno" class="w-fit flex">
      <img
        class="aspect-square w-20 flex"
        :src="Technodata.Technos.icone_techno"
        :title="Technodata.Technos.nom_techno"
        alt=""
      />
    </div>
  </div>
</template>
