import { CreatePostUsecase } from './create-post.usecase'

export function makeCreatePost() {
	return new CreatePostUsecase()
}