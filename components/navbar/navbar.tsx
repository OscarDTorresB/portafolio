import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import LogoPng from 'public/personal-logo.png';
import { useRouter } from 'next/router';

const Navbar: NextPage = () => {
  const router = useRouter();
  const routes = [
    {
      name: 'About',
      href: '/about',
      active: router.asPath === '/about'
    },
    {
      name: 'Contact',
      href: '/contact',
      active: router.asPath === '/contact'
    }
  ];

  return (
    <header>
      <nav className="sticky top-0 container mx-auto py-2 px-4 bg-white font-semibold shadow-md border-b-2 border-blue-400">
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
          <div className="flex items-center gap-2">
            {routes.map((route) => (
              <Link href={route.href} key={route.name}>
                <a className={`transition-colors ease-in-out duration-500 bg-gray-600 bg-clip-text text-transparent hover:bg-blue-600 ${route.active ? 'underline bg-blue-700' : ''}`}>
                  <span>{route.name}</span>
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