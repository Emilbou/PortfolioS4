<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '@/supabase';
import DynamicData from '@/components/DynamicData.vue';

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
  <DynamicData v-bind="projet" />
</template>