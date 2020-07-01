import React from 'react'
import Link from 'next/link'
import config from '../config'

const Home: React.FunctionComponent = () => (
  <div>
    <h1>{config.general.siteName} - Dashboard</h1>
    <Link href="/events">Events</Link>
    <p>{config.general.copyright}</p>
  </div>
)
export default Home
