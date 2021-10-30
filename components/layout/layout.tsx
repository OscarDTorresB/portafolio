import { NextPage } from "next"
import Head from "next/head"
import Navbar from "components/navbar/navbar"

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <div className="w-screen h-screen">
        <Navbar />
        <main className="px-4 py-2 max-h-full max-w-full">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
