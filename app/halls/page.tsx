"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { HallCard } from "@/components/hall-card"
import { HallFilters } from "@/components/hall-filters"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock data for halls
const allHalls = [
  {
    id: 1,
    name: "Royal Palace Banquet",
    location: "Karachi, Pakistan",
    price: 250000,
    rating: 4.8,
    reviews: 124,
    capacity: 500,
    type: "Wedding",
    indoor: true,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    name: "Garden View Hall",
    location: "Lahore, Pakistan",
    price: 180000,
    rating: 4.6,
    reviews: 89,
    capacity: 300,
    type: "Wedding",
    indoor: false,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    name: "Crystal Ballroom",
    location: "Islamabad, Pakistan",
    price: 320000,
    rating: 4.9,
    reviews: 156,
    capacity: 400,
    type: "Party",
    indoor: true,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    name: "Sunset Terrace",
    location: "Karachi, Pakistan",
    price: 150000,
    rating: 4.5,
    reviews: 67,
    capacity: 200,
    type: "Birthday",
    indoor: false,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    name: "Grand Marquee",
    location: "Lahore, Pakistan",
    price: 280000,
    rating: 4.7,
    reviews: 98,
    capacity: 600,
    type: "Wedding",
    indoor: false,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    name: "Elite Conference Center",
    location: "Karachi, Pakistan",
    price: 120000,
    rating: 4.4,
    reviews: 45,
    capacity: 150,
    type: "Corporate",
    indoor: true,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function HallsPage() {
  const [filteredHalls, setFilteredHalls] = useState(allHalls)
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    type: "",
    priceRange: "",
    location: "",
    capacity: "",
    indoor: "",
  })

  useEffect(() => {
    let filtered = allHalls

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (hall) =>
          hall.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hall.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply other filters
    if (filters.type) {
      filtered = filtered.filter((hall) => hall.type.toLowerCase() === filters.type.toLowerCase())
    }

    if (filters.location) {
      filtered = filtered.filter((hall) => hall.location.toLowerCase().includes(filters.location.toLowerCase()))
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number)
      filtered = filtered.filter((hall) => {
        if (max) {
          return hall.price >= min && hall.price <= max
        } else {
          return hall.price >= min
        }
      })
    }

    if (filters.capacity) {
      const minCapacity = Number.parseInt(filters.capacity)
      filtered = filtered.filter((hall) => hall.capacity >= minCapacity)
    }

    if (filters.indoor) {
      const isIndoor = filters.indoor === "indoor"
      filtered = filtered.filter((hall) => hall.indoor === isIndoor)
    }

    setFilteredHalls(filtered)
  }, [searchTerm, filters])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="bg-white shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore Event Venues</h1>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search venues by name or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`}>
            <HallFilters filters={filters} setFilters={setFilters} />
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredHalls.length} of {allHalls.length} venues
              </p>
            </div>

            {filteredHalls.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No venues found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setFilters({
                      type: "",
                      priceRange: "",
                      location: "",
                      capacity: "",
                      indoor: "",
                    })
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredHalls.map((hall) => (
                  <HallCard key={hall.id} hall={hall} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <Chatbot />
    </div>
  )
}
