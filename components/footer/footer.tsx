import { NextPage } from 'next'
import Image from "next/legacy/image";
import PersonalLogoWhite from 'public/personal-logo-white.png'

const Footer: NextPage = () => {
  return (
    <footer className="container mx-auto sm:rounded-lg md:rounded-2xl bg-gradient-to-br from-sky-800 to-sky-600 h-60 py-8">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={PersonalLogoWhite}
          alt="Personal logo"
          width={210}
          height={70}
        />
      </div>
      <div className="flex justify-center items-center my-4 py-1 shadow-xl bg-gradient-to-l from-sky-800 to-sky-600">
        <h1 className="text-xl max-w-sm text-center font-medium py-4 text-white">
          Happy too see you here at the bottom 😄
        </h1>
      </div>
    </footer>
  )
}

export default Footer;
