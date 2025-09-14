import { InMemoryPessoasRepository, SQLPessoasRepository } from '@/repositories/pessoas-repository'

import { PessoaUsecase } from './pessoa.usecase'

export function makePessoaUsecase() {
	return new PessoaUsecase(
		new SQLPessoasRepository()
	)
}

export function makeProdPessoaUsecase() {
	return new PessoaUsecase(
		new SQLPessoasRepository()
	)
}

export function makeInMemoryPessoaUsecase() {
	return new PessoaUsecase(
		new InMemoryPessoasRepository()
	)
}