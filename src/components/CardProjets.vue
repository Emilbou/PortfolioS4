<script setup lang="ts">
import { defineProps } from 'vue'
import type { SchemaProjet } from '../types'
defineProps<SchemaProjet>()
</script>

<template>

    <div class="flex w-full h-fit mr-4 flex-row ">
        <img class="object-cover aspect-[16/9] w-1/2 rounded-xl overflow-hidden h-auto" :src="imageprojet" alt="">
<div class="flex flex-col w-full">
    
            <p class="mt-2 text-2xl h-full flex items-end">{{nomprojet}}</p>
    <p class="w-1/3">{{ descriptionprojet }}</p>
</div>
        </div>
</template>