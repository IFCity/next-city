import React from 'react'
import Link from 'next/link'

const Events: React.FunctionComponent = ({ data }: any) => (
  <div>
    <h1>Next City Events</h1>
    <Link href="/">Home</Link>
    <ul>
      {data.map(({ title, _id }: any) => (
        <li key={`event-${_id}`}>
          <Link href={`/events/${_id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  </div>
)
export default Events

export async function getServerSideProps() {
  const res = await fetch('https://next-city.gzoreslav.vercel.app/api/events')
  const json = await res.json()
  return { props: { data: json } }
}
