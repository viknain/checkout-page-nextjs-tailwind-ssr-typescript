import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '../container/Layout/layout'
import '../styles/globals.scss'

const MyApp: React.FC<any> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}
export default MyApp
