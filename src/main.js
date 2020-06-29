import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import tools from '../tools.js'
import '../src/assets/icon/tabbar/font_nk2enrejq1p/iconfont.css'
import '../src/assets/common/common.less'
import '../src/assets/css/tubiao/iconfont.css'
import '../src/assets/css/tubiao1/iconfont.css'
import '../src/assets/css/tubiaojiuye/iconfont.css'
<<<<<<< HEAD
=======
import '../src/assets/icon/tabbar/font_nk2enrejq1p/iconfont.css'
>>>>>>> 05539762d89db00547c971e160567c212aa6066e

Vue.prototype.tools = tools
// require('../node_modules/vux/src/styles/reset.less')

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
