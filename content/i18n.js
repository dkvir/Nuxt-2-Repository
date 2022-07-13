import global from "./global";
import common from "./common";
import components from "./components";
import pages from "./pages";

const data = {
  global,
  common,
  components,
  pages,
};

export default {
  seo: false,
  locales: [
    {
      code: "en",
      iso: "us",
      name: "English",
    },
  ],
  defaultLocale: "en",
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: "en",
    messages: { en: data },
  },
};
