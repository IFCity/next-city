import React from 'react'
import Link from 'next/link'

const Home: React.FunctionComponent = () => (
  <div>
    <h1>Next City - Dashboard Page with CI and Deploy 2</h1>
    <Link href="/events">Events</Link>
    <p>(c) {process.env.NEXT_PUBLIC_COPYRIGHT}</p>
    <p>Just to check: {process.env.NEXT_PUBLIC_API_BASE_URL}</p>
  </div>
)
export default Home
