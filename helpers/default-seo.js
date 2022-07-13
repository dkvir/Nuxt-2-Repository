import Vue from "vue";

export default function (context) {
  Vue.prototype.defaultSeo = function () {
    return {
      title: this.$t("global.seo.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("global.seo.description"),
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: this.$route.fullPath,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("global.seo.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("global.seo.description"),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.$t("global.seo.img"),
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: this.$route.fullPath,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: this.$route.fullPath,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("global.seo.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("global.seo.description"),
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.$t("global.seo.img"),
        },
      ],
      htmlAttrs: { lang: this.$i18n.locale },
    };
  };
}
