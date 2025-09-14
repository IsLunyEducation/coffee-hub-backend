import { randomUUID } from 'node:crypto'

import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right } from '@/core/errors/either'

import { CreatePostSchema } from './create-post.schema'


export class CreatePostUsecase {
	constructor() { }

	execute(payload: JSONObject) {
		const parse = CreatePostSchema.safeParse(payload)

		if (parse.error) {
			return left(
				new ZodCustomError(parse.error)
			)
		}

		const data = parse.data

		return right({
			...data,
			id: randomUUID(),
			created_at: new Date().toISOString(),
		})
	}
}