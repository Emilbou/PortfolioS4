<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import FooterPortoflio from './components/FooterPortfolio.vue'
import { Suspense } from 'vue'
</script>

<template>
  <main class="bg-[C0DFA1] ">
    <suspense>
    <RouterView />
 </suspense>
  </main>
</template>
