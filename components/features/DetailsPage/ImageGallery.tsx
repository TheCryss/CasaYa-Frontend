import Image from 'next/image'

export default function Component() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="col-span-2 row-span-2">
        <Image
          src="/images/house_interior.png?height=400&width=600"
          alt="Kitchen"
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="col-span-2">
        <Image
          src="/images/house_interior.png?height=200&width=300"
          alt="Living Room"
          width={300}
          height={200}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div>
        <Image
          src="/images/house_interior.png?height=200&width=300"
          alt="Bedroom"
          width={300}
          height={200}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div>
        <Image
          src="/images/house_interior.png?height=200&width=300"
          alt="Balcony View"
          width={300}
          height={200}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  )
}