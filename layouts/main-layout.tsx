
import { Box, Flex, Heading } from "@chakra-ui/react";
import { ReactNode, ReactElement } from "react";
import { TSiteSettings } from "../server/apis/fm/clients/SiteSettings";
import NavBar from '../components/nav-bar'
import PageTransition from "../components/page-transition";

type Props = {
  children: ReactNode;
  siteSettings: TSiteSettings;
  preview: boolean;
}


export default function MainLayout({ children, siteSettings, preview }: Props) {

  return (
    <Box>
      <NavBar logo={siteSettings?.LogoSlug || ""} preview={preview} />
      <PageTransition>{children}</PageTransition>
    </Box>
  )
}


export const getLayout = (page: ReactElement, pageProps: any) => {

  return <MainLayout {...pageProps}> {page}</MainLayout>
}