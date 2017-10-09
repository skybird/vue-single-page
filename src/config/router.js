import Vue from 'vue';
import VueRouter from 'vue-router';
import First from '../components/first.vue'
import Second from '../components/second.vue'
import Help from '../page/help.vue'

Vue.use(VueRouter);

const routes = [
  {
      path: '/first',
      component: First
  },
  {
    path: '/second',
    component: Second
  },
  {
    path: '/help',
    component: Help
  }
];

// 创建路由器实例
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
