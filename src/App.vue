<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import testpocketbase from './components/testpocketbase.vue'
import { Suspense } from 'vue'
</script>

<template>
  <main >
    <suspense>
    <RouterView />
   
 </suspense>
  </main>
</template>
