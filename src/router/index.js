import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/view/Home'
import STATUS from '@/components/view/Status'
import SETTING from '@/components/view/Setting'

Vue.use(Router); // vue 라우터 사용

export default new Router({ // 라우팅
  mode: 'history',
	routes:[
		{
			path:'/'
			,name:Home
			,component:Home
		}
		,{
			path:'/setting'
			,component:SETTING
		}
		,{
			path:'/status'
			,component:STATUS
		}
	]
})