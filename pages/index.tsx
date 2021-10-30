import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oscar&apos;s Portfolio</title>
        <meta name="description" content="Oscar's Portfolio" />
      </Head>
      <div className="container">
        <h1 className="title">
          Hi there! 👋
        </h1>
        <p className="">
          I&apos;m Oscar, a software engineer, I&apos;ve been working with web
          development for over a year now, building applications with React
          and Next.js.
        </p>
      </div>
    </>
  )
}

export default Home
