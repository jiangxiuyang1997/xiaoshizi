<template>
  <div class="header">
    <span class="logo">
      <img src="@/assets/img/header/logo.png" alt="">
    </span>
    <m-search/>
    <nav-bar />
  </div>
</template>
<script>
  import MSearch from "@/components/header/Search.vue"
  import NavBar from "@/components/header/NavBar.vue"
  export default {
    components: {
      MSearch,
      NavBar,
    }
  }
</script>
<style lang="less">
  @import '~@/assets/styles/header/index.less';
</style>