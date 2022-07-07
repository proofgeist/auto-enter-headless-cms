import { GetStaticPropsContext } from "next"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { getPostBySlug, getPostPreviewBySlug } from "../../server/apis/posts"


export const getStaticProps = async (ctx: GetStaticPropsContext) => {

  const slug = ctx.params?.slug as string

  const preview = ctx.preview ? true : false


  let post
  if (preview) {
    post = await getPostPreviewBySlug(slug)
  } else {
    post = await getPostBySlug(slug)
  }


  return {
    props: { preview, ...post },
    revalidate: 10000000
  }


}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export default function Blog({ Title, Slug, Body, preview }: any) {

  const router = useRouter()

  return (
    <div>
      {preview && <NextLink href={`/api/clear-preview-mode?=${router.asPath}`}>Clear Preview</NextLink>}
      <h1>{Title}</h1>
      <p>{Body}</p>
    </div>
  )
}