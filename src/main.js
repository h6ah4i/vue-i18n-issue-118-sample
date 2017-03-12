import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import HomeScreen from './HomeScreen.vue'
import DetailScreen from './DetailScreen.vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueI18n)


const router = new VueRouter({
  base: __dirname,
  routes: [
    { name: 'home', path: '/', component: HomeScreen },
    { name: 'detail', path: '/detail', component: DetailScreen },
  ]
})

const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  actions: {
  },
  mutations: {
  },
})

sync(store, router)

const i18n = new VueI18n({
  locale: 'ja',
  messages: {
    ja: {
      home_screen_text: 'This is a HOME screen',
      detail_screen_text: 'This is a DETAIL screen',
    }
  }
})

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
