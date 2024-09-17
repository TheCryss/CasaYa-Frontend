"use client"

import { useState } from 'react'
import { Search, User, LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Property {
  id: number;
  name: string;
  description: string;
  image: string;
}

const properties: Property[] = [
  { id: 1, name: "Cozy Cottage", description: "A charming cottage in the countryside", image: "/placeholder.svg?height=200&width=300&text=Cozy+Cottage" },
  { id: 2, name: "Modern Apartment", description: "Sleek city living with great views", image: "/placeholder.svg?height=200&width=300&text=Modern+Apartment" },
  { id: 3, name: "Seaside Villa", description: "Luxurious beachfront property", image: "/placeholder.svg?height=200&width=300&text=Seaside+Villa" },
  { id: 4, name: "Mountain Retreat", description: "Secluded cabin with stunning vistas", image: "/placeholder.svg?height=200&width=300&text=Mountain+Retreat" },
  { id: 5, name: "Urban Loft", description: "Industrial-chic space in the heart of downtown", image: "/placeholder.svg?height=200&width=300&text=Urban+Loft" },
  { id: 6, name: "Suburban Family Home", description: "Spacious house perfect for families", image: "/placeholder.svg?height=200&width=300&text=Suburban+Family+Home" },
]

export default function PropertySearchPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            🏠 Nest Finder
          </Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Profile">
              <User className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Sign out">
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

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
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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