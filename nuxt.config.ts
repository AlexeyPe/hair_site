// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@nuxt/image'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en' },
      // noscript: [
      //   {
      //     children: `<div><img src="https://mc.yandex.ru/watch/98205847" style="position:absolute; left:-9999px;" alt="" /></div>`,
          
      //   },
      // ]
    },
  },
})