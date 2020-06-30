import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import tools from '../tools.js'
import '../src/assets/common/common.less'
import '../src/assets/css/tubiao/iconfont.css'
import '../src/assets/css/tubiao1/iconfont.css'
import '../src/assets/css/tubiaojiuye/iconfont.css'
import '../../school_project/src/assets/css/font_sw40geay92/iconfont.css'
Vue.prototype.tools = tools
// require('../node_modules/vux/src/styles/reset.less')

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
