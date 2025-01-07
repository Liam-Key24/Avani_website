import Link from 'next/link'

export default function MenuSection() {
  return (
    <section className="py-20 px-8 bg-[#f5f0e8] ">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-secondary mb-8">
            <span className="text-6xl block italic">The</span>
            <span className="text-8xl">Menu</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <Link href="/menu/tapas-pizza.pdf" className="relative h-48 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/food.jpg')] bg-cover bg-center transition-colors opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl text-secondary">Tapas & Pizza</h3>
            </div>
          </Link>
          <Link href="/menu/wine-cocktails.pdf" className="relative h-48 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/wine.jpg')] bg-cover bg-center transition-colors opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl text-secondary">Wine & Cocktails</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

