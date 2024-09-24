"use client"

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import Image from 'next/image'

interface Property {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function PropertySearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [properties, setProperties] = useState<Property[]>([])
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:8000/properties/')
        if (!response.ok) {
          throw new Error('Failed to fetch properties')
        }
        const data = await response.json()
        const propertiesWithImages = data.map((property: any) => ({
          id: property.id,
          name: property.name,
          description: property.description,
          image: `/images/house_interior${Math.floor(Math.random() * 4) + 2}.jpg`, // Random image from 2 to 5
        }))
        setProperties(propertiesWithImages)
      } catch (error) {
        console.error('Error fetching properties:', error)
      }
    }

    fetchProperties()
  }, [])

  useEffect(() => {
    const term = searchParams.get('term')
    if (term) {
      setSearchTerm(term)
    }
  }, [searchParams])

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handlePropertyClick = (id: number) => {
    router.push(`/property/${id}`)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handlePropertyClick(property.id)}
            >
              <Image
                src={property.image}
                alt={property.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
                <p className="text-gray-600">{property.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}