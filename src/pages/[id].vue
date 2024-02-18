<script setup lang="ts">
import { ref } from 'vue'
import CardCarrousel from '../components/CardCarrousel.vue'
import { supabase } from '../supabase'
import { defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router/auto'
const router = useRouter();
const route = useRoute('/edit/[id]')
const props = defineProps<{ id: string }>()
let { data: Projet, error } = await supabase.from('Projet').select().eq('id', props.id).single()
console.log('Projet :', Projet)
let projet = ref({})


if (route.params.id) {
    // On charge les données de la maison
    let { data, error } = await supabase
        .from("Projet")
        .select("*")
        .eq("id", route.params.id);
    if (error) console.log("n'a pas pu charger le table Projet :", error);
    else projet.value = (data as any[])[0];
}

</script>

<template>
<div v-for="projet in Projet">
    <CardCarrousel v-bind="projet" />
    <button @click="router.push('/')">Retour</button>
</div>
</template>