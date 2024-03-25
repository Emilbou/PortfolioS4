<template>
  <div class="flex-shrink-0 w-full h-fi mr-4 flex-col">
    <img
      class="object-cover w-full h-[50svh] rounded-xl overflow-hidden"
      :src="Projetdata!.imageprojet"
      alt=""
    />
    <p class="mt-2 text-2xl">{{ Projetdata!.nomprojet }}</p>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '../supabase'
import { ref } from 'vue'
const Projet = ref({})
const props = defineProps<{
  id_Projet: string
}>()
const { data: Projetdata, error } = await supabase
  .from('Projet')
  .select('*')
  .eq('id', props.id_Projet)
  .single()
</script>
