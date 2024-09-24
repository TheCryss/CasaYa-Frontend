// app/property/[id].tsx (or pages/property/[id].tsx if using the older structure)
"use client"

import PropertyDetailsPage from '../../../../components/features/DetailsPage/PropertyDetailsPage'

export default function PropertyDetails({ params }: { params: { id: string } }) {
  console.log("lol")
  return <PropertyDetailsPage params={params} />
}