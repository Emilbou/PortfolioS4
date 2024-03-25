<script setup lang="ts">
import { supabase } from '../../supabase'
import { useRoute } from 'vue-router'
import DynamicData from '../../components/DynamicData.vue'
import FooterPortfolio from '../../components/FooterPortfolio.vue'
const route = useRoute('/projet/[id]')
console.log(route.params.id)
const { data: unseulprojetid, error: errordanslecode } = await supabase
  .from('Projet')
  .select('*')
  .eq('id', route.params.id)
  .single()
</script>
<template>
  <div class="bg-white pt-10 flex justify-center">
    <RouterLink class="bg-white border p-5 rounded-full" to="/"
      ><img class="w-20" src="/public/favicon.ico" alt=""
    /></RouterLink>
  </div>
  <DynamicData :id_Projetprops="route.params.id[0]" />

  <FooterPortfolio></FooterPortfolio>
</template>
