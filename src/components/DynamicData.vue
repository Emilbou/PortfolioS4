<script setup lang="ts">
import { defineProps } from 'vue'
import type { SchemaProjet } from '../types'
defineProps<SchemaProjet>()
</script>

<template>


<div class="bg-white">
    <div class="flex justify-between">
        
        <h1> {{ nomprojet }}</h1>
        <p v-if="scolaireprojet ?? false">test</p>
    </div>




</div>




</template>