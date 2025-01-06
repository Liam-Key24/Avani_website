import Link from 'next/link'

export default function MenuSection() {
  return (
    <section className="py-20 px-8 bg-[#f5f0e8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl text-sage-800 text-center mb-16">
          <span className="text-3xl block">The</span>
          Menu
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/menu/tapas-pizza.pdf" className="relative h-48 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl text-white">Tapas & Pizza</h3>
            </div>
          </Link>
          <Link href="/menu/wine-cocktails.pdf" className="relative h-48 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl text-white">Wine & Cocktails</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

