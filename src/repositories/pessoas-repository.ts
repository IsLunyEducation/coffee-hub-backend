export interface PessoasRepository {
	getPessoa(name: string): { name: string, cpf: string }
}

export class SQLPessoasRepository implements PessoasRepository {
	getPessoa(name: string) {
		return {
			name,
			cpf: '***-***-***-**',
		}
	}
}

export class InMemoryPessoasRepository implements PessoasRepository {
	getPessoa(name: string) {
		return {
			name,
			cpf: Math.floor(Math.random() * 100000000000).toString(),
		}
	}
}