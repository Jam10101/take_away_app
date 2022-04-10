/*
路由器模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'

//  添加在Pages页面下的各个路由路径，注意路径
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

//  配置各路由的路径，注意各个path都是小写字母
//  redirect是重定向的意思，表示默认情况下显示./msite文件下的路由
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/search',
      component: Search,
      // 因为只有search、msite、order和profile页面是需要FooterGuide这个组件的，因此添加下面的showFooter语句
      // 然后在App.vue页面的< FooterGuide >标签内增加这句： v-show="$route.meta.showFooter" ，表示FooterGuide在showFooter为true时才显示
      meta: {
        showFooter: true
      }
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
