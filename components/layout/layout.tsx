import Navbar from "components/navbar/navbar"
import { NextPage } from "next"

const Layout: NextPage = ({ children }) => {
  return (
    <main className="w-screen h-screen bg-gray-100">
      <Navbar />
      {children}
    </main>
  )
}

export default Layout
