import { PessoasRepository } from '@/repositories/pessoas-repository'

export class PessoaUsecase {
	constructor(
		readonly pessoasRepository: PessoasRepository
	) { }

	execute(name: string) {
		const pessoa = this.pessoasRepository.getPessoa(name)

		return {
			...pessoa,
		}
	}
}