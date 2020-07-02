import React from 'react'
import Link from 'next/link'
import config from '../config'
import Footer from '../components/footer'

const Events: React.FunctionComponent = ({ data }: any) => (
  <div>
    <h1>{config.general.siteName} - Events</h1>
    <Link href="/">Home</Link>
    <ul>
      {data.map(({ name, description, category, _id }: any) => (
        <li key={`event-${_id}`}>
          <Link href={`/events/${_id}`}>{name}</Link>
          <p>{category.name}</p>
          <p>{description}</p>
        </li>
      ))}
    </ul>
    <Footer />
  </div>
)
export default Events

export async function getServerSideProps() {
  const res = await fetch(`${config.api.baseUrl}/api/events`)
  const json = await res.json()
  return { props: { data: json } }
}
