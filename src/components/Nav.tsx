import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-1 px-8 bg-[#C2C5AA]">
      <Link href="/" className="text-[5rem] text-secondary flex flex-col items-center">
        AVANTI
        <span className="block text-lg text-secondary">TAPAS | PIZZERIA</span>
      </Link>
      <div className="space-x-8 text-lg">
        <Link href="/contact" className="text-secondary hover:text-secondary/45">
          Contact
        </Link>
        <Link href="/menu" className="text-secondary hover:text-secondary/45">
          Menu
        </Link>
      </div>
    </nav>
  )
}

