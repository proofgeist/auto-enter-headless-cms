import { GetStaticPropsContext } from "next"
import type { NextPage } from 'next'
import { getLayout } from "../../layouts/main-layout";
import { getSiteSettings } from "../../server/apis/site-settings";
import RecentBlogsGrid from "../../components/recent-blogs-grid";

export const getStaticProps = async (ctx: GetStaticPropsContext) => {


  const siteSettings = await getSiteSettings()

  return {
    props: { siteSettings },
    revalidate: 60 * 30 // 30 minutes
  }


}


type TSiteSettings = {
  LogoFileID: string;
  LogoSlug: string;
}

const BlogsIndexPage = ({ siteSettings }: { siteSettings: TSiteSettings }) => {
  return (
    <div >
      <RecentBlogsGrid />
    </div>
  )
}

BlogsIndexPage.getLayout = getLayout

export default BlogsIndexPage
