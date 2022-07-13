import i18n from "./content/i18n";

const favicon = require("./config/favicon");
const plugins = require("./config/plugins");

require("dotenv").config();

export default {
  server: {
    port: process.env.PORT || 3000,
    host: "127.0.0.1",
  },
  env: {
    baseUrl: process.env.BASE_URL || "localhost",
    mode: process.env.NODE_ENV || "development",
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...favicon.meta,
    ],
    link: [...favicon.links],
    script: [
      { src: "/js/gsap-bonus/split-text.min.js" },
      { src: "/js/threex.domevents.js" },
    ],
  },
  scrollToTop: true,
  router: {
    scrollBehavior: (to, from, savedPosition) => new Object({ x: 0, y: 0 }),
  },
  loading: false,
  css: ["~/assets/sass/style.scss"],
  plugins,
  modules: [
    ["@nuxtjs/i18n", i18n],
    "@nuxtjs/style-resources",
    "@nuxtjs/dotenv",
    "@nuxtjs/pwa",
    [
      "@nuxtjs/axios",
      {
        baseURL: process.env.API_ROOT,
        withCredentials: false,
      },
    ],
    "@nuxtjs/device",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  robots: {
    UserAgent: "*",
    Disallow: "",
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
  },
  pwa: {
    icon: {
      source: "./static/images/icon.png",
    },
    meta: {
      title: "Holy Motors",
      author: "Holy Motors",
    },
    manifest: {
      name: "Holymotors",
      short_name: "HM",
      lang: "en",
      start_url: "/",
      theme_color: "#000016",
    },
    workbox: {
      enabled: process.env.NODE_ENV === "production" ? true : false,
    },
  },
  styleResources: {
    scss: ["~/assets/sass/app.scss"],
  },
  serverMiddleware: [{ path: "api", handler: "~/api/app.js" }],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      },
    },
  },
  build: {
    extractCSS: process.env.NODE_ENV === "production" ?? false,
    cssSourceMap: process.env.NODE_ENV === "production" ? false : true,
    parallel: false,
    optimization: {
      splitChunks: {
        chunks: "async",
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: false,
          },
        },
      },
    },
    transpile: ["gsap"],
    postcss: {
      plugins: {
        cssnano: {
          preset: ["default"],
        },
      },
    },
  },
  buildModules: ["nuxt-gsap-module"],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },
};
