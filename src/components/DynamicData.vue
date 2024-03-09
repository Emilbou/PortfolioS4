<script setup lang="ts">
import { defineProps } from 'vue'
import type { SchemaProjet } from '../types'
import { ref, onMounted } from 'vue';

defineProps<SchemaProjet>()

</script>

<template>
  <div class="bg-white">
    <div class="flex justify-between">
      <h1>{{ nomprojet || 'Nom du projet non défini' }}</h1>
      <p :v-if="scolaireprojet === false">test</p>
    </div>
  </div>
</template>