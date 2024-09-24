interface SelectFieldProps {
  label: string
  name: string
  options: string[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
}

export default function SelectField({ label, name, options, onChange, value }: SelectFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        onChange={onChange}
        value={value}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}