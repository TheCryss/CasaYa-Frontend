interface TextareaFieldProps {
  label: string
  name: string
  placeholder: string
}

export default function TextareaField({ label, name, placeholder }: TextareaFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}