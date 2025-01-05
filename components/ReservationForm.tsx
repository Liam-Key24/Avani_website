'use client'

import { useState } from 'react'
import React from 'react';

import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Select } from './ui/Select'
import { Textarea } from './ui/Textarea'
import { Imprima } from 'next/font/google'

export const ReservationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    notes: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="w-full max-w-md">
      {!isSubmitted ? (
        <div className="bg-tertiary p-8 rounded-lg shadow-md h-[520px]">
          <h2 className="text-2xl text-primary mb-6">Reserve a Table</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <div className="flex gap-4">
              <Select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                options={[...Array(12)].map((_, i) => ({ 
                  value: (i + 1).toString(), 
                  label: `${i + 1} ${i === 0 ? 'Guest' : 'Guests'}` 
                }))}
              />
              <Input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <Select
              name="time"
              value={formData.time}
              onChange={handleChange}
              options={[...Array(24)].map((_, i) => ({ 
                value: `${i.toString().padStart(2, '0')}:00`, 
                label: `${i.toString().padStart(2, '0')}:00` 
              }))}
            />
            <Textarea
              name="notes"
              placeholder="Special requests..."
              value={formData.notes}
              onChange={handleChange}
            />
            <Button type="submit" className="w-full">
              Reserve
            </Button>
          </form>
        </div>
      ) : (
        <div className="bg-tertiary p-8 rounded-lg shadow-md h-[520px] flex flex-col items-center justify-center">
          <h2 className="text-2xl text-primary mb-4">Booking Complete!</h2>
          <p className="text-center text-primary/80">
            An email of confirmation will<br />be found in your email
          </p>
        </div>
      )}
    </div>
  )
}

