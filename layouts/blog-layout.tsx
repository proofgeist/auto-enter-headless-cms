
import { Box, Flex, Heading, Text, Spacer } from "@chakra-ui/react";
import { ReactNode, ReactElement } from "react";
import { TSiteSettings } from "../server/apis/fm/clients/SiteSettings";
import NavBar from '../components/nav-bar'
import NextChakraLink from "../components/next-chakra-link";
import { useRecentPosts } from "../utils/client-side-api";
import PageTransition from "../components/page-transition";
import { TPost } from "../server/apis/fm/clients/Post";

type Props = {
  children: ReactNode;
  siteSettings: TSiteSettings;
  preview: boolean;
  recentBlogs: TPost[];
};

export default function BlogLayout({ children, siteSettings, preview, recentBlogs }: Props) {

  return (
    <Box>
      <NavBar logo={siteSettings?.LogoSlug || ""} preview={preview} />
      <PageTransition>
        <Flex  >
          <Box flex={3}  >{children}</Box>
          <Box ml={4} flex={1}>
            <Box mt={4} ml={4} height="100%" borderLeft="1px solid" borderLeftColor="brand.100" pl={4} flex={1}>
              <Heading as="h2" size="lg">Recent Posts</Heading>
              <RecentPosts />
            </Box>
          </Box>
        </Flex>
      </PageTransition>

    </Box>
  )
}




export const getLayout = (page: ReactElement, pageProps: any) => {

  return <BlogLayout {...pageProps}> {page}</BlogLayout>
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
      <RecentPost {...blog} />
    </Box>
  })}</Box>

}



function RecentPost(blog: TPost) {
  return <Box>
    <Heading m={0} p={0} as="h3" fontWeight={"medium"} color={"brand.800"} size="sm"><NextChakraLink href={blog.Slug}>{blog.Title}</NextChakraLink></Heading>
    <Text fontSize={"sm"}>{blog.AuthorName ? blog.AuthorName : "JamClub"} - {blog.CreationTimestamp}</Text>
    <Spacer h={4} />
  </Box>
}