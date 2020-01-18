import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'

import routerHome from './modules/Home/router'
// import routerHello from './modules/HelloSeeding/router'

Vue.use(Router)
Vue.use(VueMeta)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
    	...routerHome,
    	// ...routerHello
    ]
  })
}