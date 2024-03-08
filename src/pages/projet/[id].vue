<script setup lang="ts">
import {ref} from "@vue/reactivity"
import { supabase } from "@/supabase"
import CardCarrousel from "@/components/CardCarrousel.vue"
const basket = ref({})
defineProps<{
    id: string;
}>();


</script>
<template>
    <CardCarrousel></CardCarrousel>
</template>