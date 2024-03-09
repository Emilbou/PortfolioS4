<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { supabase } from '@/supabase'
const showElement = ref(false)
const WordpressShow = ref(false)
const VuejsShow = ref(false)
const TailwindcssShow = ref(false)
const HtmlShow = ref(false)
const CssShow = ref(false)

// Est-ce un projet scolaire ?
supabase
  .from('Projet')
  .select('scolaireprojet')
  .then(({ data }) => {
    if (data) {
      showElement.value = false 
      data.forEach(row => {
        showElement.value = row.scolaireprojet ?? false
        console.log(`ID ${row.id} : showElement = ${showElement.value}`)
      })
    }
  })
  .catch(console.error)

  // Quelles technos ?
  supabase
  .from('Projet')
  .select('Wordpress')
  .then(({ data }) => {
    if (data) {
      WordpressShow.value = false 
      data.forEach(row => {
        WordpressShow.value = row.Wordpress?? false
        console.log(`ID ${row.id} : WordpressShow = ${WordpressShow.value}`)
      })
    }
  })
  supabase
  .from('Projet')
  .select('Vuejs')
  .then(({ data }) => {
    if (data) {
      VuejsShow.value = false 
      data.forEach(row => {
        VuejsShow.value = row.Vuejs?? false
        console.log(`ID ${row.id} : VuejsShow = ${VuejsShow.value}`)
      })
    }
  })
  supabase
  .from('Projet')
  .select('Tailwindcss')
  .then(({ data }) => {
    if (data) {
      TailwindcssShow.value = false 
      data.forEach(row => {
        TailwindcssShow.value = row.Tailwindcss?? false
        console.log(`ID ${row.id} : TailwindcssShow = ${TailwindcssShow.value}`)
      })
    }
  })
  supabase
  .from('Projet')
  .select('Html')
  .then(({ data }) => {
    if (data) {
      HtmlShow.value = false 
      data.forEach(row => {
        HtmlShow.value = row.Html?? false
        console.log(`ID ${row.id} : HtmlShow = ${HtmlShow.value}`)
      })
    }
  })
  supabase
  .from('Projet')
  .select('Css')
  .then(({ data }) => {
    if (data) {
      CssShow.value = false 
      data.forEach(row => {
        CssShow.value = row.Css?? false
        console.log(`ID ${row.id} : CssShow = ${CssShow.value}`)
      })
    }
  })
</script>

<template>

    
        <div>  
          <p v-if="WordpressShow === null">Chargement...</p>
                <p v-else-if="WordpressShow === true">avec wordpress</p>
                <p v-else>pas de wordpress</p>
        </div>
        <div>  
          <p v-if="VuejsShow === null">Chargement...</p>
                <p v-else-if="VuejsShow === true">avec Vuejs</p>
                <p v-else>pas de Vuejs</p>
        </div>
        <div>  
          <p v-if="TailwindcssShow === null">Chargement...</p>
                <p v-else-if="TailwindcssShow === true">avec Tailwindcss</p>
                <p v-else>pas de Tailwindcss</p>
        </div>
        <div>  
          <p v-if="HtmlShow === null">Chargement...</p>
                <p v-else-if="HtmlShow === true">avec Html</p>
                <p v-else>pas de Html</p>
        </div>
        <div>  
          <p v-if="CssShow === null">Chargement...</p>
                <p v-else-if="CssShow === true">avec Css</p>
                <p v-else>pas de Css</p>
        </div>
</template>