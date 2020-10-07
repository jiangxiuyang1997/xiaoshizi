<template>
  <div>
    <el-container>
      <el-header height="">
        <m-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="">Footer</el-footer>
    </el-container>
  </div>

</template>
<script>
  import MHeader from '@/components/header/Index.vue'
  export default {
    components: {
      MHeader,
    }
  }
</script>
<style lang="less">
  .el-header,
  .el-main,
  .el-footer {
    padding: 0 !important;
  }

  .el-main {
    overflow: hidden !important;
  }
</style>