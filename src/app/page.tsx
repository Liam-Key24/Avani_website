import Nav from '@/components/Nav'
import ReservationForm from '@/components/ReservationForm'
import MenuSection from '@/components/MenuSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#C2C5AA]">
      <Nav />
      
      <section className="py-20 px-8 bg-priamry">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ReservationForm />
          <div className="rounded-lg overflow-hidden h-[520px]">
            <img
              src="/food-image.jpg"
              alt="Delicious tapas and pizza"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <MenuSection />
      <ContactSection />
      
      <footer className="py-8 px-8 bg-[#C2C5AA] text-center">
        <div className="text-3xl text-secondary mb-2">AVANTI</div>
        <p className="text-sage-600">© 2025 AVANTI. All rights reserved.</p>
      </footer>
    </main>
  )
}

