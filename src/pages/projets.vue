<script setup lang="ts">
import { supabase } from '../supabase'
import CardProjets from '../components/CardProjets.vue'

const { data: Projet, error } = await supabase.from('Projet').select('*')
console.log(Projet)
</script>

<template>
  <div v-for="(projet, index) in Projet" :key="projet.id" class="bg-white">
    <CardProjets id="Card" v-bind="projet" :isAlternate="index % 2 !== 0"></CardProjets>
  </div>
</template>
