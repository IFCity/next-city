import React from 'react'
import Link from 'next/link'
import config from '../config'
import Footer from '../components/footer'

const Home: React.FunctionComponent = () => (
  <div>
    <h1>{config.general.siteName} - Dashboard</h1>
    <Link href="/events">Events</Link>
    <Footer />
  </div>
)
export default Home
