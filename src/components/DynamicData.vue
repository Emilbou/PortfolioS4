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
    <div class="flex lg:flex-row flex-col w-full justify-between">
      <div class="w-full lg:w-1/2 border py-5 p-7 lg:p-16 rounded-3xl">
        <h2 class="text-4xl mb-10">Description</h2>
        <p class="text-balance">{{ Projetpagedata[0].Projet.descriptionprojet }}</p>
      </div>
      <div class="flex flex-col justify-start w-full lg:w-1/2">
        <div class="w-full border py-5 p-7 lg:p-16 rounded-3xl">
          <h2 class="text-4xl mb-10">Technologies utilisées</h2>
          <div class="flex gap-4 justify-around">
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
        <div
          v-if="Projetpagedata[0].Projet.scolaireprojet"
          class="border py-5 p-7 lg:p-16 rounded-3xl w-full"
        >
          <h2 class="text-4xl font-normal">Projet réalisé dans le cadre des études</h2>
        </div>
        <div
          v-if="Projetpagedata[0].Projet.urlprojet"
          class="border py-5 p-7 lg:p-16 rounded-3xl text-center"
        >
          <a :href="Projetpagedata[0].Projet.urlprojet" target="_blank" class="text-4xl text-center"
            >Url du site</a
          >
        </div>
      </div>
    </div>
    <div class="w-full mt-10" v-if="Projetpagedata[0].Projet.apercuprojet">
      <h2 class="text-4xl font-bold">Apercu du projet</h2>
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
