'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '../../layout/Header'

export default function EditPropertyListing() {
  const [propertyType, setPropertyType] = useState('')

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

        <form>
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
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter the property address"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="State"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-1">
                  Zip code
                </label>
                <input
                  type="text"
                  id="zipcode"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Zip code"
                />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Price</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="listPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  List price
                </label>
                <input
                  type="text"
                  id="listPrice"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="$"
                />
              </div>
              <div>
                <label htmlFor="monthlyRent" className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly rent
                </label>
                <input
                  type="text"
                  id="monthlyRent"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="$"
                />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <textarea
              id="description"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Describe your property..."
            ></textarea>
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
            >
              Delete listing
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}