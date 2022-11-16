import Companies from 'components/companies/companies'
import SkillsTable from 'components/skillsTable/skillsTable'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/legacy/image";
import SystemsImage from 'public/assets/hero.svg'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oscar&apos;s Portfolio - Front end Engineer</title>
        <meta name="description" content="Oscar&apos;s Portfolio - Front end engineer" />
        <link rel="canonical" href="https://oscardtorresb.me" />
        <meta property="og:title" content="Oscar&apos;s Portfolio" />
        <meta property="og:description" content="Oscar&apos;s Portfolio - Frontend engineer" />
      </Head>
      <section className="container max-w-full w-max mx-auto mt-20 px-4">
        <h1 className="text-6xl font-semibold">
          Front-end Engineer
        </h1>
        <h2 className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent font-medium animate-fade-in-from-left">
          I code beautifully, simple, and performant web applications.
        </h2>
      </section>
      <div className="grid justify-center my-20">
        <Image
          src={SystemsImage}
          alt="A computer with a bunch of screens"
          priority
        />
      </div>
      <hr className="separator" />
      <section className="flex flex-col gap-8 pt-10">
        <h2 className="text-center font-bold text-3xl">
          Hi, I&apos;m Oscar. Nice to meet you! 👋
        </h2>
        <p className="text-center max-w-4xl mx-auto">
          Since the beginning of my journey as a front end engineer, I&apos;ve
          done remote work for agencies, consulted for startups, and collaborated with
          talented people to create products for both, business and consumer use.
          I&apos;m a passionate learner, a curious person and I&apos;m excited to
          continue to learn and grow as a engineer one line of code at a time.
        </p>
      </section>
      <SkillsTable />
      <section className="container max-w-full w-max mx-auto mt-20 px-4">
        <h2 className="text-center font-bold text-3xl max-w-2xl mx-auto">
          I&apos;m proud to have worked with these wonderful companies:
        </h2>
        <Companies />
      </section>
    </>
  )
}

export default Home
