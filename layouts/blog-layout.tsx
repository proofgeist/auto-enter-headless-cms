
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { ReactNode, ReactElement } from "react";
import { TSiteSettings } from "../server/apis/fm/clients/SiteSettings";



import NavBar from '../components/nav-bar'
import NextChakraLink from "../components/next-chakra-link";
import { TTransformPost } from "../server/apis/posts"

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

            <Box> {recentBlogs.map((blog) => {

              return <Box my={2} key={blog.Slug} >
                <NextChakraLink href={blog.Slug}>{blog.Title}</NextChakraLink>
              </Box>
            })}</Box>


          </Box>
        </Box>
      </Flex>
    </Box>
  )
}


export const getLayout = (page: ReactElement, pageProps: any) => {

  return <BlogLayout {...pageProps}> {page}</BlogLayout>
}