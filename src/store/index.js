import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import JsEncrypt from '@/assets/tools/jsEncryptKey.js'
import cookie from '@/assets/tools/cookie'
import axioser from '@/assets/tools/axioser'


Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  state: {
    username: null,
    isShowFilm: false,
    isShowFilmSrc: null,
    isLoaded: false,
    historyList: []
  },
  mutations: {
    setLoadState(state, status) {
      state.isLoaded = status
    },
    setShowState(state, payload) {
      state.isShowFilm = payload.status
      state.isShowFilmSrc = payload.src
    },
    setUsername(state, payload) {
      state.username = payload
    },
    setHistoryList(state, payload) {
      payload = payload.sort((a, b) => {
        return parseInt(b.time) - parseInt(a.time)
      })
      let length = state.historyList.length
      for (let i = 0; i < length; i++) {
        state.historyList.shift();
      }
      length = payload.length
      for (let i = 0; i < length; i++) {
        state.historyList.push(payload[i])
      }
    }
  },
  actions: {
    getHistory({
      state,
      commit
    }) {
      let eu = JsEncrypt.encryption(state.username);
      axios.get('http://47.102.117.99/FilmDB/doGetHistory.jsp', {
        params: {
          username: eu
        }
      }).then((data) => {
        // console.log(data.data)
        commit('setHistoryList', data.data)
        // console.log(state.historyList)
      })
    },

    onVideoClick({
      state,
      commit,
      dispatch
    }, payload) {
      if (state.isLoaded == false) {
        window.alert('请先登录')
        return
      }
      commit('setShowState', {
        status: true,
        src: payload.filmSrc
      })
      let eu = JsEncrypt.encryption(state.username);
      axios.get('http://47.102.117.99/FilmDB/doAddHistory.jsp', {
        params: {
          username: eu,
          filmName: payload.filmName,
          time: String(+new Date())
        }
      }).then((data) => {
        // console.log(data);
        dispatch('getHistory')
        // console.log(data)
      })
    },
    /**
     * 检查是否登录
     */
    checkLoaded({commit,dispatch}) {
      if (cookie.getCookie('login') === 'true') {
        axioser.sendMessage('http://47.102.117.99/FilmDB/doLogin.jsp', {
          username: JsEncrypt.encryption(cookie.getCookie('username')),
          password: JsEncrypt.encryption(cookie.getCookie('password'))
        }, (res) => {
          console.log(res);
          if (res.data.status === 'success') {
            
            commit('setLoadState', true)
            commit('setUsername', cookie.getCookie('username'))
            dispatch('getHistory')
          }
        })
      }
    }
  }

})