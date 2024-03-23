<template>
  <div class="bg-white p-10">
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
    <div class="flex w-full justify-between">
      <div class="w-1/3 border p-16 rounded-3xl">
        <h2 class="text-4xl mb-10">Description</h2>
        <p class="text-balance">{{ Projetpagedata[0].Projet.descriptionprojet }}</p>
      </div>
      <div class="flex flex-col justify-between w-1/2">
        <div class="w-fit border p-16 rounded-3xl">
          <h2 class="text-4xl mb-10">Technologies utilisées</h2>
          <div class="flex gap-10">
            <div
              v-for="Technodata of Projetpagedata"
              :key="Technodata.id_Techno"
              class="flex flex-col justify-around"
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
        <div v-if="Projetpagedata[0].Projet.scolaireprojet" class="border p-16 rounded-3xl w-fit">
          <h2 class="text-4xl font-normal">Projet réalisé dans le cadre des études</h2>
        </div>
        <div v-if="Projetpagedata[0].Projet.urlprojet" class="border p-16 rounded-3xl">
          <a :href="Projetpagedata[0].Projet.urlprojet" target="_blank">L'url en quesiton</a>
        </div>
      </div>
    </div>
    <div class="w-full" v-if="Projetpagedata[0].Projet.apercuprojet">
      <h2>Apercu du projet</h2>
      <p>Cliquer sur l'image pour la développer</p>
      <img
        :src="Projetpagedata[0].Projet.apercuprojet"
        class="rounded-xl w-full p-10 object-cover object-top transition-all"
        :style="{ height: isExpanded ? 'auto' : '50vh' }"
        alt="image représentative du projet"
        @click="toggleExpand"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '../supabase'
import { ref } from 'vue'
const props = defineProps<{
  id_Projetprops: string
}>()
const isExpanded = ref(false)

const { data: Projetpagedata, error } = await supabase
  .from('TechnosProjets')
  .select('id_Projet,Projet(*), id_Techno,Technos(*)')
  .eq('id_Projet', props.id_Projetprops)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>
