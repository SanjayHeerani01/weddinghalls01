import Link from "next/link"
import { Star, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredHalls = [
  {
    id: 1,
    name: "Royal Palace Banquet",
    location: "Karachi, Pakistan",
    price: 250000,
    rating: 4.8,
    reviews: 124,
    capacity: 500,
    image: "/placeholder.svg?height=300&width=400",
    type: "Wedding",
  },
  {
    id: 2,
    name: "Garden View Hall",
    location: "Lahore, Pakistan",
    price: 180000,
    rating: 4.6,
    reviews: 89,
    capacity: 300,
    image: "/placeholder.svg?height=300&width=400",
    type: "Wedding",
  },
  {
    id: 3,
    name: "Crystal Ballroom",
    location: "Islamabad, Pakistan",
    price: 320000,
    rating: 4.9,
    reviews: 156,
    capacity: 400,
    image: "/placeholder.svg?height=300&width=400",
    type: "Party",
  },
  {
    id: 4,
    name: "Sunset Terrace",
    location: "Karachi, Pakistan",
    price: 150000,
    rating: 4.5,
    reviews: 67,
    capacity: 200,
    image: "/placeholder.svg?height=300&width=400",
    type: "Birthday",
  },
]

export function FeaturedHalls() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Venues</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium event venues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredHalls.map((hall) => (
            <div
              key={hall.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img src={hall.image || "/placeholder.svg"} alt={hall.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm">{hall.type}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{hall.name}</h3>

                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{hall.location}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-2">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">Up to {hall.capacity} guests</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{hall.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({hall.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">₨{hall.price.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm">/event</span>
                  </div>
                  <Link href={`/halls/${hall.id}`}>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/halls">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
            >
              View All Venues
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
