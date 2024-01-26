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
    <p>{{ ProjetData.DescriptionProjet }}</p>
    <img :src="'http://127.0.0.1:8090/api/files/dnjuizsmj0q2fjv/26wl0qiuy7ol5vf/' + ProjetData.CoverProjet" alt="Couverture du projet" />
    </div>

</template>