
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { ReactNode, ReactElement } from "react";
import { TSiteSettings } from "../server/apis/fm/clients/SiteSettings";



import NavBar from '../components/nav-bar'
import NextChakraLink from "../components/next-chakra-link";
import { TTransformPost } from "../utils/transform-post";
import { useRecentPosts } from "../utils/client-side-api";

type Props = {
  children: ReactNode;
  siteSettings: TSiteSettings;
  preview: boolean;
  recentBlogs: TTransformPost[];
};

export default function BlogLayout({ children, siteSettings, preview, recentBlogs }: Props) {

  return (
    <Box>
      <NavBar logo={siteSettings?.LogoSlug || ""} preview={preview} />
      <Flex >
        <Box flex={3}  >{children}</Box>
        <Box ml={4} flex={1}>
          <Box mt={"24"} ml={4} height="100%" borderLeft="1px solid" borderLeftColor="purple.100" pl={4} flex={1}>
            <Heading as="h2" size="md">Recent Posts</Heading>

            <RecentPosts />


          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

// get recent posts using a client side query
// we are doing this because every post page has this so if it changes
// we would need to update all the post pages
// this uses an api route that caches the results for up to 15 minutes
function RecentPosts() {
  const recentPostsQuery = useRecentPosts()
  if (!recentPostsQuery.data) return null

  return <Box> {recentPostsQuery.data.map((blog: any) => {
    return <Box my={2} key={blog.Slug} >
      <NextChakraLink href={blog.Slug}>{blog.Title}</NextChakraLink>
    </Box>
  })}</Box>

}


export const getLayout = (page: ReactElement, pageProps: any) => {

  return <BlogLayout {...pageProps}> {page}</BlogLayout>
}