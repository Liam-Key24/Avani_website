'use client'

import { useState } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon, Clock } from 'lucide-react'
import { format } from 'date-fns'

export default function ReservationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '2',
    date: new Date(),
    time: '19:00',
    notes: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
  }

  const commonStyles = "w-full h-[520px] bg-tertiary p-8 rounded-lg shadow-md"

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={commonStyles}
          >
            <h2 className="text-2xl text-primary mb-6">Reserve a Table</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-transparent border-primary"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-primary"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-transparent border-primary"
                required
              />
              <div className="flex gap-4">
                <Select
                  value={formData.guests}
                  onValueChange={(value) => setFormData({ ...formData, guests: value })}
                >
                  <SelectTrigger className="w-full bg-transparent border-primary">
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal bg-transparent border-primary"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => date && setFormData({ ...formData, date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Select
                value={formData.time}
                onValueChange={(value) => setFormData({ ...formData, time: value })}
              >
                <SelectTrigger className="w-full bg-transparent border-primary">
                  <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(24)].map((_, i) => (
                    <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                      <Clock className="mr-2 h-4 w-4 inline" />
                      {`${i.toString().padStart(2, '0')}:00`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Special requests..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="bg-transparent border-primary"
              />
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Reserve
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`${commonStyles} flex flex-col items-center justify-center`}
          >
            <h2 className="text-2xl text-primary mb-4">Booking Complete!</h2>
            <p className="text-center text-primary/80">
              An email of confirmation will<br />be found in your email
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

