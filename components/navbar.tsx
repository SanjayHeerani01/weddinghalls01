"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">EventEase</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/halls" className="text-gray-700 hover:text-purple-600 transition-colors">
              Halls
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <Link href="/auth">
              <Button variant="outline" className="mr-2 bg-transparent">
                Sign In
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-purple-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                About
              </Link>
              <Link href="/halls" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Halls
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Link href="/auth">
                  <Button variant="outline" className="w-full bg-transparent">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
