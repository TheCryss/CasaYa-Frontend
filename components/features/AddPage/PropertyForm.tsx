import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../../contexts/AuthContext'
import InputField from './InputField'
import SelectField from './SelectField'
import TextareaField from './TextareaField'
import UploadButton from './UploadButton'
import SubmitButton from './SubmitButton'

export default function PropertyForm() {
  const propertyTypes = ['House', 'Apartment', 'Condo', 'Townhouse', 'Land']
  const { accessToken, isLoggedIn } = useAuth()
  const router = useRouter()

  const [formData, setFormData] = useState({
    propertyType: '',
    name: '',
    location: '',
    price: '',
    bedrooms: '',
    area: '',
    bathrooms: '',
    description: '',
  })

  const [userId, setUserId] = useState<number | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:8000/users/auth/users/me/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${accessToken}`,
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch user information')
        }

        const data = await response.json()
        setUserId(data.id)
      } catch (error) {
        console.error('Error fetching user information:', error)
      }
    }

    if (isLoggedIn) {
      fetchUser()
    }
  }, [accessToken, isLoggedIn])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isLoggedIn) {
      alert('You must be logged in to add a property.')
      return
    }

    if (userId === null) {
      alert('User information is not available.')
      return
    }

    console.log('Form Data:', formData) // Log formData to check if it's being updated correctly

    const payload = {
      name: formData.name,
      description: formData.description,
      type: formData.propertyType,
      price: formData.price,
      location: formData.location,
      address: formData.location, // Assuming location is the address
      rooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      parking: 0, // Default value
      area: formData.area,
      user: userId, // Use actual user ID from fetched data
    }

    console.log('Payload:', payload) // Log payload to check if it's being created correctly

    try {
      const response = await fetch('http://localhost:8000/properties/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${accessToken}`,
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      console.log('Property added:', data)
      router.push('/')
    } catch (error) {
      console.error('Error adding property:', error)
      // Handle error (e.g., display error message to user)
    }
  }

  return (
    <form className="max-w-2xl mx-auto mt-8" onSubmit={handleSubmit}>
      <h1 className="mb-6 text-3xl font-bold">Add a property</h1>
      
      <SelectField
        label="Property type"
        name="propertyType"
        options={propertyTypes}
        onChange={handleChange}
        value={formData.propertyType}
      />

      <InputField
        label="Name"
        name="name"
        type="text"
        placeholder="Enter the name of the place"
        onChange={handleChange}
        value={formData.name}
      />

      <InputField
        label="Location"
        name="location"
        type="text"
        placeholder="Enter address, neighborhood, or city"
        onChange={handleChange}
        value={formData.location}
      />
      
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Price"
          name="price"
          type="number"
          placeholder="$0"
          onChange={handleChange}
          value={formData.price}
        />
        <InputField
          label="Bedrooms"
          name="bedrooms"
          type="number"
          placeholder="0"
          onChange={handleChange}
          value={formData.bedrooms}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Area"
          name="area"
          type="number"
          placeholder="0"
          onChange={handleChange}
          value={formData.area}
        />
        <InputField
          label="Bathrooms"
          name="bathrooms"
          type="number"
          placeholder="0"
          onChange={handleChange}
          value={formData.bathrooms}
        />
      </div>
      
      <TextareaField
        label="Description"
        name="description"
        placeholder="Tell us about your property (optional)"
        onChange={handleChange}
        value={formData.description}
      />
      
      <div className="mb-6">
        <UploadButton />
      </div>
      
      <SubmitButton />
    </form>
  )
}