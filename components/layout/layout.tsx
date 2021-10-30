import { NextPage } from "next"
import Navbar from "components/navbar/navbar"

const Layout: NextPage = ({ children }) => {
  return (
    <>
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
