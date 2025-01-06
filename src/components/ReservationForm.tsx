'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function ReservationForm() {
    const today = new Date().toISOString().split('T')[0];
  const [isSubmitted, setIsSubmitted] = useState(false)
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
        <div className={commonStyles}>
          <h2 className="text-3xl text-secondary mb-6">Reserve a Table</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="bg-transparent border-sage-300 italic opacity-70 text-sage-800"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-transparent border-sage-300 italic opacity-70 text-sage-800"
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-transparent border-sage-300 italic opacity-70 text-sage-800"
              required
            />
            <div className="flex gap-4">
              <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                <SelectTrigger className="w-full bg-transparent border-sage-300">
                  <SelectValue placeholder="Guests" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(12)].map((_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-transparent border-sage-300 italic opacity-70 text-sage-800"
                required
              />
            </div>
            <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
              <SelectTrigger className="w-full bg-transparent border-sage-300">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(24)].map((_, i) => (
                  <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                    {`${i.toString().padStart(2, '0')}:00`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Special requests..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="bg-transparent border-sage-300 italic opacity-70 text-sage-800 resize-none"
            />
            <Button 
              type="submit"
              className="w-full bg-secondary-900 hover:bg-sec text-white"
            >
              Reserve
            </Button>
          </form>
        </div>
      ) : (
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

