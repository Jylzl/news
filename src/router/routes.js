import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

const routes = [{
	meta: {
		title: '首页',
		hidden: true
	},
	path: '/',
	name: 'news',
	component: Home
}, {
	meta: {
		title: '搜索',
		hidden: true
	},
	path: '/search',
	name: 'search',
	component: () => import('@/views/Search.vue')
}, {
	meta: {
		title: '关于',
		hidden: true
	},
	path: '/about',
	name: 'about',
	component: () => import('@/views/About.vue')
}]

export {
	routes
}