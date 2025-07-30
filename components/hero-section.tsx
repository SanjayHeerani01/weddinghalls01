"use client"

import { useState } from "react"
import { Search, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function HeroSection() {
  const [searchData, setSearchData] = useState({
    location: "",
    eventType: "",
    budget: "",
    guests: "",
  })

  const handleSearch = () => {
    // Redirect to halls page with search parameters
    const params = new URLSearchParams(searchData).toString()
    window.location.href = `/halls?${params}`
  }

  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Perfect Event Hall</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Discover and book amazing venues for weddings, birthdays, parties, and special occasions
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  className="pl-10 text-gray-900"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                />
              </div>
              <Select onValueChange={(value) => setSearchData({ ...searchData, eventType: value })}>
                <SelectTrigger className="text-gray-900">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="party">Party</SelectItem>
                  <SelectItem value="mehndi">Mehndi</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setSearchData({ ...searchData, budget: value })}>
                <SelectTrigger className="text-gray-900">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100000">Under 100k</SelectItem>
                  <SelectItem value="100000-300000">100k - 300k</SelectItem>
                  <SelectItem value="300000-500000">300k - 500k</SelectItem>
                  <SelectItem value="500000+">500k+</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Guests"
                  type="number"
                  className="pl-10 text-gray-900"
                  value={searchData.guests}
                  onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
                />
              </div>
            </div>
            <Button onClick={handleSearch} className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
              <Search className="mr-2 h-5 w-5" />
              Search Venues
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
