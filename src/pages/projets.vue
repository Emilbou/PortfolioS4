<script setup lang="ts">
import { supabase } from '../supabase';
import CardProjets from '../components/CardProjets.vue';
const { data: Projet, error } = await supabase.from('Projet').select('*');
console.log(Projet);
</script>

<template>
<div v-for="projets in Projet" class="bg-white">
    
    <CardProjets v-bind="projets"></CardProjets>
</div>
</template>