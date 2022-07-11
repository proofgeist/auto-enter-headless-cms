import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from "next";
import { ChakraProvider, Box, Container } from '@chakra-ui/react'
import { ReactElement, ReactNode } from "react";
import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'



export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout: (page: ReactElement, props: P) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


// Create a client
const queryClient = new QueryClient()
const defaultLayout = (page: NextPage) => page;


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || defaultLayout;
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Container maxWidth={"1280px"}>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </Container>
      </QueryClientProvider>
    </ChakraProvider >
  )
}

export default MyApp