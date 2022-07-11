import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
export type NextPageWithLayout<P = {}> = NextPage<P> & {
	getLayout: (page: ReactElement, props: P) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};
