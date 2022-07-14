import { client as Post, TPost } from "../apis/fm/clients/Post";
import { promises as fs } from 'fs'
import path from 'path'
import { redisCache } from "../../utils/upstash";



export async function getPublicPostBySlug(slug: string) {
  console.log('getPublicPostBySlug', slug)
  const cachedPost = await redisCache.get(slug) as TPost | undefined
  if (cachedPost) {
    return cachedPost
  }
  const post = await Post.findFirst({ query: { Slug: slug, Type: "public" } });
  redisCache.set(slug, post.data.fieldData, 10)
  return post.data.fieldData;
}

export async function getPreviewPostBySlug(slug: string) {
  const post = await Post.findFirst({ query: { Slug: slug, Type: "draft" } });
  return post.data.fieldData;
}


export async function getAllPosts() {

  const cachedValue = await redisCache.get('all-posts') as TPost[] | undefined;
  if (cachedValue) {
    return cachedValue
  }

  const result = await Post.find({ query: { Type: "public" }, sort: [{ fieldName: "CreationTimestamp", sortOrder: "descend" }] });
  const posts = result.data.map(post => {
    return post.fieldData
  })

  await redisCache.set('all-posts', posts, 60 * 5);

  return posts
}


// here we are going to use a different cache method
// these are only used at build time.
// they don't run after the site has been built and deployed
const getAllCachedPosts = async () => {
  try {
    const data = await fs.readFile(path.join(process.cwd(), 'posts.db'))
    const Posts: TPost[] = JSON.parse(data as unknown as string)
    return Posts
  } catch (error) {
    return [] as TPost[]
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
  setAll: async (posts: TPost[]) => {

    return await fs.writeFile(
      path.join(process.cwd(), 'posts.db'),
      JSON.stringify(posts)
    )

  }
}