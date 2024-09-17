"use client"

import Header from "../../components/layout/Header"
import Hero from "../../components/features/LandingPage/hero"
import SearchBar from "../../components/features/LandingPage/search_bar"
import ExploreOptions from "../../components/features/LandingPage/explore"
import ListProperty from "../../components/features/LandingPage/list_property"
import { useAuth } from '../../contexts/AuthContext'

export default function Home() {

  const auth = useAuth()

  return(
    <div className="min-h-screen bg-gray-100">
      <Header isLoggedIn={auth?.isLoggedIn || false} userAvatar={auth?.userAvatar || undefined} />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <SearchBar />
        <ExploreOptions />
        <ListProperty />
      </main>
    </div>
  )
}
