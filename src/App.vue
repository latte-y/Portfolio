<template>
  <div>
    <NavBar />
    <router-view />
    <FooterBlock />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import FooterBlock from "@/components/FooterBlock.vue"

export default {
  components: {
    NavBar,
    FooterBlock,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}
body {
  margin: 0;
}
</style>
