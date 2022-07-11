import { GetStaticPropsContext } from "next"
import type { NextPage } from 'next'
import { getLayout } from "../layouts/main-layout";
import { getSiteSettings } from "../server/apis/site-settings";
import { NextPageWithLayout } from "../utils/next-extended";

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

const Home = ({ siteSettings }: { siteSettings: TSiteSettings }) => {
  return (
    <div >
      ok
    </div>
  )
}

Home.getLayout = getLayout

export default Home
