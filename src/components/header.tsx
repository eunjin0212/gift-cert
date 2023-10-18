import Link from 'next/link';
import Menus from '@/types/header'
import header from '@/lib/header.json'


export default function Header() {
  const { menus }: Menus = header
  return (
    <header>
      <nav>
        {menus.map((menu) => (
          <Link scroll={false} key={menu.name} href={menu.link}>{menu.name}</Link>
        ))}
      </nav>
    </header>
  )
}
