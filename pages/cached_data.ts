import { GetServerSidePropsContext } from "next"
import { getAllPosts } from "../server/apis/posts"

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {


  const recentBlogs = await getAllPosts()
  console.log('gtting posts')

  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  ctx.res.end(JSON.stringify(recentBlogs))


  return {
    props: {}
  }

}


export default function Nothing() { }