import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import {
  store
} from "@/store/index.js";
import 'amfe-flexible';
// 引入vantUI
import "@/plugins/vant/vant.js";
Vue.config.productionTip = false

import global from "@/utils/global" //全局方法
Vue.use(global)

import '@/utils/permissions' //全局路由钩子

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')