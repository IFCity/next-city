import React from 'react'
import Link from 'next/link'

const Home: React.FunctionComponent = () => (
  <div>
    <h1>Next City - Dashboard Page</h1>
    <Link href="/events">Events</Link>
  </div>
)
export default Home
