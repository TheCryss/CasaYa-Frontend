import { Upload } from 'lucide-react'

export default function UploadButton() {
  return (
    <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
      <Upload className="w-5 h-5 mr-2" />
      Upload photos
    </button>
  )
}