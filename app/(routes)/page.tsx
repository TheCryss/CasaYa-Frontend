import Header from "../../components/layout/Header"
import Hero from "../../components/features/LandingPage/hero"
import SearchBar from "../../components/features/LandingPage/search_bar"
import ExploreOptions from "../../components/features/LandingPage/explore"
import ListProperty from "../../components/features/LandingPage/list_property"

export default function Home() {

  return(
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <SearchBar />
        <ExploreOptions />
        <ListProperty />
      </main>
    </div>
  )
}
