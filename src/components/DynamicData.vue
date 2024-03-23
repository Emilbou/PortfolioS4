<template>
  <div class="bg-white p-4">
    <div v-if="Projetpagedata.length > 0">
      <h2 class="text-7xl font-bold" v-if="Projetpagedata[0].Projet">
        {{ Projetpagedata[0].Projet.nomprojet }}
      </h2>
      <div class="w-full" v-if="Projetpagedata[0].Projet">
        <img
          :src="Projetpagedata[0].Projet.imageprojet"
          class="rounded-[100px] w-full p-10 object-cover h-[50svh]"
          alt="image représentative du projet"
        />
      </div>
    </div>
    <div class="flex w-full gap-40">
      <div class="w-1/2">
        <h2 class="text-4xl mb-10">Description</h2>
        <p class="text-balance">{{ Projetpagedata[0].Projet.descriptionprojet }}</p>
      </div>
      <div class="flex flex-col">
        <div>
          <h2 class="text-4xl mb-10">Technologies utilisées</h2>
          <div class="flex">
            <div
              v-for="Technodata of Projetpagedata"
              :key="Technodata.id_Techno"
              class="flex flex-col"
            >
              <div v-if="Technodata.Technos">
                <img
                  class="aspect-square w-20"
                  :src="Technodata.Technos.icone_techno"
                  :title="Technodata.Technos.nom_techno"
                  alt=""
                />
              </div>
              <h3 v-else>Techno non spécifiée</h3>
            </div>
          </div>
        </div>
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
</script>
