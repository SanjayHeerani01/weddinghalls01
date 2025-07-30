import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { CheckCircle, Users, Building } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EventEase</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're revolutionizing the way people find and book event venues, making your special occasions truly
            memorable.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                EventEase was born from the frustration of spending countless hours searching for the perfect event
                venue. We realized that finding and booking venues shouldn't be complicated, time-consuming, or
                stressful.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our platform connects event organizers with venue owners, creating a seamless experience that saves
                time, reduces stress, and ensures you find exactly what you're looking for.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-gray-600">Venues Listed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">10k+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div>
              <img src="/placeholder.svg?height=400&width=600" alt="EventEase Team" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple 3-step process makes finding and booking your perfect venue effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Search & Filter</h3>
              <p className="text-gray-600">
                Use our advanced search and filtering options to find venues that match your requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Compare & Choose</h3>
              <p className="text-gray-600">
                Browse detailed venue information, photos, and reviews to make an informed decision
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Book & Celebrate</h3>
              <p className="text-gray-600">
                Complete your booking securely online and get ready to celebrate at your perfect venue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Customers */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">For Event Organizers</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Save time with our intelligent search and filtering system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Compare venues side-by-side with detailed information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Read authentic reviews from previous customers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Get instant assistance from our AI chatbot</span>
                </li>
              </ul>
            </div>

            {/* For Venue Owners */}
            <div>
              <div className="flex items-center mb-6">
                <Building className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">For Venue Owners</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Reach thousands of potential customers online</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Manage bookings and inquiries from one dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Showcase your venue with high-quality photos and descriptions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Build your reputation with customer reviews and ratings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
