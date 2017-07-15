// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import DeTailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
import OrderListPage from './pages/detail/orderList'
import Lodash from 'lodash'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
// Vue.use(Lodash)
Vue.use(VueResource)
let router = new VueRouter({
	mode: 'history',
	routes: [
		{							
			path: '/',				//设置主页应设
			component: IndexPage
		},
		{
			path: '/orderList',
			component: OrderListPage
		},
		{
			path: '/detail',
			component: DeTailPage,
			redirect: '/detail/analysis',     //设置访问/detail时，则自动跳转到anlysis
			children: [
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
