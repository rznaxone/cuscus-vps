import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  app: {
    head: {
      title: "Cuscus - High-Performance VPS Hosting",
      meta: [
        { name: "description", content: "Deploy robust, reliable, and lightning-fast Virtual Private Servers in seconds with Cuscus." }
      ],
    }
  },

  devtools: {
    enabled: true
  },

  css: [
    "~/assets/css/tailwind.css"
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    "@nuxt/image",
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],

  icon: {
    serverBundle: {
      collections: ["lucide", "mdi"],
    }
  },
})