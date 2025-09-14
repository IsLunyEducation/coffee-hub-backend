import { FastifyInstance } from 'fastify'

import { makeProdPessoaUsecase } from '@/domain/pessoas/pessoa/pessoa.make'

export const RicardoRoute = (app: FastifyInstance) => {
	app.route({
		url: '/ricardo',
		method: 'GET',

		handler(request, reply) {
			const result = makeProdPessoaUsecase().execute('RICARDÃO')

			reply.send(result)
		},
	})
}