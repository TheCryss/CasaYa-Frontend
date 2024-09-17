export default function Component() {
  const amenities = [
    { name: 'Type: ', icon: '🏠' },
    { name: 'Bathrooms: ', icon: '🚻' },
    { name: 'Bedrooms: ', icon: '🛏️' },
    { name: 'Place: ', icon: '📍' },
    { name: 'Price: ', icon: '💰' },
    { name: 'Area: ', icon: '📏' },
  ]

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map((amenity) => (
          <div key={amenity.name} className="flex items-center space-x-2 p-2 border rounded">
            <span>{amenity.icon}</span>
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}