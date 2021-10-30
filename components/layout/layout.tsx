import { NextPage } from "next"
import Head from "next/head"
import Navbar from "components/navbar/navbar"

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen">
        <Navbar />
        <main className="px-4 py-2 max-h-full max-w-screen-xl mx-auto">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
