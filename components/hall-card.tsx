import Link from "next/link"
import { Star, MapPin, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Hall {
  id: number
  name: string
  location: string
  price: number
  rating: number
  reviews: number
  capacity: number
  type: string
  indoor: boolean
  image: string
}

interface HallCardProps {
  hall: Hall
}

export function HallCard({ hall }: HallCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={hall.image || "/placeholder.svg"} alt={hall.name} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm">{hall.type}</span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
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
  )
}
