<script setup lang="ts">
defineProps<{
    content?: string
}>()
import { onMounted } from 'vue';

import { gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



onMounted(() => {

    gsap.registerPlugin(ScrollTrigger);

    const timelinetextline1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#line1",
            start: "top 60%+=100px",
            end:"bottom+=500px bottom-=100px",
            scrub: true,
            markers: true,
        },
    })

    timelinetextline1.to("#line1", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       duration: 10000
    })


    timelinetextline1.to("#line2", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       delay: 10,
       duration: 10000
    })
    timelinetextline1.to("#line3", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       delay: 10,
       duration: 10000
    })
    timelinetextline1.to("#line4", {
       backgroundPosition: "0% 100%",
       ease: "power1.inOut",
       delay: 10,
       duration: 10000
    })






});
</script>
<template>

<div class="flex w-full justify-start items-center mt-64 flex-col">
    
    <div class="flex justify-start items-start w-1/2 flex-col text-start">
        <p class="text-4xl text-balance  text-titre font-black" style="background: linear-gradient(90deg,#06041a 50%,rgba(6,4,26,.2) 0); background-position-x: 100%;background-size: 200% 100%;   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;" id="line1">En quête de devenir un développeur créatif,</p>
        <p class="text-4xl text-balance  text-titre font-black" style="background: linear-gradient(90deg,#06041a 50%,rgba(6,4,26,.2) 0); background-position-x: 100%;background-size: 200% 100%;   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;" id="line2">je m'efforce de créer des sites web futuristes</p>
        <p class="text-4xl text-balance  text-titre font-black" style="background: linear-gradient(90deg,#06041a 50%,rgba(6,4,26,.2) 0); background-position-x: 100%;background-size: 200% 100%;   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;" id="line3">
   et innovants, combinant esthétique et </p>
        <p class="text-4xl text-balance  text-titre font-black" style="background: linear-gradient(90deg,#06041a 50%,rgba(6,4,26,.2) 0); background-position-x: 100%;background-size: 200% 100%;   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;" id="line4">
   fonctionnalité de manière harmonieuse.</p>

    </div>
</div>


</template>