import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFetchUser } from '@/apis/user';
import Restaurant from '@/contexts/Restaurants';
import { NextPage } from 'next';
import { ReactElement,ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

 function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page:ReactElement) => page)
  console.log({Component, getLayout})
  return (
    <Restaurant>
      {getLayout(<Component {...pageProps} />)}
    </Restaurant>
  );
}
export default appWithTranslation(App)