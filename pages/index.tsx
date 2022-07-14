import { GetStaticPropsContext } from "next"
import { getLayout } from "../layouts/main-layout";
import { getSiteSettings } from "../server/apis/site-settings";
import Hero from "../components/hero";
import { Heading, SimpleGrid, VStack, Spacer } from "@chakra-ui/react";
import SimpleCard from "../components/simple-card";

export const getStaticProps = async (ctx: GetStaticPropsContext) => {


  const siteSettings = await getSiteSettings()

  return {
    props: { siteSettings },
    revalidate: 60 * 30 // 30 minutes
  }


}

const winners = [
  {
    name: "Apricot Pepper",
    brand: "Just Jans",
    src: "/api/fm-file/5722D5AC-AB07-4E8F-9FC4-387A6A152958/ap-winner.png",
    "month": "May"
  },
  {
    name: "Organic Strawberry",
    brand: "Just Jans",
    src: "/api/fm-file/C76E0567-F9D3-406B-A2E4-C94E2CD56085/jj-strawberry.png",
    "month": "June"
  },
  {
    name: "Seedless Rasberry",
    brand: "Just Jans",
    src: "/api/fm-file/2C3C6AEC-35FB-4425-8D38-E8B949658727/winner-seedless.png",
    "month": "July"
  },
]


const HomePage = () => {
  return (
    <div >
      <Hero />
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Recent Jam of the Month Winners
        </Heading>

      </VStack>
      <SimpleGrid columns={3}>

        {winners.map((winner, index) => {
          return <SimpleCard key={winner.month} winner={winner} />
        })}
      </SimpleGrid>
      <Spacer height={20} />
    </div>
  )
}

HomePage.getLayout = getLayout

export default HomePage
