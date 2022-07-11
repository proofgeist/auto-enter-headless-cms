import { GetStaticPropsContext } from "next"
import type { NextPage } from 'next'
import { getLayout } from "../layouts/main-layout";
import { getSiteSettings } from "../server/apis/site-settings";
import Hero from "../components/hero";

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

const HomePage = ({ siteSettings }: { siteSettings: TSiteSettings }) => {
  return (
    <div >
      <Hero />
    </div>
  )
}

HomePage.getLayout = getLayout

export default HomePage
