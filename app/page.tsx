import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EventCategories } from "@/components/event-categories"
import { FeaturedHalls } from "@/components/featured-halls"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <EventCategories />
      <FeaturedHalls />
      <Testimonials />
      <Footer />
      <Chatbot />
    </div>
  )
}
