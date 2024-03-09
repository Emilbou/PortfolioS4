<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '@/supabase';
import type { SchemaProjet } from '../../types'
defineProps<SchemaProjet>()
const route = useRoute();
const projet = ref({});

onMounted(async () => {
  const { data, error } = await supabase
    .from('Projet')
    .select('*')
    .eq('id', route.params.id)
    .single();

  if (error) {
    console.error('Erreur lors de la récupération du projet:', error);
  } else {
    projet.value = data;
  }
});
</script>

<template>
  <div v-bind="projet">
  
  <div>
<h1>{{ nomprojet }}</h1>
<img :src="imageprojet" alt="">


  </div>
  
  
  
  
  
  
  
  
  
  
  </div>
</template>