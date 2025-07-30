"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { Star, MapPin, Calendar, Phone, Mail, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

// Mock data for hall details
const hallData = {
  1: {
    id: 1,
    name: "Royal Palace Banquet",
    location: "Karachi, Pakistan",
    address: "123 Main Street, Clifton, Karachi",
    price: 250000,
    rating: 4.8,
    reviews: 124,
    capacity: 500,
    type: "Wedding",
    indoor: true,
    amenities: ["Air Conditioning", "Sound System", "Lighting", "Parking", "Catering Kitchen", "Bridal Room"],
    description:
      "Royal Palace Banquet is a luxurious wedding venue featuring elegant interiors, state-of-the-art facilities, and exceptional service. Perfect for grand celebrations with a capacity of up to 500 guests.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    owner: {
      name: "Ahmed Khan",
      phone: "+92 300 1234567",
      email: "ahmed@royalpalace.com",
    },
    reviews: [
      {
        id: 1,
        name: "Sarah Ahmed",
        rating: 5,
        date: "2024-01-15",
        comment:
          "Absolutely stunning venue! The staff was incredibly helpful and the decorations were perfect for our wedding.",
      },
      {
        id: 2,
        name: "Ali Hassan",
        rating: 5,
        date: "2024-01-10",
        comment: "Great experience overall. The hall is spacious and well-maintained. Highly recommended!",
      },
      {
        id: 3,
        name: "Fatima Sheikh",
        rating: 4,
        date: "2024-01-05",
        comment:
          "Beautiful venue with excellent facilities. The only minor issue was parking, but everything else was perfect.",
      },
    ],
  },
}

export default function HallDetailsPage() {
  const params = useParams()
  const hallId = Number.parseInt(params.id as string)
  const hall = hallData[hallId as keyof typeof hallData]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingData, setBookingData] = useState({
    date: "",
    guests: "",
    message: "",
  })

  if (!hall) {
    return <div>Hall not found</div>
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hall.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hall.images.length) % hall.images.length)
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Booking request sent! The venue owner will contact you soon.")
    setShowBookingForm(false)
    setBookingData({ date: "", guests: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="relative mb-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src={hall.images[currentImageIndex] || "/placeholder.svg"}
              alt={hall.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {hall.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? "bg-white" : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{hall.name}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{hall.address}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{hall.rating}</span>
                      <span className="text-gray-500 ml-1">({hall.reviews.length} reviews)</span>
                    </div>
                    <Badge variant="secondary">{hall.type}</Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Venue</h2>
              <p className="text-gray-700 leading-relaxed">{hall.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hall.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
              <div className="space-y-6">
                {hall.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 font-medium">{review.name}</span>
                      <span className="ml-2 text-gray-500 text-sm">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Pricing Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">₨{hall.price.toLocaleString()}</div>
                  <div className="text-gray-500">per event</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-medium">{hall.capacity} guests</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{hall.indoor ? "Indoor" : "Outdoor"}</span>
                  </div>
                </div>

                <Button
                  onClick={() => setShowBookingForm(true)}
                  className="w-full bg-purple-600 hover:bg-purple-700 mb-4"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Now
                </Button>

                {/* Contact Owner */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Contact Owner</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm">{hall.owner.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm">{hall.owner.email}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-3 bg-transparent">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Book {hall.name}</h3>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input
                  type="date"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <input
                  type="number"
                  required
                  placeholder="Enter number of guests"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={bookingData.guests}
                  onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                <Textarea
                  placeholder="Any special requirements or questions..."
                  className="w-full"
                  value={bookingData.message}
                  onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                />
              </div>
              <div className="flex space-x-3">
                <Button type="button" variant="outline" onClick={() => setShowBookingForm(false)} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700">
                  Send Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
      <Chatbot />
    </div>
  )
}
