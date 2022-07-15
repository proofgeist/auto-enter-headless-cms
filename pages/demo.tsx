/* eslint-disable @next/next/no-img-element */
import { Heading, Text, Square } from "@chakra-ui/react";
import { GetStaticPropsContext, GetServerSidePropsContext } from "next"
import NextImage from "next/future/image"

/* 1. FileMaker Client API */
import { client as DemoPost, TDemoPost } from "../server/apis/fm/clients/DemoPost";



/* 2. Next.js server side rendering */
export async function getServerSideProps() {

  //fetch data from FileMaker
  const result = await DemoPost.findOne(
    {
      query:
        { Slug: 'strawberry-fields-forever', Type: "public" }
    }
  )
  const post = result.data.fieldData

  console.log('hitting database') // 4

  return {
    props: { ...post }, // pass data to the page component as props
  }

}

/* 3.0 Next.js Render a page */
export default function DemoPage(props: TDemoPost) {

  return <div>
    <Heading>{props.Title}</Heading>
    <Text>{props.AuthorName}</Text>

    <img
      alt="feature image"
      width={"1200"}
      height={"600"}
      src={props.FeatureImageContainerDisplay} />
  </div>

}



