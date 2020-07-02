import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function NextCity({ Component, pageProps }) {
  return <Component {...pageProps} />
}
