import Head from 'next/head'

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import "../styles/antd.less";
import "../styles/styles.less"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hero</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>

      <Nav />

      <Component {...pageProps} />
      
      <Footer />
    </>
  )
}

export default MyApp
