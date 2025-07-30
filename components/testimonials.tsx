import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    event: "Wedding",
    rating: 5,
    comment:
      "EventEase made finding our dream wedding venue so easy! The platform is user-friendly and the venues are exactly as described.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Muhammad Ali",
    event: "Birthday Party",
    rating: 5,
    comment:
      "Booked a hall for my daughter's birthday party. The process was smooth and the venue exceeded our expectations!",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Fatima Khan",
    event: "Corporate Event",
    rating: 4,
    comment:
      "Great selection of venues and excellent customer service. The chatbot was particularly helpful in finding the right venue.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied customers who found their perfect venues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-purple-200" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
