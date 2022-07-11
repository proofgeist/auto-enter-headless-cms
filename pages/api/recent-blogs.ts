import { TTransformPost } from '../../utils/transform-post';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts } from "../../server/apis/posts"



//this route will cache the data for 5 minutes
// and then serve stale while updating for 15 minutes
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TTransformPost[]>
) {

  const recentBlogs = await getAllPosts()
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=300, stale-while-revalidate=900'
  )
  res.status(200).json(recentBlogs)
}
