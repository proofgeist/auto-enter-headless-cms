import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from "next";
import { ChakraProvider, Box, Container } from '@chakra-ui/react'
import { ReactElement, ReactNode } from "react";


export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout: (page: ReactElement, props: P) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


const defaultLayout = (page: NextPage) => page;


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || defaultLayout;
  return (
    <ChakraProvider>
      <Container maxWidth={"1280px"}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </Container>

    </ChakraProvider >
  )
}

export default MyApp