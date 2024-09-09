'use client'

import { useEffect, useState } from 'react'
import Header from '../../../components/layout/Header'
import PropertyForm from '../../../components/features/AddPage/PropertyForm'
import { useAuth } from '../../../contexts/AuthContext'

export default function AddProperty() {
  const [isLoaded, setIsLoaded] = useState(false)
  const auth = useAuth()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return null // or return a loading indicator
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={auth?.isLoggedIn || false} userAvatar={auth?.userAvatar || undefined} />
      <main className="container mx-auto px-4 py-8">
        <PropertyForm />
      </main>
    </div>
  )
}