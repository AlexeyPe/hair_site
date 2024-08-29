<template>
  <header class="fixed top-0 left-0 right-0 dark:bg-[#1212125e]">
    <UContainer class="flex items-center backdrop-blur max-md:flex-col">
      <h1 class="tracking-tight font-normal text-base md:w-1/3 max-md:mt-1.5">Алексей Пе | окрашивание блонд</h1>
      <HBox class="w-2/3">
        <UHorizontalNavigation :links="links" class="w-full justify-center text-base" :ui="{before:'', base:'p-2 pb-2.5', label:'text-slate-950 dark:text-white tracking-tight font-normal text-base'}">
          <!-- <template #badge><UBadge color="black"></UBadge></template> -->
          <template #default="{link}">
            <span class="w-min whitespace-nowrap text-black dark:text-white">{{ link.label }}</span>
          </template>
        </UHorizontalNavigation>
        <div class="w-full flex justify-end">
          <ButtonColorMode />
        </div>
      </HBox>
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
      label: 'Фото',
      to:"#photo"
      // icon: 'i-heroicons-chart-bar',
    },
  ]
</script>