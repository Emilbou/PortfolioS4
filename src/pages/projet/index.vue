<script setup lang="ts">
import { supabase } from '@/supabase'
const { data: projets, error } = await supabase
  .from('TechnosProjets')
  .select('id_Projet,Projet(*),id_Techno,Technos(*)')

// Regrouper les technologies par projet
const projetsById = new Map()
projets.forEach((projet) => {
  const projetId = projet.id_Projet
  if (!projetsById.has(projetId)) {
    projetsById.set(projetId, {
      ...projet.Projet,
      Technos: []
    })
  }
  if (projet.Technos) {
    projetsById.get(projetId).Technos.push(projet.Technos)
  }
})
</script>

<template>
  <div class="bg-white">
    <div v-if="error">
      <p>Une erreur s'est produite : {{ error.message }}</p>
    </div>
    <div v-else-if="!projets">
      <p>Chargement...</p>
    </div>
    <div v-else class="flex flex-col items-center">
      <div
        v-for="(projet, index) in projetsById.values()"
        :key="index"
        class="flex flex-row items-end justify-center w-full my-10 p-10"
        :class="{ 'flex-row-reverse': index % 2 !== 0 }"
      >
        <img
          :src="projet.imageprojet"
          :alt="projet.nomprojet"
          class="w-2/5 rounded-lg object-cover aspect-video"
        />
        <div class="w-1/2 px-8 flex flex-col">
          <h2 class="text-2xl font-bold mb-4">{{ projet.nomprojet }}</h2>
          <div>
            <div class="flex gap-4 justify-around">
              <div
                v-for="Technodata in projet.Technos"
                :key="Technodata.id_Techno"
                class="flex flex-col justify-around"
              >
                <div v-if="Technodata">
                  <img
                    class="aspect-square w-20"
                    :src="Technodata.icone_techno"
                    :title="Technodata.nom_techno"
                    alt=""
                  />
                </div>
                <h3 v-else>Techno non spécifiée</h3>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
