import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Film from '@/components/film'
import Card from '@/components/card'
import NowPlaying from '@/components/nowplaying'
import ComingSoon from '@/components/comingsoon'
import Detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      name: 'home'
    },
    {
      path: '/film',
      component: Film,
      children: [{
        path: 'now-playing',
        component: NowPlaying
      },
      {
        path: 'coming-soon',
        component: ComingSoon
      },
      {
        path: '/film',
        redirect: '/film/now-playing'
      }
      ]
    },
    {
      path: '/card',
      component: Card
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    // 重定向
    {
      path: '/',
      redirect: {name: 'home'}
    }
  ]
})
