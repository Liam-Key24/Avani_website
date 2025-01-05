import Link from 'next/link';  
import React from 'react';
export const MenuSection = () => {
  return (
    <section className="py-20 px-8 bg-tertiary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl text-primary text-center mb-16">
          <span className="text-3xl block">The</span>
          Menu
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/menu/tapas-pizza.pdf" className="relative h-48 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl text-white">Tapas & Pizza</h3>
            </div>
          </Link>
          <Link href="/menu/wine-cocktails.pdf" className="relative h-48 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl text-white">Wine & Cocktails</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

