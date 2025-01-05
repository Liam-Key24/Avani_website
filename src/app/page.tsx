import React from 'react';
import { Nav } from '../components/Nav'
import ReservationForm from '../components/reservation-form'
import { MenuSection } from '../components/menu-section'
import { ContactSection } from '../components/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Nav />
      
      <section className="py-20 px-8 bg-primary">
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
      
      <footer className="py-8 px-8 bg-primary text-center">
        <div className="text-3xl text-tertiary mb-2">AVANTI</div>
        <p className="text-tertiary/80">© 2025 AVANTI. All rights reserved.</p>
      </footer>
    </main>
  )
}

