import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oscar&apos;s Portfolio</title>
        <meta name="description" content="Oscar's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        Hi there!
      </div>
    </>
  )
}

export default Home
