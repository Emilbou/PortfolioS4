<script setup lang="ts">
import { supabase } from '../supabase'
import CountComponentChild from '../components/CountComponentChild.vue';

const { data: counter, error } = await supabase
    .from('counter')
    .select('*')
console.log(counter)

</script>

<template>
   
        <div class="" v-for="count in counter" :key="count.id">
            <CountComponentChild v-bind="count" />
        </div>

</template>