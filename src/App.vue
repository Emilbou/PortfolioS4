<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <main class="p-8 bg-blanc">
    <Header />
 
    <RouterView />
  </main>
</template>
