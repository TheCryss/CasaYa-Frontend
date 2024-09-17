import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Component() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image
          src="/placeholder.svg?height=50&width=50"
          alt="Samantha Smith"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h3 className="font-bold">Samantha Smith</h3>
          <p className="text-gray-600">samantha@gmail.com</p>
        </div>
      </div>
      <div className="space-x-2">
        <Button variant="outline">Request Info</Button>
        <Button>Schedule Viewing</Button>
      </div>
    </div>
  )
}