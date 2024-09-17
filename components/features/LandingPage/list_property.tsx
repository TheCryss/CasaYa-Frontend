import Link from 'next/link'

export default function ListProperty() {
  return (
    <div className="mb-8">
      <Link href="/add">
        <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-300">
          List your property
        </button>
      </Link>
    </div>
  )
}