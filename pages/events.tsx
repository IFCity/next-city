import React from 'react'
import Link from 'next/link'
import config from '../config'
import Layout from '../components/layout'
import Head from 'next/head'

const Events: React.FunctionComponent = ({ data }: any) => (
  <>
    <Head>
      <title>{config.general.siteName} - Події</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <div className="container">
        <h1>{config.general.siteName} - Події</h1>
        <ul>
          {data.map(({ name, description, category, _id }: any) => (
            <li key={`event-${_id}`}>
              <Link href={`/events/${_id}`}>{name}</Link>
              <p>{category.name}</p>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  </>
)
export default Events

export async function getServerSideProps() {
  const res = await fetch(`${config.api.baseUrl}/api/events`)
  const json = await res.json()
  return { props: { data: json } }
}
