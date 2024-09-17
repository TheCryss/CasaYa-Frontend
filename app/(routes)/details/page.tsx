import Header from "../../../components/layout/Header"
import PropertyTitle from '../../../components/features/DetailsPage/PropertyTitle'
import ImageGallery from '../../../components/features/DetailsPage/ImageGallery'
import Description from '../../../components/features/DetailsPage/Description'
import Amenities from '../../../components/features/DetailsPage/Amenities'
import AgentInfo from '../../../components/features/DetailsPage/AgentInfo'
import { useAuth } from '../../../contexts/AuthContext'

export default function Home() {
  const auth = useAuth()

  return(
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <main className="container mx-auto px-4 py-8">
        <PropertyTitle />
        <ImageGallery />
        <Description />
        <Amenities />
        <AgentInfo />
      </main>
    </div>

  )
}
