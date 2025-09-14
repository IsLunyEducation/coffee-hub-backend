import { z } from 'zod'

export const PostSchema = z.object({
	id: z.string(),
	title: z.string(),
	content: z.string(),
	created_at: z.string(),
	tags: z.array(z.string()).optional().nullable(),
})
export type PostSchema = z.infer<typeof PostSchema>