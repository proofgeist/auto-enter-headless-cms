import { GetStaticPropsContext } from "next"
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { getPublicPostBySlug, getPreviewPostBySlug, getAllPosts, postCache } from "../../server/apis/posts"
import { getSiteSettings } from "../../server/apis/site-settings"
import { Heading, HStack, Spacer, Text } from "@chakra-ui/react"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import mdxComponents from "../../components/mdx-components"
import { getLayout } from "../../layouts/blog-layout"
import { TPost } from "../../server/apis/fm/clients/Post"
import { AvatarNextImage, BlobbedImage, RoundedNextImage } from "../../components/next-image-styled";
import { MDXRemoteSerializeResult } from "next-mdx-remote"
import { TSiteSettings } from "../../server/apis/fm/clients/SiteSettings"


// BLOG pages are built into static pages during the build process
// First, we get all the posts paths in getStaticPaths
// then next will call getStaticProps for each of those paths
// finally each of those posts is rendered into a static page using the BlogPage component below



export const getStaticPaths = async () => {
  // runs on server during dev and the build phase
  // runs only once for all Posts durning the build phase 

  const posts = await getAllPosts()
  // during the production build phase we cache the posts
  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
    await postCache.setAll(posts)
  }
  const paths: string[] = posts.map(post => {
    return "/blog/" + post.Slug
  })
  return {
    paths: paths,
    fallback: "blocking"
  }
}


export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  //runs on server during dev, build, and when revalidating
  //get the post data
  const slug = ctx.params?.slug as string
  const preview = ctx.preview ? true : false
  let post: TPost | undefined
  if (preview) {
    post = await getPreviewPostBySlug(slug)
  } else {
    // if we aren't building so don't use the cache
    if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) post = await postCache.getBySlug(slug);
    if (!post) {
      console.log('building page for slug: ' + slug)
      post = await getPublicPostBySlug(slug)
    }
  }

  //if there is no post then we return notFound
  if (!post) {
    return {
      props: {},
      notFound: true,
    }
  }

  // get rescent posts
  let posts = await postCache.getAll()
  if (posts.length === 0) {
    posts = await getAllPosts()
  }
  const recentBlogs = posts.slice(0, 10)


  //get the site settings
  const siteSettings = await getSiteSettings()

  // compile the MDX source
  const mdxSource = await serialize(post.Body)

  // we are doing on demand revalidation also, but this will make the pages stale after 30 minutes
  // the next vistor after that will trigger a rebuild.
  // we need this because we have a list of blogs in each blog page and that will need to revalidate
  // when new blogs are added
  return {
    props: { preview, post, siteSettings, mdxSource, recentBlogs },
    revalidate: 30 * 60 // 30 minutes
  }

}


type PageProps = {
  mdxSource: MDXRemoteSerializeResult,
  siteSettings: TSiteSettings,
  post: TPost,
}


//PageComponent
export default function BlogPage({
  post: { Title, FeatureImageUrl, AuthorName, AuthorAvatarUrl, ModificationTimestamp },
  siteSettings, mdxSource,
}: PageProps) {

  if (!siteSettings) return null // nothing to render yet

  console.log('rending blog page', Title)

  return (
    < >
      <Heading mb={0} as="h1" size="2xl" >{Title}</Heading>
      <Attribution AuthorAvatarUrl={AuthorAvatarUrl} AuthorName={AuthorName} ModificationTimestamp={ModificationTimestamp} />
      <Spacer height={8}></Spacer>
      <BlobbedImage priority={true} width={1280} height={630} src={FeatureImageUrl} />
      <Spacer height={6}></Spacer>
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </>
  )
}

//asign the layout to the page
BlogPage.getLayout = getLayout

type AttributionProps = {
  AuthorName: TPost["AuthorName"],
  AuthorAvatarUrl: TPost["AuthorAvatarUrl"],
  ModificationTimestamp: TPost["ModificationTimestamp"],
}

function Attribution({ AuthorAvatarUrl, AuthorName, ModificationTimestamp }: AttributionProps) {

  return <HStack>
    <AvatarNextImage src={AuthorAvatarUrl} />
    <Text color={"gray.500"}>{AuthorName} - {ModificationTimestamp}</Text>
  </HStack>

}