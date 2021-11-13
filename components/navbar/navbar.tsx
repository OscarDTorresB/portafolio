import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import LogoPng from 'public/personal-logo.png';
import { useRouter } from 'next/router';

const Navbar: NextPage = () => {
  const router = useRouter();
  const routes = [
    {
      name: 'Say Hello',
      href: '/contact',
      active: router.asPath === '/contact'
    }
  ];

  return (
    <header className="mx-auto py-2 px-4 bg-white font-semibold shadow-md border-b-2 border-blue-400 z-40">
      <nav className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="mt-1">
                <Image
                  src={LogoPng}
                  alt="Personal logo"
                  placeholder="blur"
                  width={180}
                  height={60}
                  priority
                />
              </a>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {routes.map((route) => (
              <Link href={route.href} key={route.name}>
                <a className="group transition-colors ease-in-out duration-500 bg-white hover:bg-blue-500 border-2 border-blue-300 px-4 py-2 rounded-full">
                  <span className={`transition-colors ease-in-out duration-500 bg-gray-600 bg-clip-text text-transparent group-hover:bg-white ${route.active ? 'bg-blue-700' : ''}`}>
                    {route.name}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;