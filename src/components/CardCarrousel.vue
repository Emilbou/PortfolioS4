<script setup lang="ts">
import { defineProps } from 'vue'
import type { SchemaProjet } from '../types'
defineProps<SchemaProjet>()
</script>

<template>

    <div class="flex-shrink-0 w-full h-fi mr-4 flex-col">
        <img class="object-cover w-full h-[50svh]" src="../../public/img/place-des-saveurs.png" alt="">
        <p class="mt-2 text-2xl">{{nomprojet}}</p>
        </div>
</template>