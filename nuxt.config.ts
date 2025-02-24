// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-02-11",
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "ぴーなっつのポートフォリオ",
      meta: [
        {
          name: "description",
          content: "ぴーなっつのポートフォリオサイトです。",
        },
        { property: "og:title", content: "ぴーなっつのポートフォリオ" },
        {
          property: "og:description",
          content: "ぴーなっつのポートフォリオサイトです。",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://portfolio-psi-eight-21.vercel.app/",
        },
        {
          property: "og:image",
          content: "https://portfolio-psi-eight-21.vercel.app/ogp.jpg",
        },
        { property: "og:site_name", content: "ぴーなっつのポートフォリオ" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
