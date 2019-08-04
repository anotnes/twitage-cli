// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import modal from './components/templates/Modal'
import firebase from 'firebase'
import firebaseConfig from '../config/firebaseConfig'
import './assets/sass/style.scss'
import './assets/sass/anime.scss'
import './assets/sass/common.scss'
import './assets/sass/main.scss'
import './assets/sass/menu.scss'
import './assets/sass/project-overview.scss'

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  modal,
  components: { App },
  template: '<App/>'
})
