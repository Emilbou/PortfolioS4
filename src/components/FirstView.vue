<script setup lang="ts">
import Arrow from './Arrow.vue'
</script>
<script lang="ts">
import { TweenLite, gsap } from 'gsap/dist/gsap'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    const scrollfirstpage1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.reference',
        pin: false,
        start: 'top top',
        end: 'bottom-=100px top',
        scrub: true,
        markers: false,
        pinSpacing: false
      }
    })
    const scrollfirstpage2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.reference',
        pin: false,
        start: 'top top',
        end: 'bottom-=100px top',
        scrub: true,
        markers: false,
        pinSpacing: false
      }
    })
    const scrollfirstpage3 = gsap.timeline({
      scrollTrigger: {
        pin: true,
        start: 'top top',
        end: 'bottom-=100px top',
        scrub: true,
        markers: false,
        pinSpacing: true
      }
    })
    scrollfirstpage1.to('.actual', {
      rotation: 90
    })
    scrollfirstpage2.to('.pageactive', {
      BorderRadius: '30px'
    })
    scrollfirstpage3.to('.mainpage', {
      paddingLeft: '100px',
      paddingRight: '100px',
      paddingBottom: '100px'
    })
  }
}
</script>

<template>
  <div class="absolute top-0 left-0 w-full h-screenheight reference"></div>
  <div class="w-100% h-fit overflow-hidden mainpage">
    <div class="h-screenheight w-full overflow-hidden relative p-10 lg:p-20 hauteurpage pageactive">
      <div class="flex flex-col z-10 relative justify-between h-full">
        <div class="w-full h-full flex justify-between items-start content-start flex-wrap">
          <div class="w-20 h-fit"><img src="/favicon.ico" alt="Logotype" /></div>
        </div>
        <div class="flex w-full justify-between items-end">
          <div class="w-fit">
            <h1 class="text-8xl mb-5">Emilien Boucard</h1>
          </div>
          <a
            class="actual hidden xl:block"
            onclick="window.scrollTo({ top: document.getElementById('next').offsetTop, behavior: 'smooth' }); return false;"
          >
            <Arrow
              class="bg-black p-1 rounded-full aspect-square w-fit h-auto pointer-events-auto"
            />
          </a>
        </div>
      </div>

      <div class="-z-50">
        <div
          class="absolute top-[-100svh] left-[-50vw] w-[100vw] aspect-square"
          style="
            border-radius: 100%;
            background: radial-gradient(
              50% 50% at 50% 50%,
              #d2a0a0 0%,
              rgba(217, 217, 217, 0) 100%
            );
          "
        ></div>
        <div
          class="absolute top-0 left-0 w-[200vw] aspect-square"
          style="
            border-radius: 100%;
            background: radial-gradient(
              50% 50% at 50% 50%,
              #d2a0a0 0%,
              rgba(217, 217, 217, 0) 100%
            );
          "
        ></div>
      </div>
    </div>
  </div>
</template>
