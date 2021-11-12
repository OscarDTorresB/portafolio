import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SystemsImage from 'public/assets/hero.svg'
import CodeIcon from 'public/assets/code.svg'
import AdjustmentsIcon from 'public/assets/adjustments.svg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oscar&apos;s Portfolio</title>
        <meta name="description" content="Oscar's Portfolio" />
      </Head>
      <section className="container max-w-full w-max mx-auto mt-20 px-4">
        <h1 className="text-6xl font-semibold">
          Front-end Developer
        </h1>
        <h2 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-medium animate-fade-in-from-left">
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
          Since the beginning of my journey as a front end developer, I&apos;ve
          done remote work for agencies, consulted for startups, and collaborated with
          talented people to create products for both, business and consumer use.
          I&apos;m a passionate learner, a curious person and I&apos;m excited to
          continue to learn and grow as a developer one line of code at a time.
        </p>
      </section>
      <section className="max-w-4xl mx-auto border shadow-sm rounded-lg my-20">
        <table className="w-full mt-10 mb-20">
          <thead>
            <tr>
              <th className="text-center pb-8 w-1/2">
                <Image
                  src={CodeIcon}
                  alt="Code icon"
                />
                <h2 className="text-2xl font-bold pt-4">
                  Front-end Development
                </h2>
              </th>
              <th className="text-center pb-8 w-1/2">
                <Image
                  src={AdjustmentsIcon}
                  alt="Code icon"
                />
                <h2 className="text-2xl font-bold pt-4">
                  Back-end Development
                </h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center px-4 md:px-8">
                I like to code things from scratch, and I enjoy bringing new ideas to life in the browser while keeping the code clean and readable.
              </td>
              <td className="text-center px-4 md:px-8">
                I like to use my knowledge to create robust and performant back-end applications
                for my personal projects.
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 md:px-8 pt-10 pb-4 text-blue-600 font-semibold">
                Languages I&apos;ve worked with:
              </td>
              <td className="text-center px-4 md:px-8 pt-10 pb-4 text-blue-600 font-semibold">
                Languages I&apos;ve worked with:
              </td>
            </tr>
            <tr className="align-text-top">
              <td className="text-center px-4 md:px-8">
                Javascript, TypeScript, React, Redux, Next.js, CSS, Sass
              </td>
              <td className="text-center px-4 md:px-8">
                Node.js, PostgreSQL, Restful APIs
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 md:px-8 pt-10 pb-4 text-blue-600 font-semibold">
                Development Tools:
              </td>
              <td className="text-center px-4 md:px-8 pt-10 pb-4 text-blue-600 font-semibold">
                Development Tools:
              </td>
            </tr>
            <tr>
              <td className="text-center align-text-top px-4 md:px-8">
                <ul>
                  <li>
                    Cypress
                  </li>
                  <li>
                    React Testing Library
                  </li>
                  <li>
                    ESLint
                  </li>
                  <li>
                    MaterialUI
                  </li>
                  <li>
                    Tailwind CSS
                  </li>
                </ul>
              </td>
              <td className="text-center align-text-top px-4 md:px-8">
                <ul>
                  <li>
                    Git
                  </li>
                  <li>
                    Jest
                  </li>
                  <li>
                    Express
                  </li>
                  <li>
                    Firebase
                  </li>
                  <li>
                    MySQL
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Home
