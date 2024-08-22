<script setup lang="ts">
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <MainHeader/>
  <UContainer>
    <p class="h-dvh place-content-center text-center">Введение</p>
    <p class="h-dvh place-content-center text-center" id="price">Цены</p>
    <p class="h-dvh place-content-center text-center" id="place">Где салон?</p>
    <p class="h-dvh place-content-center text-center" id="who_am_I">Кто я</p>
    <p class="h-dvh place-content-center text-center">Фото</p>
    <p class="h-dvh place-content-center text-center">Ссылки</p>
  </UContainer>
</template>
