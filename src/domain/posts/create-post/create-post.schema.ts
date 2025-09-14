import { z } from 'zod'

import { PostSchema } from '../post.schema'

export const CreatePostSchema = PostSchema.omit({
	id: true,
	created_at: true,
})
export type CreatePostSchema = z.infer<typeof CreatePostSchema>