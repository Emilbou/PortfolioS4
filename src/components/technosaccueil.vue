<script setup lang="ts">
import { supabase } from '@/supabase'

const { data: Projetpagedata, error } = await supabase.from('Technos').select('*')
</script>
<template>
  <div class="flex p-5 gap-12 flex-wrap justify-center">
    <div v-for="Technodata in Projetpagedata" :key="Technodata.id_Techno" class="w-fit flex">
      <div class="w-full border p-4 lg:p-8 xl:p-16 rounded-full">
        <img
          class="aspect-square w-20 flex"
          :src="Technodata.icone_techno"
          :title="Technodata.nom_techno"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
