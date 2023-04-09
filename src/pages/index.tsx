import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HomeContainer from '@/containers/Home';
import Layout from '@/components/Layout';
import { GetStaticProps, NextPage } from 'next';

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeContainer />
      </main>
    </>
  );
}

Home.getLayout = (page: NextPage) => <Layout>{page}</Layout>;

export const getStaticProps:GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', [
        'common',
      ])),
    },
  }
}