<template>
    <div class=" w-1/3 aspect-square bg-black items-center justify-center m-auto rounded-xl shadow-2xl" ref="card">

        <div class="flex flex-col items-center p-8 justify-between h-full">
            <div class="w-full bg-white h-full rounded-lg">hdsjkfhg</div>
            <div class="text-white text-4xl font-bold h-1/3 flex justify-center items-center">
                <h2> La card qui bouge </h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PerspectveCard',
    mounted() {
        const card = this.$refs.card as HTMLElement;

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const offsetX = (mouseX - window.innerWidth / 2) / window.innerWidth * 100;
            const offsetY = (mouseY - window.innerHeight / 2) / window.innerHeight * 100;

            const maxTiltY = 15;
            const maxTiltX = 15;

            const tiltX = Math.min(Math.max(-maxTiltX, offsetX), maxTiltX);
            const tiltY = Math.min(Math.max(-maxTiltY, offsetY), maxTiltY);

            card.style.transform = `rotateY(${tiltX}deg) rotateX(${-tiltY}deg)`;
        });
    },
});
</script>
