<script setup lang="ts">
import { defineProps } from 'vue'
import type { SchemaCounter } from '../types'
defineProps<SchemaCounter>()
</script>

<template>

        <p class="mt-2 text-2xl">{{numberofcount }}</p>

</template>