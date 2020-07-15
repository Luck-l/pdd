import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'


Vue.config.productionTip = false
import LyTab from "ly-tab"
Vue.use(LyTab)

new Vue({
  render: h => h(App),
  store,
  router,
  LyTab
}).$mount('#app')
