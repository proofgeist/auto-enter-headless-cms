
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts } from "../../server/apis/posts"
import { TPost } from '../../server/apis/fm/clients/Post';



//this route will cache the data for 5 minutes
// and then serve stale while updating for 60 minutes
// if the server is down, this data will stay in cache for 60 minutes
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TPost[]>
) {

  const recentBlogs = await getAllPosts()
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=300, stale-while-revalidate=3600'
  )
  res.status(200).json(recentBlogs)
}
