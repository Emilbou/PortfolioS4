<script setup lang="ts">
import Description from "../components/Description.vue"
import Header from '../components/Header.vue'
</script>

<template>
<main class="h-screenheight">
    <div class="flex flex-col  h-full">
<Header />
<div class="justify-between h-full flex flex-col">
    
                <div>
                    <div class="flex flex-col font-black italic text-titre leading-tight">
                        <span>Emilien</span> <span>Boucard</span>
                    </div>
                    <Description />
                    <div class="mt-16 w-full justify-end flex">
                        <button class="border p-3 rounded-xl text-text shadow-customBoxShadow">
                            Me contacter par mail
                        </button>
                    </div>
                </div>
                <div class="flex flex-col py-10">
                    <div class="text-soustitre font-black "><span>Projets</span></div>
                    <div class="object-cover rounded-2xl overflow-hidden aspect-video border shadow-customBoxShadow"><img src="/img/place-des-saveurs.png" alt=""></div>
                </div>
</div>
    </div>
</main>
</template>
