<script setup lang="ts">
defineProps<{
    content?: string
}>()
</script>
<template>

<div class="flex w-full justify-center items-center mt-64">
    
    <div class="flex  justify-center items-center w-1/2">
        <p class="text-4xl text-balance w-fit">{{ content }}</p>
    </div>
</div>


</template>