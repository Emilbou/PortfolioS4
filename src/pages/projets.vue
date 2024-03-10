<script setup lang="ts">
import { supabase } from '../supabase';
import CardCarrousel from '../components/CardCarrousel.vue';
const { data: Projet, error } = await supabase.from('Projet').select('*');
console.log(Projet);
</script>

<template>
<div v-for="projets in Projet" class="bg-white">
    
    <CardCarrousel v-bind="projets"></CardCarrousel>
</div>
</template>