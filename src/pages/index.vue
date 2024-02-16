<script setup>
import { supabase } from '../supabase'
import CardCarrousel from '../components/CardCarrousel.vue';
const { data: Projet, error } = await supabase
    .from('Projet')
    .select('*')
console.log(Projet)

</script>

 
<template>
    <div class="h-screenheight flex flex-col justify-between p-5">

        <div class="w-full  overflow-hidden ">
            <div class="flex gap-5 whitespace-nowrap">
<CardCarrousel />
<CardCarrousel />
<CardCarrousel />
<CardCarrousel/>
            </div>
        </div>
        <div class="flex flex-col ">

            <div class="w-full text-center">
                <h1 class="text-titre">EMILBOU</h1>
            </div>
            <span class="text-center font-bold text-2xl">[ Scroll Down ]</span>
        </div>
    </div>

    <div>
        <div v-for="projet in Projet" :key="projet.id">
            <div>{{ projet.nomprojet }}</div>
        </div>
    </div>
</template>

<style>
.imagetest {
    background-image: url('/img/place-des-saveurs.png');
    background-size: cover;
    background-position: center center;
    aspect-ratio: 9/10;
}
</style>