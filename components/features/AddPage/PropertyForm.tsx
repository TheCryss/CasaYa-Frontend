import InputField from './InputField'
import SelectField from './SelectField'
import TextareaField from './TextareaField'
import UploadButton from './UploadButton'
import SubmitButton from './SubmitButton'

export default function PropertyForm() {
  const propertyTypes = ['House', 'Apartment', 'Condo', 'Townhouse', 'Land']

  return (
    <form className="max-w-2xl mx-auto mt-8">
      <h1 className="mb-6 text-3xl font-bold">Add a property</h1>
      
      <SelectField label="Property type" name="propertyType" options={propertyTypes} />
      <InputField label="Location" name="location" type="text" placeholder="Enter address, neighborhood, or city" />
      
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Price" name="price" type="number" placeholder="$0" />
        <InputField label="Bedrooms" name="bedrooms" type="number" placeholder="0" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Price" name="price" type="number" placeholder="$0" />
        <InputField label="Bathrooms" name="bathrooms" type="number" placeholder="0" />
      </div>
      
      <TextareaField label="Description" name="description" placeholder="Tell us about your property (optional)" />
      
      <div className="mb-6">
        <UploadButton />
      </div>
      
      <SubmitButton />
    </form>
  )
}