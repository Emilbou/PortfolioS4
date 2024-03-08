<script lang="ts">

import { TweenLite, gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const scrollfirstpage1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".reference",
        pin: true,
        start: "top top",
        end: "bottom-=100px top",
        scrub: true,
        markers: false,
        pinSpacing: true,

      },
    })

  }

}

</script>

<template>
  <div class="h-screenheight w-screen overflow-hidden relative p-10 lg:p-20 hauteurpage pageactive">
    <div class="z-10 p-10 flex justify-between w-full h-full relative gap-10">
<div class="rounded-2xl border border-black shadow-2xl w-1/3 overflow-hidden "><img class="object-cover w-full h-full object-center" src="https://picsum.photos/200/300" alt="image test lorem picsum"></div>
<div class="rounded-2xl border border-black shadow-2xl w-2/3">test</div>
    </div>
   <div class="-z-50">
    
              <div class="absolute top-[-100svh] left-[-50vw] w-[100vw] aspect-square" style="border-radius: 100%;
            background: radial-gradient(50% 50% at 50% 50%, #D2A0A0 0%, rgba(217, 217, 217, 0.00) 100%);"></div>
              <div class="absolute top-0 left-0 w-[200vw] aspect-square" style="border-radius: 100%;
            background: radial-gradient(50% 50% at 50% 50%, #D2A0A0 0%, rgba(217, 217, 217, 0.00) 100%);"></div>
          </div>
        </div>
  </template>