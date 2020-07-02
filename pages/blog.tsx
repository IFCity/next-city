import React from 'react'
import config from '../config'
import Layout from '../components/layout'
import Head from 'next/head'

const Blog: React.FunctionComponent = () => (
  <>
    <Head>
      <title>{config.general.siteName} - Блог</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <div className="container">
        <h1>{config.general.siteName} - Блог</h1>
      </div>
    </Layout>
  </>
)
export default Blog
