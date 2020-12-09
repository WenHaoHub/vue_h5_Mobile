import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/normalize.css'
import 'lib-flexible'//rem单位转换
import Vant from 'vant';
import 'vant/lib/index.css';
import less from 'less'
Vue.use(less)
Vue.use(Vant);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {//标题
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
