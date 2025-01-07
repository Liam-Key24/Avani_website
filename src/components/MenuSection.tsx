import Link from 'next/link'

export default function MenuSection() {
  return (
    <section className="py-10 px-8 bg-[#f5f0e8] ">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-5xl text-secondary text-center mb-8">
            <span className="text-3xl block">The</span>
            Menu
          </h2>
          <p className="text-secondary text-center text-md">
            Spanish tapas and pizzas, <br /> made traditionally.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center">
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

