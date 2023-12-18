import Link from 'next/link';
import Menus from '@/types/header'
import header from '@/lib/header.json'
import Image from 'next/image';

export default function Header() {
  const { menus }: Menus = header
  
  return (
    <header className='max-w-full'>
      <nav className='mx-auto bg-white flex items-center justify-between lg:px-8' aria-label='Global'>
        <div>
          <Link href='/' className='m-1.5'>
            <Image src={'/next.svg'} placeholder='empty' priority={true} alt='logo' width={126} height={26} />
          </Link>
        </div>
        <div className='flex lg:flex-1 justify-end gap-8'>
          {menus.map((menu) => (
            <Link
              className='block w-36 h-11 relative leading-[3rem] text-center font-semibold text-gray-900 text-lg hover:animate-wiggle hover:text-blue-400'
              scroll={false}
              key={menu.name}
              href={menu.link}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
