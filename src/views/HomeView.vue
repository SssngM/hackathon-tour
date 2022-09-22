<template>
  <div class="home">
    <appNav></appNav>
  </div>
</template>

<script>
// @ is an alias to /src
import appNav from "@/components/nav.vue";

export default {
  name: "HomeView",
  components: {
    appNav,
  },
};
</script>
