<script setup lang="ts">
import { defineProps } from 'vue'
import type { SchemaProjet } from '../types'

const props = defineProps<
  {
    isAlternate: boolean
  } & SchemaProjet
>()
</script>

<template>
  <div class="w-full flex justify-center items-center py-10">
    <div
      class="flex w-full h-fit mr-4 flex-row px-[10vw]"
      :class="{ 'flex-row-reverse': props.isAlternate }"
    >
      <img
        class="object-cover aspect-[16/9] w-1/2 rounded-xl overflow-hidden h-auto"
        :src="props.imageprojet"
        alt=""
      />
      <div class="flex flex-col w-1/2 pl-10" :class="{ 'pl-0 pr-10': props.isAlternate }">
        <p class="h-full flex items-end mb-3 text-balance">
          {{ props.descriptionprojet }}
        </p>
        <p class="w-full text-2xl mb-8">{{ props.nomprojet }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>
