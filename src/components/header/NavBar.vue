<template>
  <div class="nav-bar">
    <div class="message iconfont"></div>
    <div class="history iconfont" @mouseenter="enterView(1)" @mouseleave="leaveView(1)">
      <div class="pop-box" v-if="viewList[1]">
        <ul class="his-view">
          <li v-for="(item, index) in historyList" :key="index"
            @click="onVideoClick({filmSrc:item.filmSrc, filmName:item.filmName})">
            <img :src="'https://images.weserv.nl/?url='+item.filmImgSrc" alt="">
            <div class="history-info">
              <p class="history-name">
                {{ item.filmName }}
              </p>
              <p class="history-time">
                {{ parseTime(parseInt(item.time)) }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="avatar" @mouseenter="enterView(2)" @mouseleave="leaveView(2)">
      <img src="@/assets/img/header/avatar_login.png" alt="avatar" v-if="isLoaded">
      <img src="@/assets/img/header/avatar.png" alt="avatar" v-else>
      <div class="load" :class="[isLoaded ? 'exit' : 'pop-box']" v-if="viewList[2]">
        <div class="load-wrap">
          <template v-if="!isLoaded">
            <p class="welcome">注册加入小柿子</p>
            <div class="load-btn" @click="onClick();onLoadingClick()">
              登录 / 注册
            </div>
          </template>
          <template v-else>
            <div @click="onLogoutClick">注销</div>
          </template>
        </div>
      </div>
    </div>
    <m-load v-if="isLoading" />
  </div>
</template>
<script>
  import MLoad from '@/components/header/load.vue'
  import cookie from '@/assets/tools/cookie.js'
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    mounted() {
      this.checkLoaded();
      this.getHistory();
    },
    data() {
      return {
        isLoading: false,
        viewList: [],
        viewName: ['message', 'history', 'avatar']
      }
    },

    computed: {
      ...mapState(['historyList', 'isLoaded', 'username'])
    },
    methods: {
      ...mapMutations(['setLoadState', 'setUsername', 'delHistory']),
      ...mapActions(['getHistory', 'onVideoClick', 'checkLoaded']),
      enterView(index) {
        this.onClick();
        this.$set(this.viewList, index, true)
      },
      leaveView(index) {
        this[this.viewName[index]] = setTimeout(() => {
          this.$set(this.viewList, index, false)
        }, 200)
      },
      onClick() {
        this.viewName.forEach((ele, index) => {
          clearTimeout(this[ele])
          this.$set(this.viewList, index, false)
        })
      },
      onLoadingClick() {
        this.isLoading = true;
      },
      onLogoutClick() {
        this.setLoadState(false)
        this.delHistory()
        cookie.delCookie('login')
        cookie.delCookie('username')
        cookie.delCookie('password')
        this.$message({
          type: 'info',
          message: '登出成功！'
        })
        this.onClick();
      },
      parseTime(time) {
        let date = new Date(time)
        let curDate = new Date()
        // console.log(date.getDate(), curDate.getDate())
        if (date.getDate() !== curDate.getDate()) {
          return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        } else {
          let min = date.getMinutes()
          let sec = date.getSeconds()
          min < 10 && (min = '0' + min)
          sec < 10 && (sec = '0' + sec)
          return date.getHours() + ':' + min + ':' + sec
        }
      }
    },
    components: {
      MLoad,
    }
  }
</script>
<style lang="less">
  @import '~@/assets/styles/header/nav';
</style>