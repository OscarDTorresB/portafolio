import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SystemsImage from 'public/assets/hero.svg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oscar&apos;s Portfolio</title>
        <meta name="description" content="Oscar's Portfolio" />
      </Head>
      <section className="container max-w-full w-max mx-auto mt-40 px-4">
        <h1 className="text-6xl font-semibold">
          Front-end Developer
        </h1>
        <h2 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-medium">
          I code beautifully, simple, and performant web applications.
        </h2>
      </section>
      <div className="grid justify-center mt-40">
        <Image
          src={SystemsImage}
          alt="A computer with a bunch of screens"
        />
      </div>
      <section className="bg-gradient-to-tr from-indigo-800 to-indigo-600 text-white font-semibold h-72 rounded-sm md:rounded px-4 py-3">
        This is a test
      </section>
    </>
  )
}

export default Home
