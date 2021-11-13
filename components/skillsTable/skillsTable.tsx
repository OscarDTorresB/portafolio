import { NextPage } from 'next'
import Image from 'next/image'
import CodeIcon from 'public/assets/code.svg'
import AdjustmentsIcon from 'public/assets/adjustments.svg'

const SkillsTable: NextPage = () => {
  return (
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
  )
}

export default SkillsTable
