<template>
    <div>
        <p
    class="mt-6 text-pretty italic font-medium text-text">{{caractereAleatoire}}</p>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Caracteristiques from '../../src/json/DescriptionIterations.json';

const caractereAleatoire = ref('');

onMounted(() => {
    selectionnerCaractereAleatoire();
});

const selectionnerCaractereAleatoire = () => {
    const index = Math.floor(Math.random() * Caracteristiques.caracteristiques.length);
    caractereAleatoire.value = Caracteristiques.caracteristiques[index];
};
</script>
