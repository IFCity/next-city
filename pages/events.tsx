import React from 'react'
import Link from 'next/link'

const Events: React.FunctionComponent = ({ data }) => (
  <div>
    <h1>Events</h1>
    <Link href="/">Home</Link>
    <ul>
      {data.map(({ title, _id }) => (
        <li key={`event-${_id}`}>
          <Link href={`/events/${_id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  </div>
)
export default Events

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/events')
  const json = await res.json()
  return { props: { data: json } }
}
