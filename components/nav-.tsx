'use client'

import Link from 'next/link'
import { motion } from 'framer-motion';
import React from 'react';

export default function Nav() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-between items-center py-6 px-8 bg-primary"
    >
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
    </motion.nav>
  )
}