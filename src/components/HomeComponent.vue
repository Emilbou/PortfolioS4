<script setup>
import { supabase } from '../supabase'


const { data: Projet, error } = await supabase
    .from('Projet')
    .select('*')
console.log(Projet)
</script>

 
<template>
<div class="h-screenheight flex flex-col justify-between p-5">
    
    <div class="w-full  overflow-hidden ">
        <div class="flex gap-5 whitespace-nowrap">
    
        <div class="w-full lg:w-1/4 ">
            <figure class="sm:w-full w-1/4  imagetest flex flex-col -mb-5 ">
            </figure>
            <figcaption class="mt-5">lorem test</figcaption>
        </div>
        <div class="w-full lg:w-1/4">
            <figure class="sm:w-full w-1/4  imagetest flex flex-col -mb-5">
            </figure>
            <figcaption class="mt-5">lorem test</figcaption>
        </div>
        <div class="w-full lg:w-1/4">
            <figure class="sm:w-full w-1/4  imagetest flex flex-col -mb-5">
            </figure>
            <figcaption class="mt-5">lorem test</figcaption>
        </div>
        <div class="w-full lg:w-1/4">
            <figure class="sm:w-full w-1/4  imagetest flex flex-col -mb-5">
            </figure>
            <figcaption class="mt-5">lorem test</figcaption>
        </div>
    </div>
    </div>
    <div class="flex flex-col mb-10">
        
        <div class="w-full text-center">
            <h1 class="text-titre">EMILBOU</h1>
        </div>
        <span class="text-center font-bold">[ Scroll Down ]</span>
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