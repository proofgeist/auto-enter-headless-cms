
import { z } from 'zod'
import { TPosts } from '../server/apis/fm/clients/Posts'

export function transformPost(post: TPosts) {
  return {
    Slug: post.Slug,
    Body: post.PublishedBody,
    Title: post.PublishedTitle,
    FeatureImageUrl: post.FeatureImageUrl,
  }
}

export const zTransformPost = z.object({
  Slug: z.string(),
  Body: z.string(),
  Title: z.string(),
  FeatureImageUrl: z.string(),
})
export type TTransformPost = z.infer<typeof zTransformPost>