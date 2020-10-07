<template>
  <div class="film-view" v-if="isShowFilm" :style="{height: clientHeight + 'px', width: clientWidth + 'px'}">
    <div class="video-container">
      <div class="exit iconfont" @click="onCloseClick">&#xe61f;</div>
      <iframe class="video" :src="isShowFilmSrc" scrolling="no" border="0" frameborder="no" framespacing="0"
        allowfullscreen="true"></iframe>
    </div>
  </div>
</template>
<script>
  import {
    mapState,
    mapMutations,
  } from 'vuex'
  export default {
    mounted() {
      window.onresize = () => {
        this.clientHeight = document.documentElement.clientHeight
        this.clientWidth = document.documentElement.clientWidth
      }
    },
    data() {
      return {
        clientHeight: document.documentElement.clientHeight,
        clientWidth: document.documentElement.clientWidth
      }
    },
    computed: {
      ...mapState(['isShowFilm', 'isShowFilmSrc'])
    },
    methods: {
      ...mapMutations(['setShowState']),
      onCloseClick() {
        this.setShowState({
          status: false,
          src: null
        })
      }
    }
  }
</script>
<style lang="less">
  @import '~@/assets/styles/index/filmView';
</style>