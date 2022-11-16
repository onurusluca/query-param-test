<script setup lang="ts">
//import route
import { useRouter } from "vue-router";
import { computed } from "vue";

//define router
const router = useRouter();

const query = computed(() => {
  return document.location.href.split("query:")[1];
});
let queryParam = query.value;

function goToRoute() {
  console.log("gorouter");

  router.push({ path: `query${queryParam}` });
}
</script>

<template>
  <div class="about">
    <h1>QUERY PAGE</h1>
    <h1 class="green">Param: {{ query }}</h1>
    <input type="text" name="" id="" v-model="queryParam" />
    <button @click="goToRoute">Go</button>
  </div>
</template>

<style></style>
