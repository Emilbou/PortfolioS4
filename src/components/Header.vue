<script setup lang="ts">
import { RouterLink } from 'vue-router';
let isActive = false;

</script>

<template>
    <div class="flex justify-between items-center">
<RouterLink to="/" class="w-16 aspect-square"><img src="/img/LogoBlack.webp" alt=""></RouterLink>
<div class="w-16 aspect-square flex flex-col justify-between rounded-l-full overflow-hidden rounded-br-full" @click="isActive = true" >
    <span class="w-full bg-noir h-3"></span>
    <span class="w-full bg-noir h-3"></span>
    <span class="w-full bg-noir h-3"></span>

</div>
    </div>
</template>