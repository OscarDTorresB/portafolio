import { NextPage } from 'next'
import Link from 'next/link'
import Image from "next/legacy/image";
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
    <header className="mx-auto py-2 px-4 bg-white font-semibold shadow-md border-b-2 border-sky-400 z-40">
      <nav className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="mt-1">
                <Image
                  src={LogoPng}
                  alt="Personal logo"
                  placeholder="blur"
                  width={180}
                  height={60}
                  priority
                />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.name}
                className={`group transition-colors ease-in-out duration-500 bg-transparent border-2 border-sky-300 px-4 py-2 rounded-full hover:bg-sky-500 ${route.active ? 'bg-sky-100' : ''}`}
              >
                <span className={`transition-colors ease-in-out duration-500 bg-clip-text text-transparent group-hover:bg-white ${route.active ? 'bg-sky-600' : 'bg-gray-600'}`}>
                  {route.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;