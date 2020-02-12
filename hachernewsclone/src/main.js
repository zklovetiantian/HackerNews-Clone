import Vue from 'vue'
import App from './App.vue'
//导入公共样式
import 'style/commen.css'
import router from 'router/router.js'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.config.productionTip = false
import store from './store/store.js';

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
