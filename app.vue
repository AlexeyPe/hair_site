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
  <UContainer as="main">
    <div class="h-dvh">
      <HBox class="h-full w-full">
        <CBox class="h-full w-full">
          <VBox>
            <p>left 1</p>
            <p>left 2</p>
          </VBox>
        </CBox>
        <CBox class="h-full w-full">
          <div class="grid grid-cols-2 gap-3" style="padding: 6dvh 0px !important;">  
            <NuxtImg src="img/natural blonde.webp" alt="блонд натуральный" height="220px"/>
            <NuxtImg src="img/natural blonde.webp" alt="блонд натуральный" height="220px"/>
            <NuxtImg src="img/natural blonde.webp" alt="блонд натуральный" height="220px"/>
            <NuxtImg src="img/natural blonde.webp" alt="блонд натуральный" height="220px"/>
          </div>
        </CBox>
      </HBox>
    </div>
    <div class="h-dvh place-content-center text-center" id="price">Цены</div>
    <div class="h-dvh place-content-center text-center" id="place">Где салон?</div>
    <div class="h-dvh place-content-center text-center" id="who_am_I">Кто я</div>
    <div class="h-dvh place-content-center text-center">Фото</div>
    <div class="h-dvh place-content-center text-center">Ссылки</div>
  </UContainer>
</template>
