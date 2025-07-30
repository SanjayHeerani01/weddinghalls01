import Link from "next/link"
import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold">EventEase</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in finding the perfect event venues. We make event planning easy and stress-free.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-purple-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/halls" className="text-gray-300 hover:text-purple-400">
                  Venues
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/auth" className="text-gray-300 hover:text-purple-400">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-gray-300">info@eventease.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-gray-300">+92 300 1234567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 EventEase. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
