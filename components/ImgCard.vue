<template>
  <VBox class="transition-all w-64 shadow-md hover:shadow-lg rounded">
    <NuxtImg loading="lazy" :src="props.src" :alt="props.alt" width="250px"  class="w-full"/>
    <p class="mx-1 mb-1 text-wrap">{{desc}}</p>
  </VBox>
</template>

<script lang="ts" setup>
  const props = defineProps({
    'src': { type: String, required: true },
    'alt': String,
    'desc': String
  })
</script>