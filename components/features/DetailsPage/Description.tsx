interface DescriptionProps {
  description: string;
}

export default function Description({ description }: DescriptionProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Description</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}