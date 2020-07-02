import React from 'react'
import config from '../config'
import Layout from '../components/layout'
import Head from 'next/head'

const Home: React.FunctionComponent = () => (
  <>
    <Head>
      <title>{config.general.siteName}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <div className="container">
        <h1>{config.general.siteName} - Dashboard</h1>
      </div>
    </Layout>
  </>
)
export default Home
