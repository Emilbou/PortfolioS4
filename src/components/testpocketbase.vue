<script setup lang="ts">
import {alldata} from "../../src/backend";
const finedata = await alldata();
console.log(finedata);
</script>


<template>

<div class="container" v-for="ProjetData in finedata" :key="ProjetData.id">
    <p>{{ ProjetData.NomProjet }}</p>
    <p>{{ ProjetData.DatesProjet }}</p>
    <p>{{ ProjetData.LienProjet }}</p>
    <p>{{ ProjetData.ImageProjet }}</p>
    <p>{{ ProjetData.CoverProjet }}</p>
    <img :src="ProjetData.CoverProjet" alt="Couverture du projet"></img>
    </div>

</template>