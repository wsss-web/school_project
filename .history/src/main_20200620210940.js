import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import tools from '../tools.js'

Vue.prototype.tools = tools
// require('../node_modules/vux/src/styles/reset.less')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
