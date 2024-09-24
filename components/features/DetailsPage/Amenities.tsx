interface AmenitiesProps {
  type: string;
  bathrooms: number;
  bedrooms: number;
  location: string;
  price: string;
  area: string;
}

export default function Amenities({ type, bathrooms, bedrooms, location, price, area }: AmenitiesProps) {
  const amenities = [
    { name: `Type: ${type}`, icon: '🏠' },
    { name: `Bathrooms: ${bathrooms}`, icon: '🚻' },
    { name: `Bedrooms: ${bedrooms}`, icon: '🛏️' },
    { name: `Place: ${location}`, icon: '📍' },
    { name: `Price: ${price}`, icon: '💰' },
    { name: `Area: ${area}`, icon: '📏' },
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