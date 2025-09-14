async function consoleDev(...values: unknown[]) {
	console.log(...values.map(x => inspect(x, false, null, true)))
}

import { inspect } from 'node:util'
// import { app } from './main/app'

// app.listen({ port: 8080 })

import { makeCreatePost } from './domain/posts/create-post/create-post.make'

const result = makeCreatePost().execute({
	title: 'Titulo incrivel',
	content: 'Conteudo incrivel',
	tags: ['incrivel'],
})
consoleDev(result)
if (result.isLeft()) {
	console.log(result.value.description)
}
