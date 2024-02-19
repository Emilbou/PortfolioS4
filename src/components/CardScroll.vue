
<script  lang="ts">
import { gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        const timelinetest = gsap.timeline({
            scrollTrigger: {
                trigger: "#card-basis",
                start: "top bottom",
                scrub: false,
                markers: false,
            },
        })

        timelinetest.to(".card-basis-child", {

            duration: 1,
            y: 0,
        })
    }

}

</script>
<template>
    
    <div class="w-full flex flex-col lg:flex-row gap-5 p-5 " id="card-basis">
            <div class="card-basis-child w-full h-64 transition-width duration-400 bg-black translate-y-20 lg:hover:w-2/3"></div>
    <div class="card-basis-child w-full h-64 transition-width duration-400 bg-black translate-y-32 lg:hover:w-2/3"></div>
    <div class="card-basis-child w-full h-64 transition-width duration-400 bg-black translate-y-44 lg:hover:w-2/3"></div>
        </div>
</template>