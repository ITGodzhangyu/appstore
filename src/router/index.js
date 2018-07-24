import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/appstore',
    name: '应用商城',
    hidden: true,
    children: [{
      path: 'appstore',
      component: () => import('@/views/appstore/index')
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/appallstore',
    name: '应用商城',
    hidden: true,
    children: [{
      path: 'appallstore',
      meta: { title: '全部应用' },
      name: '/全部应用',
      component: () => import('@/views/appallstore/index')
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/myapp',
    name: '应用商城',
    hidden: true,
    children: [{
      path: 'myapp',
      meta: { title: '我的应用' },
      name: '/我的应用',
      component: () => import('@/views/myapp/index')
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/detailpages',
    name: '应用商城',
    hidden: true,
    children: [{
      path: 'detailpages',
      meta: { title: '关系数据库中间件' },
      name: '/关系数据库中间件',
      component: () => import('@/views/detailpages/index')
    }]
  },
	{
	    path: '/',
	    component: Layout,
	    redirect: '/appgrounding',
	    name: '应用商城',
	    hidden: true,
	    children: [{
	      path: 'appgrounding',
	      meta: { title: '应用上架' },
	      name: '/应用上架',
	      component: () => import('@/views/appgrounding/index')
	    }]
	},
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

