<template>
  <div class="wrap">
    <com-header></com-header>
    <h1>{{ msg }}</h1>
    <ul>
        <li><router-link to="/first">第一页</router-link></li>
        <li><router-link to="/second">第二页</router-link></li>
        <li><router-link to="/help">单独页</router-link></li>
    </ul>
    <router-view class="view"></router-view>
    <com-footer></com-footer>
    <com-loading v-if="loading"></com-loading>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Loading from './components/loading.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: false
    }
  },
  components:{
    comHeader: Header,
    comFooter: Footer,
    comLoading: Loading
  }
}
</script>

<style>
  .wrap {
    max-width: 640px;
    margin: 0 auto;
  }
</style>
