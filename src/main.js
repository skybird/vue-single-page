import Vue from 'vue'
import App from './App.vue'
import router from './config/router.js'

Vue.config.debug = true;  // 开启debug模式

// 创建 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  data: {
    loading: true
  },
  router: router,
  render: h => h(App)
}).$mount('#app')
