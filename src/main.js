import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import FastClick from 'fastclick'
import VueLoazyLoad from 'vue-lazyload'
Vue.prototype.$bus = new Vue({})
Vue.config.productionTip = false
Vue.use(VueLoazyLoad)
FastClick.attach(document.body)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
