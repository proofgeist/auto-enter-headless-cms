import { GetStaticPropsContext } from "next"

import { getLayout } from "../layouts/main-layout";
import { getSiteSettings } from "../server/apis/site-settings";
import PricingTable from "../components/pricing-table";
import { RoundedNextImage } from "../components/next-image-styled";
import pricingimage from "../public/pricing-page.png";
import { Heading, VStack, Text } from "@chakra-ui/react";

export const getStaticProps = async (ctx: GetStaticPropsContext) => {


  const siteSettings = await getSiteSettings()

  return {
    props: { siteSettings },
    revalidate: 60 * 30 // 30 minutes
  }


}




const PricingPage = () => {
  return (
    <div >

      <PricingTable />
      <VStack spacing={2} textAlign="center">
        <Heading pb={4} as="h2" fontSize="4xl">
          Jam delivered to your door
        </Heading>

      </VStack>
      <RoundedNextImage width={1280} height={600} src={pricingimage} />
    </div>
  )
}

PricingPage.getLayout = getLayout

export default PricingPage
