
import { Box, Flex, Heading } from "@chakra-ui/react";
import { ReactNode, ReactElement } from "react";
import { TSiteSettings } from "../server/apis/fm/clients/SiteSettings";
import NavBar from '../components/nav-bar'
import NextChakraLink from "../components/next-chakra-link";
import { TTransformPost } from "../utils/transform-post";
import { useRecentPosts } from "../utils/client-side-api";

type Props = {
  children: ReactNode;
  siteSettings: TSiteSettings;
  preview: boolean;
}


export default function MainLayout({ children, siteSettings, preview }: Props) {

  return (
    <Box>
      <NavBar logo={siteSettings?.LogoSlug || ""} preview={preview} />
      {children}
    </Box>
  )
}


export const getLayout = (page: ReactElement, pageProps: any) => {

  return <MainLayout {...pageProps}> {page}</MainLayout>
}