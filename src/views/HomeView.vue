<script setup lang="ts">
import { computed } from "vue";

const query = computed(() => {
  return document.location.href.split("query:")[1];
});
</script>

<template>
  <main>
    <h1>Vue Router Query Params Test</h1>
    <h1 class="green">Param: {{ query }}</h1>
  </main>
</template>
