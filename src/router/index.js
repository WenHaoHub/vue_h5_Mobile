import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)


const routes = [
  {
      path:'/',
      redirect:'/home/home1'  // 重定向
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
			{
				path: "home1",
				name: "home1",
				component: () => import('../views/homePage/home1.vue'),
				props: true,
				meta: { title: "公共服务" },
      },
			{
				path: "home2",
				name: "home2",
				component: () => import('../views/homePage/home2.vue'),
				props: true,
				meta: { title: "人才政策" },
      },
			{
				path: "home3",
				name: "home3",
				component: () => import('../views/homePage/home3.vue'),
				props: true,
				meta: { title: "高端人才" },
      },
			{
				path: "home4",
				name: "home4",
				component: () => import('../views/homePage/home4.vue'),
				props: true,
				meta: { title: "用户中心" },
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/urltest',
    name: 'urltest',
    component: () => import('../views/homePage/urlTest.vue'),
    meta:{
      title:'测试页面',
     }
  },
  {
    path: '/skipPage',
    name: 'skipPage',
    component: () => import('../views/homePage/twoPage/skipPage'),
    meta:{
      title:'出具证明',
     }
  },
  {
    path: '/health',
    name: 'health',
    component: () => import('../views/homePage/twoPage/health.vue'),
    meta:{
     title:'医疗健康',
    }
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/homePage/twoPage/education.vue'),
    meta:{
     title:'子女教育',
    }
  },
  {
    path: '/textAffix',
    name: 'textAffix',
    component: () => import('../views/homePage/twoPage/textAffix.vue'),
    meta:{
     title:'文章详情-附件',
    }
  },
  {
    path: '/textImg',
    name: 'textImg',
    component: () => import('../views/homePage/twoPage/textImg.vue'),
    meta:{
     title:'文章详情-图片',
    }
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/homePage/twoPage/success.vue'),
    meta:{
     title:'申请成功',
    }
  },
]

const router = new VueRouter({
  routes,
  // mode: 'history',
  mode: 'hash',
  // base: '/front/',
})

export default router
