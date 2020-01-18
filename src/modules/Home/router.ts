import routes from './routes'

const router = [
	{ path: routes.home, component: () => import('./components/Home.vue') }
]

export default router