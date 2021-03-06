// eslint-disable-next-line no-use-before-define
import React from 'react'
import { AppProps } from 'next/app'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
