interface InputFieldProps {
  label: string
  name: string
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default function InputField({ label, name, type, placeholder, onChange, value }: InputFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}