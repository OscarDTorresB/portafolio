import { NextPage } from "next"
import Head from "next/head"
import Navbar from "components/navbar/navbar"
import Footer from "components/footer/footer"
import { ReactNode } from "react"

const Layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Are you looking for a front end developer? you found it in this amazing front end portfolio, Oscar Torres will surprise you." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Oscar Torres, Front End Developer, Front End Developer Portfolio, Front End Portfolio, Software Engineer" />
        <meta name="author" content="Oscar Torres" />
        <meta name="og:title" content="Oscar Torres" />
        <meta name="og:description" content="Are you looking for a front end developer? you found it in this amazing front end portfolio, Oscar Torres will surprise you." />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://oscardtorresb.site" />
        <meta name="twitter:title" content="Oscar Torres" />
        <meta name="twitter:description" content="Are you looking for a front end developer? you found it in this amazing front end portfolio, Oscar Torres will surprise you." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Navbar />
        <main className="px-4 py-2 max-h-full max-w-screen-xl mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
