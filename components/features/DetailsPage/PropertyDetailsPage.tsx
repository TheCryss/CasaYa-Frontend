"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../../components/layout/Header'
import PropertyTitle from '../../../components/features/DetailsPage/PropertyTitle'
import Description from '../../../components/features/DetailsPage/Description'
import Amenities from '../../../components/features/DetailsPage/Amenities'
import AgentInfo from '../../../components/features/DetailsPage/AgentInfo'
import ImageGallery from '../../../components/features/DetailsPage/ImageGallery'
import { useAuth } from '../../../contexts/AuthContext'
import { Pencil, Trash2 } from 'lucide-react'

interface Property {
  id: number;
  name: string;
  description: string;
  type: string;
  price: string;
  location: string;
  address: string;
  rooms: number;
  bathrooms: number;
  area: string;
  user: number;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  email: string;
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<Property | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const { accessToken } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:8000/properties/${params.id}/`)
        if (!response.ok) {
          throw new Error('Failed to fetch property')
        }
        const data = await response.json()
        setProperty(data)
      } catch (error) {
        console.error('Error fetching property:', error)
      }
    }

    fetchProperty()
  }, [params.id])

  useEffect(() => {
    if (property) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`http://localhost:8000/user/${property.user}/`, {
            headers: {
              'Authorization': `JWT ${accessToken}`,
            },
          })
          if (!response.ok) {
            throw new Error('Failed to fetch user')
          }
          const data = await response.json()
          setUser(data)
        } catch (error) {
          console.error('Error fetching user:', error)
          setUser({ id: property.user, first_name: '[Log in to see owner\'s information]', last_name: '', phone: '', address: '', email: '[Log in to see owner\'s information]' })
        }
      }

      fetchUser()
    }
  }, [property, accessToken])

  if (!property) {
    return <div>Loading...</div>
  }

  const userName = user ? `${user.first_name} ${user.last_name}` : '[Log in to see owner\'s information]'

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <PropertyTitle name={property.name} price={property.price} location={property.location} />
        <ImageGallery />
        <Description description={property.description} />
        <Amenities
          type={property.type}
          bathrooms={property.bathrooms}
          bedrooms={property.rooms}
          location={property.location}
          price={property.price}
          area={property.area}
        />
        <AgentInfo name={userName} email={user?.email || '[Log in to see owner\'s information]'} />
      </main>
      <div className="fixed bottom-4 right-4 flex space-x-2">
        <button
         aria-label="Edit property"
          className="p-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200"
          onClick={() => router.push(`/edit/${property.id}`)}
        >
          <Pencil size={24} />
        </button>
          
        <button
          aria-label="Delete property"
          className="p-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200"
        >
          <Trash2 size={24} />
        </button>
      </div>
    </div>
  )
}