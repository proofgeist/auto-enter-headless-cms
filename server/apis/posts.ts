import { client as Post, TPost } from "../apis/fm/clients/Post";
import { promises as fs } from 'fs'
import path from 'path'




export async function getPublicPostBySlug(slug: string) {
  const post = await Post.findFirst({ query: { Slug: slug, Type: "public" } });
  return post.data.fieldData;
}

export async function getPreviewPostBySlug(slug: string) {
  const post = await Post.findFirst({ query: { Slug: slug, Type: "draft" } });
  return post.data.fieldData;
}


export async function getAllPosts() {
  const result = await Post.find({ query: { Type: "public" }, sort: [{ fieldName: "CreationTimestamp", sortOrder: "descend" }] });
  const posts = result.data.map(post => {
    return post.fieldData
  })

  return posts
}



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