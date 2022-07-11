import { GetStaticPropsContext } from "next"
import type { NextPage } from 'next'
import { getLayout } from "../../layouts/main-layout";
import { getSiteSettings } from "../../server/apis/site-settings";
import RecentBlogsGrid from "../../components/recent-blogs-grid";
import { Heading, Spacer } from "@chakra-ui/react";

export const getStaticProps = async (ctx: GetStaticPropsContext) => {


  const siteSettings = await getSiteSettings()

  return {
    props: { siteSettings },
    revalidate: 60 * 30 // 30 minutes
  }


}




const BlogsIndexPage = () => {
  return (
    <div >
      <Heading as="h1" size={"2xl"}>Recent Blog Posts</Heading>
      <Spacer h={4} />
      <RecentBlogsGrid />
    </div>
  )
}

BlogsIndexPage.getLayout = getLayout

export default BlogsIndexPage
