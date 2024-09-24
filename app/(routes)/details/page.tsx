"use client"

import { useRouter } from 'next/router'
import PropertyDetailsPage from '../../../components/features/DetailsPage/PropertyDetailsPage'
import Header from '../../../components/layout/Header'

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()

  return (
    <>
      <Header />
      <PropertyDetailsPage params={params} />
    </>
  )
}