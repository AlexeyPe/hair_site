<template>
  <VBox class="transition-all w-64 shadow-md hover:shadow-lg rounded">
    <NuxtImg :src="props.src" :alt="props.alt" width="250px" height="200px" class="w-full"/>
    <UDivider/>
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