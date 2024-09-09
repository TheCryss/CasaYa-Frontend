import Header from '../../../components/layout/Header'
import PropertyForm from '../../../components/features/AddPage/PropertyForm'

export default function Home() {
  // This could come from a context or state management solution
  const isLoggedIn = false; // or true, depending on the user's status
  const userAvatar = isLoggedIn ? "/placeholder.svg?height=40&width=40" : undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={isLoggedIn} userAvatar={userAvatar} />
      <main className="container mx-auto px-4 py-8">
        <PropertyForm />
      </main>
    </div>
  )
}