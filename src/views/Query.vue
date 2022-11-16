<script setup lang="ts">
import { computed } from "vue";

const query = computed(() => {
  return document.location.href.split("query:")[1];
});
</script>

<template>
  <div class="about">
    <h1>QUERY PAGE</h1>
    <h1 class="green">Param: {{ query }}</h1>
    <input type="text" name="" id="" v-model="query" />
  </div>
</template>

<style></style>
