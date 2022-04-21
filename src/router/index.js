import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/index',
          component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue'),
          meta: { title: '系统首页' }
        }, {
          path: '/data_import',
          component: () => import(/* webpackChunkName: "index" */ '@/views/DataImport.vue'),
          meta: { title: '数据导入' }
        }, {
          path: '/application',
          component: () => import(/* webpackChunkName: "index" */ '@/views/Application.vue'),
          meta: { title: '应用' }
        }
      ]
    }
  ]
})
