<script setup lang="ts">
import Arrow from './Arrow.vue';

</script>
<script lang="ts">

import { gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        const scrollfirstpage = gsap.timeline({
            scrollTrigger: {
                trigger: ".hauteurpage",
                start: "top top",
                end: "bottom-=100px top",
                scrub: true,
                markers: false,
            },
        })

        scrollfirstpage.to(".actual", {
rotation: 90,
        })
    }

}
</script>

<template>
    <div class="h-screenheight w-full overflow-hidden relative p-10 lg:p-20 hauteurpage">
        <div class="flex flex-col z-10 relative justify-between h-full">
            
            <div class="w-full h-full flex justify-between items-start content-start flex-wrap">
            
                <div class="w-20  h-fit"> <img src="/favicon.ico" alt="Logotype"></div>
                    <nav class="h-fit">
                        <ul class="flex gap-20 ">
                            <li>
                                <router-link class="text-3xl" to="/">Accueil</router-link>
                            </li>
                            <li>
                                <router-link class="text-3xl" to="/">Projets</router-link>
                            </li>
                            <li>
                                <router-link class="text-3xl" to="/">A Propos</router-link>
                            </li>
                        </ul>
                    </nav>
            </div>
<div class="flex w-full justify-between items-end">
    
                <div class="w-fit">
                    <h1 class="text-8xl mb-5 ">Emilien Boucard</h1>
                    <p class="lg:w-1/2 w-2/3 text-balance">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae a hic aliquam fugit? Itaque sint animi consequatur! Numquam neque nisi quam recusandae vel, rem fugiat praesentium odit veritatis, aliquid error.
                    Facilis, quos earum ut magnam quod omnis, deserunt maxime esse illo odio commodi veniam architecto hic, laboriosam accusamus tenetur iste aperiam nulla quibusdam adipisci fuga tempora! Nulla, ad. Illo, culpa.</p>
                </div>
                <a class="actual " onclick="window.scrollTo({ top: document.getElementById('next').offsetTop, behavior: 'smooth' }); return false;">

                    <Arrow class="bg-black p-1 rounded-full aspect-square w-fit h-auto pointer-events-auto"/>

                </a>
</div>
        </div>

        <div class="-z-50">
        
        <div class="absolute top-[-100svh] left-[-50vw] w-[100vw] aspect-square" style="border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #D2A0A0 0%, rgba(217, 217, 217, 0.00) 100%);"></div>
        <div class="absolute top-0 left-0 w-[200vw] aspect-square" style="border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #D2A0A0 0%, rgba(217, 217, 217, 0.00) 100%);"></div>
    </div>

    </div>
</template>