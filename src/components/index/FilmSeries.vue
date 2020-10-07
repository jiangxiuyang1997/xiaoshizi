<template>
  <div class="recommend">
    <p class="tip iconfont">{{ title }}</p>
    <ul class="film">
      <li v-for="item in filmArray" :key="item.filmName">
        <div class="poster">
          <img :src="'https://images.weserv.nl/?url='+item.filmImgSrc" alt="" @click="onVideoClick({filmSrc:item.filmSrc, filmName:item.filmName})">
        </div>
        <p class="film-name">{{ item.filmName }}</p>
        <p class="describe">{{ item.filmActor }}</p>
        <div class="more-desc">
          <div class="fl">
            <span>{{ item.filmName }}</span>
            <span class="score">{{ item.filmScore }}</span>
          </div>
          <p class="actor">主演: {{ item.filmActor }}</p>
          <p class="desc">{{ item.filmDesc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  import {
    mapActions
  } from 'vuex'
  export default {
    props: ['title', 'filmType'],
    data() {
      return {
        filmArray: null
      }
    },
    mounted() {
      axios.get('http://47.102.117.99/FilmDB/doFilm.jsp', {
        params: {
          type: this.filmType
        }
      }).then((data) => {
        // console.log(data.data)
        let length;
        length = this.filmType === 'recommend' ? 12 : 6
        this.filmArray = data.data.slice(0, length)
      })
    },
    methods:{
       ...mapActions(['onVideoClick'])
    }
  }
</script>

<style lang="less">
  @import '~@/assets/styles/index/filmSeries';
</style>