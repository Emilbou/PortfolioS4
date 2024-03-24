<script setup lang="ts">
import { supabase } from '../supabase'
const props = defineProps<{
  id_Intro: number
}>()

const { data: Introdata, error } = await supabase
  .from('Intro')
  .select('*')
  .eq('id', props.id_Intro)
  .single()
</script>

<template>
  <p>{{ Introdata.phrase }}</p>
</template>
