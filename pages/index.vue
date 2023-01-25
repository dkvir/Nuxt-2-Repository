<template>
  <div class="home-page">
    <h1>home-page</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("pages/home", ["homeData"]),
  },
  mounted() {
    console.log(this.homeData.title);
  },
  async fetch({ store }) {
    await Promise.all([store.dispatch("pages/home/getHomeData")]);
  },
};
</script>

<style lang="scss" scoped></style>
