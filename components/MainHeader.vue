<template>
  <header class="fixed top-0 left-0 right-0">
    <UContainer class="flex items-center backdrop-blur">
      <h1 class="tracking-tight font-medium text-xl lg:flex-1">Алексей Пе | окрашивание блонд</h1>
      <UHorizontalNavigation :links="links" class="w-min text-base"/>
      <div class="lg:flex-1 flex justify-end">
        <ButtonColorMode />
      </div>
    </UContainer>
  </header>
</template>

<script lang="ts" setup>
  const route = useRoute()
  const links = [{
      label: 'Цены',
      to:"#price"
    }, {
      label: 'Где салон?',
      to:"#place"
      // icon: 'i-heroicons-home',
    }, {
      label: 'Кто я?',
      to:"#who_am_I"
      // icon: 'i-heroicons-chart-bar',
    },
  ]
</script>