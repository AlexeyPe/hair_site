<script setup lang="ts">
  const toast = useToast()
  useSeoMeta({
    title: 'Алексей Пе - Окрашивание блонд',
    ogTitle: 'Алексей Пе - Окрашивание блонд',
    description: 'Алексей Пе - Окрашивание блонд, тотал блонд, стальной блонд',
    ogDescription: 'Алексей Пе - Окрашивание блонд, тотал блонд, стальной блонд',
    // ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })
  useHead({
    script: [ { innerHTML: "(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\r\n   m[i].l=1*new Date();\r\n   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\r\n   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\r\n   (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\r\n\r\n   ym(98205847, \"init\", {\r\n        clickmap:true,\r\n        trackLinks:true,\r\n        accurateTrackBounce:true,\r\n        webvisor:true\r\n   });" } ],
    noscript: [
    {
      children: `<div><img src="https://mc.yandex.ru/watch/98205847" style="position:absolute; left:-9999px;" alt="" /></div>`, body: true
    }
  ]
  })

  async function copy_adr() {
    await navigator.clipboard.writeText('Екатеринбург, Улица 8 Марта, 121, салон Cherry')
      .then(() => {
        toast.add({
          title: 'Адрес скопирован',
          color:'gray',
          ui: {
            background:'bg-white dark:bg-black',
          }
        })
    })
}

</script>

<template>
  <MainHeader/>
  <UContainer as="main" class="snap-y">
    <div class="h-min md:h-dvh max-md:min-h-[600px] content-center">
      <HBox class="h-full w-full">
        <CBox class="h-full w-full">
          <VBox>
            <h2 class="text-3xl font-medium my-6">Лучшее окрашивание в блонд</h2>
            <ul class="list-disc list-inside">
              <li>Тотал блонд / Стальной / Натуральный / т.д.</li>
              <li>Работаю в салоне у м.Чкаловская</li>
              <!-- <li>Дипломированный специалист, занимаюсь блондом</li> -->
              <li>Запись в тг и ватсап</li>
            </ul>
            <HBox class="my-5">
              <ButtonTG/>
              <ButtonW class="ml-2"/>
            </HBox>
            <a href="#price" class="text-sm underline font-normal ">Показать цены</a>
          </VBox>
        </CBox>
        <CBox class="h-full w-full max-md:hidden">
          <div class="grid grid-cols-2 gap-3" style="padding: 6dvh 0px !important;">  
            <NuxtImg src="img/natural blonde.webp" alt="блонд натуральный" width="220px" height="220px"/>
            <NuxtImg src="img/natural blonde.webp" alt="блонд натуральный" width="220px" height="220px"/>
            <NuxtImg src="img/natural blonde.webp" alt="блонд натуральный" width="220px" height="220px"/>
            <NuxtImg src="img/natural blonde.webp" alt="блонд натуральный" width="220px" height="220px"/>
          </div>
        </CBox>
      </HBox>
    </div>
    <div class="h-min md:h-dvh max-md:min-h-[600px] content-center" id="price">
      <VBox>
        <UDivider class="py-12 md:h-32 max-md:pt-20 max-md:pb-8 text-xl">Цены</UDivider>
        <p class="text-xl mb-3">Окрашивание корней — хххх руб.</p>
        <p class="text-xl mb-2">Окрашивание всей длины:</p>
        <p class="text-lg ">ㅤㅤДлина до подбородка — хххх руб.</p>
        <p class="text-lg ">ㅤㅤДлина около плеч — хххх руб.</p>
        <p class="text-lg ">ㅤㅤДлина около лопаток — хххх руб.</p>
        <p class="mt-4">— В стоимость входит стрижка кончиков(по пожеланию, для длинных), сушка и простая укладка, уходовые средства во время мытья головы и укладки.</p>
        <p class="mb-4">— Цены одинаковы для всех оттенков(Тотал блонд / Стальной / т.д.).</p>
        <VBox class="mt-12 ">
          <HBox class="mb-1">
            <ButtonTG/>
            <ButtonW class="ml-2"/>
          </HBox>
          <p>Что бы записаться напишите мне в тг или ватсап</p>
        </VBox>
      </VBox>
    </div>
    <div class="h-min md:h-dvh" id="place">
      <VBox>
        <UDivider class="py-12 md:h-32 max-md:pt-20 max-md:pb-8 text-xl">Где салон?</UDivider>
        <UButton
            @click="copy_adr()"
            label="Екатеринбург, Улица 8 Марта, 121, салон Cherry"
            color="black"
            variant="link"
            icon="i-heroicons-clipboard-document"
            class="mb-2 w-fit"
            />
          <HBox class="gap-1 max-md:flex-col">
            <iframe title="карта расположения салона" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.581800566313!2d60.60902666858604!3d56.81025832309467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16fa82b188ae7%3A0xc3871d48ad6b839c!2z0JHRjNGO0YLQuC3QmtC-0LLQvtGA0LrQuNC90LMgQ2hlcnJ5!5e1!3m2!1sru!2sru!4v1724447634591!5m2!1sru!2sru" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full"></iframe>
            <NuxtImg src="img/salon 1.jpg" alt="фото салона" width="450px" class="w-full h-fit self-center"/>
            <NuxtImg src="img/salon 2.jpg" alt="фото салона" width="260px" class="h-fit self-center max-md:hidden"/>
          </HBox>
      </VBox>
    </div>
    <div class="h-min md:h-dvh" id="photo">
      <VBox>
        <UDivider class="py-12 md:h-32 max-md:pt-20 max-md:pb-8 text-xl">Фото</UDivider>
        <HBox class="mx-4 gap-2 md:gap-4 max-md:grid max-md:grid-cols-2 max-md:mb-32">
          <ImgCard src="img/blonde pink 2.jpg" alt="блонд розовый" desc="Окрашивание корней + смена тона, блонд розовый"/>
          <ImgCard src="img/total blonde 3.png" alt="тотал блонд" desc="Окрашивание всей длины, тотал блонд"/>
          <ImgCard src="img/natural blonde.webp" alt="блонд натуральный" desc="Окрашивание всей длины, натуральный блонд"/>
          <ImgCard src="img/total blonde 1.webp" alt="тотал блонд" desc="Окрашивание корней"/>
          <ImgCard src="img/total blonde 2.jpg" alt="стальной блонд" desc="Окрашивание корней"/>
        </HBox>
      </VBox>
    </div>
  </UContainer>
  <UNotifications />
</template>