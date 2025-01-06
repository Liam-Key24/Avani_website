import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-[#C2C5AA]">
      <Link href="/" className="text-3xl text-secondary">
        AVANTI
        <span className="block text-sm text-secondary">TAPAS | PIZZERIA</span>
      </Link>
      <div className="space-x-8">
        <Link href="/contact" className="text-secondary hover:text-sage-600">
          Contact
        </Link>
        <Link href="/menu" className="text-secondary hover:text-sage-600">
          Menu
        </Link>
      </div>
    </nav>
  )
}

