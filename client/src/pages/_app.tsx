import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - BoilerPlate</title>
        <link rel="shortcut icon" href="/img/icon-521.png" />
        <link rel="apple-touch-icon" href="/img/icon-521.png" />
        <meta
          name="description"
          content="A simple project starter to work  with Typescript, React, NextJS and Styled Components "
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
export default App
