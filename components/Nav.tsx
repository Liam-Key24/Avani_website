import Link from 'next/link';
import React from 'react';

export function Nav() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-primary">
      <Link href="/" className="text-3xl text-tertiary">
        AVANTI
        <span className="block text-sm text-tertiary/80">TAPAS | PIZZERIA</span>
      </Link>
      <div className="space-x-8">
        <Link href="/contact" className="text-tertiary hover:text-tertiary/80">
          Contact
        </Link>
        <Link href="/menu" className="text-tertiary hover:text-tertiary/80">
          Menu
        </Link>
      </div>
    </nav>
  )
}

