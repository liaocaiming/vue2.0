import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { setTitle } from './common/common'
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
		setTitle(to.meta.title)
	}
	next()
})

new Vue({
	router
}).$mount('#app')