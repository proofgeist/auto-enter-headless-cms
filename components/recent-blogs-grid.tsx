import { Box, SimpleGrid, Spinner, Heading, Spacer, Text, Button } from "@chakra-ui/react";
import { useRecentPosts } from "../utils/client-side-api";
import NextImage from "next/future/image";
import NextLink from "next/link";
import NextChakraLink from "./next-chakra-link";




export default function RecentBlogsGrid() {

  const recentPosts = useRecentPosts()

  if (recentPosts.isFetching) return <Spinner />

  if (recentPosts.isError) return <Box>Error</Box>

  if (recentPosts.data.length === 0) return <Box>No posts</Box>



  return <SimpleGrid columns={3} spacing={10}>
    {recentPosts.data.map((blog: any) => {
      return <BlogCard key={blog.Slug} {...blog} />
    })}
  </SimpleGrid>

}

function BlogCard({ Slug, Title, FeatureImageUrl, Excerpt, Body }: any) {


  const truncatedBody = Body.substring(0, 300) + "... "
  const safeExcerpt = Excerpt || truncatedBody
  const href = `/blog/${Slug}`

  return <Box bg='tomato' height='100px'>
    <NextChakraLink href={href}><NextImage width={1200} height={630} src={FeatureImageUrl}></NextImage></NextChakraLink>
    <Spacer h={4} />
    <NextChakraLink href={href}><Heading as="h2" size="md">{Title}</Heading></NextChakraLink>
    <Text>{safeExcerpt}</Text>
    <Spacer h={4} />
    <NextLink href={href}>
      <Button size={"md"} colorScheme='purple' variant='link'>
        Read more...
      </Button>
    </NextLink>
  </Box>

}