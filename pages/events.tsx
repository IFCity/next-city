import React from 'react'
import Link from 'next/link'

const Events: React.FunctionComponent = ({ data }: any) => (
  <div>
    <h1>Next City Events</h1>
    <Link href="/">Home</Link>
    <ul>
      {data.map(({ name, _id }: any) => (
        <li key={`event-${_id}`}>
          <Link href={`/events/${_id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
)
export default Events

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/events`)
  const json = await res.json()
  return { props: { data: json } }
}
