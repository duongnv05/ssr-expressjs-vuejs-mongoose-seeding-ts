import routes from './routes'

export default [
	{ path: routes.helloSeeding, component: () => import('./components/HelloSeeding.vue') }
]