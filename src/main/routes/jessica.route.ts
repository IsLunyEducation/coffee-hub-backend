import { FastifyInstance } from 'fastify'

import { makeInMemoryPessoaUsecase } from '@/domain/pessoas/pessoa/pessoa.make'

export const JessicaRoute = (app: FastifyInstance) => {
	app.route({
		url: '/jessica',
		method: 'GET',

		handler(request, reply) {
			const result = makeInMemoryPessoaUsecase().execute('JESSICA')

			reply.send(result)
		},
	})
}