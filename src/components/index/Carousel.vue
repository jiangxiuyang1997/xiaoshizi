<template>
  <div class="carousel">
    <div class="block">
      <el-carousel>
        <el-carousel-item v-for="item in picList" :key="item.filmName">
          <img :src="item.filmImg" alt="" @click="onVideoClick({filmSrc:item.filmSrc, filmName:item.filmName})">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  import {
    mapActions
  } from 'vuex'
  export default {
    data() {
      return {
        picList: [{
            filmName: '白蛇：缘起',
            filmImg: require('@/assets/img/index/carousel/car_pic1.jpg'),
            filmSrc: 'https://zuidajiexi.net/m3u8.html?url=https%3A%2F%2Fyiyi.55zuiday.com%2F20190303%2FZRkvZAiK%2Findex.m3u8'
          },
          {
            filmName: '战狼2',
            filmImg: require('@/assets/img/index/carousel/car_pic2.jpg'),
            filmSrc: 'https://zuidajiexi.net/m3u8.html?url=https%3A%2F%2Fcn2.zuidadianying.com%2F20171102%2FSH9ZvRL7%2Findex.m3u8'
          },
          {
            filmName: '前任3：再见前任',
            filmImg: require('@/assets/img/index/carousel/car_pic3.jpg'),
            filmSrc: 'https://zuidajiexi.net/m3u8.html?url=https%3A%2F%2Fhaoa.haozuida.com%2F20180306%2F0knErL6h%2Findex.m3u8'
          },
          {
            filmName: '阿甘正传',
            filmImg: require('@/assets/img/index/carousel/car_pic4.jpg'),
            filmSrc: 'https://zuidajiexi.net/m3u8.html?url=https%3A%2F%2Ffeifei.feifeizuida.com%2F20190324%2F7818_62540231%2Findex.m3u8'
          },
          {
            filmName: '飞驰人生',
            filmImg: require('@/assets/img/index/carousel/car_pic5.jpg'),
            filmSrc: 'https://zuidajiexi.net/m3u8.html?url=https%3A%2F%2Ffeifei.feifeizuida.com%2F20190329%2F8138_4b2e8853%2Findex.m3u8'
          }
        ]
      }
    },
    methods:{
      ...mapActions(['onVideoClick'])
    }
  }
</script>

<style lang="less">
  .carousel {
    position: relative;
    z-index: 777;

    .el-carousel__container {
      height: 520px;

      .el-carousel__arrow {
        border-radius: 0;
        width: 50px;
        height: 250px;
        font-size: 50px;
      }

      .el-carousel__item {
        position: absolute;
        cursor: pointer;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    .el-carousel__button {
      width: 70px;
    }
  }
</style>