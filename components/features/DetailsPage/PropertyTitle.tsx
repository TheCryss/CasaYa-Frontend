interface PropertyTitleProps {
  name: string;
  price: string;
  location: string;
}

export default function PropertyTitle({ name, price, location }: PropertyTitleProps) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-gray-600">{location} · ${price}</p>
    </div>
  )
}