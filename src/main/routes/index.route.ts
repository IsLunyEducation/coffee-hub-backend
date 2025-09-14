import { FastifyInstance } from 'fastify'

import { JessicaRoute } from './jessica.route'
import { RicardoRoute } from './ricardo.route'

export const IndexRoute = (app: FastifyInstance) => {
	RicardoRoute(app)
	JessicaRoute(app)
}