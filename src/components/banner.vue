<template>
  <div class="banner">
    <appSearchBar></appSearchBar>
  </div>
</template>

<script>
import appSearchBar from "@/components/searchbar.vue";

export default {
  name: "homeBanner",
  components: {
    appSearchBar,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables";

.banner {
  background: url("../assets/banner.jpg");
  background-size: cover;
  min-height: 441px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  //   fix the space left from background image
  &::after {
    content: "";
    height: 100%;
    width: 12px;
    background-color: black;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
