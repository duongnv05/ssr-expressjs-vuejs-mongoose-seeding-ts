import Vue from 'vue'
import Vuex from 'vuex'

// import the modules of vuex
import home from './modules/home'
import helloSeeding from './modules/helloSeeding'

// import constant
import { DATA_PREFETCH_SERVER_INIT } from './const'

import config from '../../config'

Vue.use(Vuex);

var _config: any = config,
	isProduction: any = _config.isProduction

export function createStore() {
	return new Vuex.Store({
		strict: !{isProduction},

		modules: {
			// modules vuex
			home,
			helloSeeding
		},
		mutations: {
			[DATA_PREFETCH_SERVER_INIT](state: any, payload = {}, module = '') {
				let initialData: any = {}
				for(let key in payload) {
					if(payload.hasOwnProperty(key)) {
						initialData[key] = payload.key
					}
					if(module != '') {
						state[module] = {...initialData};
					} else {
						state = {...initialData}
					}
				}
			}
		}
	})
}