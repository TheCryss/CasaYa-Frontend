import Header from "./core/ui/components/landing/Header"
import Hero from "./core/ui/components/landing/hero"
import SearchBar from "./core/ui/components/landing/search_bar"
import ExploreOptions from "./core/ui/components/landing/explore"
import ListProperty from "./core/ui/components/landing/list_property"

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
