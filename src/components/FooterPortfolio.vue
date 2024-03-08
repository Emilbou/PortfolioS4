<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const timelinefooter = gsap.timeline({
      scrollTrigger: {
        trigger: "#footergsap",
        start: "bottom center",
        toggleActions: "play reverse play reverse",
        markers: true,
      },
    });

    timelinefooter.to(".footergsapclass", {
      width: "95%",
      borderRadius: 50,
      y: "0",
    });
  },
};
</script>

<template>
  <div class="flex w-full justify-center flex-col items-center">
    <div
      id="footergsap"
      class="w-full bg-white h-[100svh] footergsapclass flex justify-center"
    ></div>
    <div class="h-[150svh] flex flex-col bg-black -mt-[100svh] -z-50">
      <div class="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio commodi
        cupiditate perspiciatis enim consequuntur inventore, quis libero itaque
        cumque voluptates vitae quibusdam error ipsam aliquid illo magni.
        Soluta, facere officia! Quibusdam veniam perspiciatis eos reprehenderit,
        voluptate suscipit natus illum nobis praesentium asperiores. Repudiandae
        accusantium, tempore culpa blanditiis dolores repellendus nesciunt
        accusamus at cumque velit, ipsam, similique sunt iure nulla! Nihil.
        Dolorum enim atque provident nisi aliquam, amet adipisci velit dolores
        esse ipsam fuga, sunt officiis earum, quis incidunt ullam facilis nihil
        veritatis nam eos. Odit nihil dolore minima ex dicta? Impedit earum
        natus atque, illo officiis, esse ad reprehenderit cupiditate
        necessitatibus voluptatibus deserunt. Adipisci aliquam possimus sunt
        earum dolorem officia mollitia, blanditiis velit tenetur accusantium
        impedit, iusto, quae ducimus necessitatibus. Repudiandae voluptatum
        quidem quaerat nisi facere molestiae ratione earum itaque et iste
        exercitationem ullam animi placeat necessitatibus nam quibusdam ex non,
        eum maxime pariatur ipsam hic facilis quisquam omnis. Cumque.
      </div>
    </div>
  </div>
  <div>EMILIEN BOUCARD</div>
</template>