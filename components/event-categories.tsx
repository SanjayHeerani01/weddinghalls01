import Link from "next/link"
import { Heart, Cake, Sparkles, Music } from "lucide-react"

const categories = [
  {
    name: "Wedding",
    icon: Heart,
    description: "Perfect venues for your special day",
    color: "bg-red-100 text-red-600",
    link: "/halls?type=wedding",
  },
  {
    name: "Birthday",
    icon: Cake,
    description: "Celebrate birthdays in style",
    color: "bg-yellow-100 text-yellow-600",
    link: "/halls?type=birthday",
  },
  {
    name: "Mehndi",
    icon: Sparkles,
    description: "Beautiful spaces for mehndi ceremonies",
    color: "bg-green-100 text-green-600",
    link: "/halls?type=mehndi",
  },
  {
    name: "Party",
    icon: Music,
    description: "Fun venues for all kinds of parties",
    color: "bg-purple-100 text-purple-600",
    link: "/halls?type=party",
  },
]

export function EventCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of event categories to find the perfect venue for your occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.link}>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 text-center group cursor-pointer">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
