import { client as Posts } from "../apis/fm/clients/Posts";
import { client as PostPreviews } from "../apis/fm/clients/PostPreviews";
import { promises as fs } from 'fs'

import path from 'path'

import { transformPost, TTransformPost } from "../../utils/transform-post";


export async function getPostBySlug(slug: string) {
  const post = await Posts.findFirst({ query: { Slug: slug } });
  return transformPost(post.data.fieldData);
}

export async function getPostPreviewBySlug(slug: string) {
  const post = await PostPreviews.findFirst({ query: { Slug: slug } });
  return transformPost(post.data.fieldData);

}

export async function getAllPosts() {
  const result = await Posts.list()
  const posts = result.data.map(post => {
    return transformPost(post.fieldData)
  })

  return posts
}



const getAllCachedPosts = async () => {
  try {
    const data = await fs.readFile(path.join(process.cwd(), 'posts.db'))
    const Posts: TTransformPost[] = JSON.parse(data as unknown as string)
    return Posts
  } catch (error) {
    return [] as TTransformPost[]
  }

}



const getACachedPost = async (Slug: string) => {
  const Posts = await getAllCachedPosts()

  const post = Posts.find(post => post.Slug === Slug)
  return post
}




export const postCache = {
  getAll: getAllCachedPosts,
  getBySlug: getACachedPost,
  setAll: async (posts: TTransformPost[]) => {
    console.log('setting cache')
    return await fs.writeFile(
      path.join(process.cwd(), 'posts.db'),
      JSON.stringify(posts)
    )

  }
}