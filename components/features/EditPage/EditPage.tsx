'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import Header from '../../layout/Header'
import { useAuth } from '../../../contexts/AuthContext'

export default function EditPropertyListing() {
  const [property, setProperty] = useState(null)
  const [propertyType, setPropertyType] = useState('')
  const router = useRouter()
  const { id } = useParams()
  const { accessToken } = useAuth()

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:8000/properties/${id}/`)
        if (!response.ok) {
          throw new Error('Failed to fetch property')
        }
        const data = await response.json()
        setProperty(data)
        setPropertyType(data.type)
      } catch (error) {
        console.error('Error fetching property:', error)
      }
    }

    fetchProperty()
  }, [id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const updatedProperty = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(`http://localhost:8000/properties/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${accessToken}`,
        },
        body: JSON.stringify(updatedProperty),
      })

      if (!response.ok) {
        throw new Error('Failed to update property')
      }

      // Redirect to the property details page after successful update
      router.push(`/property/${id}`)
    } catch (error) {
      console.error('Error updating property:', error)
    }
  }

  if (!property) {
    return <div>Loading...</div>
  }

  const propertyTypes = [
    'Single family home', 'Townhouse', 'Condo', 'Apartment', 'Multi-family',
    'Mobile/Manufactured', 'Farm/Ranch', 'Land', 'Commercial', 'Other'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Edit your property listing</h1>
        <p className="text-gray-600 mb-8">Make changes to your listing details</p>

        <form onSubmit={handleSubmit}>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Property type</h2>
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setPropertyType(type)}
                  className={`px-4 py-2 rounded-full border ${
                    propertyType === type
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <input type="hidden" name="type" value={propertyType} />
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  defaultValue={property.location}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter the property address"
                />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Price</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  List price
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  defaultValue={property.price}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="$"
                />
              </div>
              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                  Area
                </label>
                <input
                  type="number"
                  id="area"
                  name="area"
                  defaultValue={property.area}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Area in sq ft"
                />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <textarea
              id="description"
              name="description"
              rows={4}
              defaultValue={property.description}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Describe your property..."
            ></textarea>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Rooms</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <input
                  type="number"
                  id="rooms"
                  name="rooms"
                  defaultValue={property.rooms}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Number of Bedrooms"
                />
              </div>
              <div>
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
                  Bathrooms
                </label>
                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  defaultValue={property.bathrooms}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Number of Bathrooms"
                />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Photos</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Photo ${index}`}
                    alt={`Property photo ${index}`}
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Save changes
            </button>
            <button
              type="button"
              className="text-red-600 hover:text-red-800 focus:outline-none"
              onClick={() => router.push(`/property/${id}`)}
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}