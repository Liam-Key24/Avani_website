'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'


export default function ReservationForm() {
    const today = new Date().toISOString().split('T')[0];
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // Add useEffect to clear localStorage on mount
  useEffect(() => {
    localStorage.clear(); // This will clear all localStorage items
    // Or to clear specific items:
    // localStorage.removeItem('savedDirections');
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '2',
    date: today,
    time: '19:00',
    notes: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
  }

  const commonStyles = "w-full h-[520px] bg-[#f5f0e8] p-8 rounded-lg shadow-md"

  return (
    <div className="w-full max-w-md">
      {!isSubmitted ? (
        // Reservation form with fields for:
        // - Full name (text input)
        // - Email (email input) 
        // - Phone (tel input)
        // - Date picker
        // - Guest count selector (1-12)
        // - Time selector (00:00-23:00)
        // - Special requests textarea
        // - Submit button
        <div className={commonStyles}>
          <h2 className="text-3xl text-secondary mb-6">Reserve a Table</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="bg-transparent border-secondary/45 italic opacity-70 text-secondary"
              required
            />
            <Input
              type="email" 
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-transparent border-secondary/45 italic opacity-70 text-secondary"
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-transparent border-secondary/45 italic opacity-70 text-secondary"
              required
            />
            <div className="inline-flex gap-4 w-full">
              <div className="flex-1">
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-transparent border-secondary/45 italic opacity-70 text-secondary"
                  required
                />
              </div>
              <div className="flex-1">
                <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                  <SelectTrigger className="w-full bg-transparent border-secondary/45 italic opacity-70 text-secondary">
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent className="bg-quaternary">
                    {[...Array(12)].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                  <SelectTrigger className="w-full bg-transparent border-secondary/45 italic opacity-70 text-secondary">
                    <SelectValue placeholder="Time" />
                  </SelectTrigger>
                  <SelectContent className="bg-quaternary">
                    {[11, 12, 13, 14, 17, 18, 19, 20, 21, 22].map((hour) => (
                      <SelectItem key={hour} value={`${hour.toString().padStart(2, '0')}:00`}>
                        {`${hour.toString().padStart(2, '0')}:00`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Textarea
              placeholder="Special requests & dietary requirements..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="bg-transparent border-secondary/45 italic resize-none text-secondary"
            />
            <Button 
              type="submit"
              className="w-1/2 bg-[#C4C7B0] hover:bg-[#C4C7B0]/50 text-secondary text-lg font-baskervville rounded-lg shadow-md"
            >
              Reserve
            </Button>
          </form>
        </div>
      ) : (
        // Success message shown after form submission
        <div className={`${commonStyles} flex flex-col items-center justify-center`}>
          <h2 className="text-3xl text-secondary mb-4">Booking Complete!</h2>
          <p className="text-center text-secondary">
            An email of confirmation will<br />be found in your email
          </p>
        </div>
      )}
    </div>
  )
}

