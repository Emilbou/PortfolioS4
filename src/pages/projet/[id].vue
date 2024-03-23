<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'
import DynamicData from '@/components/DynamicData.vue'
import FooterPortfolio from '../../components/FooterPortfolio.vue'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const route = useRoute()
const projet = ref({})

onMounted(async () => {
  const { data, error } = await supabase
    .from('Projet')
    .select('*')
    .eq('id', route.params.id)
    .single()

  if (error) {
    console.error('Erreur lors de la récupération du projet:', error)
  } else {
    projet.value = data
  }

  const timelinefooter = gsap.timeline({
    scrollTrigger: {
      trigger: '#footer-portfolio',
      start: 'top 80%', // L'animation commencera lorsque le haut du footer sera à 80% du haut du viewport
      end: 'bottom top', // L'animation se terminera lorsque le bas du footer atteindra le haut du viewport
      toggleActions: 'play reverse play reverse',
      markers: true
    }
  })

  timelinefooter.to('.footergsapclass', {
    duration: '0.3',
    width: '95%',
    borderRadius: 50,
    y: '0',
    paddingBottom: ''
  })
})
</script>

<template>
  <div class="w-full flex items-center justify-center overflow-x-hidden">
    <div class="footergsapclass w-full h-full bg-white pb-80">
      <DynamicData :id_Projetprops="route.params.id" />
    </div>
  </div>
  <FooterPortfolio id="footer-portfolio"></FooterPortfolio>
</template>
