"use client"

import { useState } from "react"
import { OwnerDashboardLayout } from "@/components/owner-dashboard-layout"
import { Plus, Eye, Edit, Trash2, Calendar, Users, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const mockHalls = [
  {
    id: 1,
    name: "Royal Palace Banquet",
    location: "Karachi, Pakistan",
    price: 250000,
    capacity: 500,
    type: "Wedding",
    status: "active",
    bookings: 12,
    revenue: 3000000,
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 2,
    name: "Garden View Hall",
    location: "Lahore, Pakistan",
    price: 180000,
    capacity: 300,
    type: "Wedding",
    status: "active",
    bookings: 8,
    revenue: 1440000,
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 3,
    name: "Crystal Ballroom",
    location: "Islamabad, Pakistan",
    price: 320000,
    capacity: 400,
    type: "Party",
    status: "pending",
    bookings: 0,
    revenue: 0,
    image: "/placeholder.svg?height=100&width=150",
  },
]

export default function OwnerDashboard() {
  const [halls] = useState(mockHalls)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const totalRevenue = halls.reduce((sum, hall) => sum + hall.revenue, 0)
  const totalBookings = halls.reduce((sum, hall) => sum + hall.bookings, 0)
  const activeHalls = halls.filter((hall) => hall.status === "active").length

  return (
    <OwnerDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Venues</h1>
            <p className="text-gray-600 mt-2">Manage your event hall listings</p>
          </div>
          <Link href="/dashboard/owner/add-hall">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Add New Hall
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{halls.length}</div>
                <div className="text-gray-600">Total Venues</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{activeHalls}</div>
                <div className="text-gray-600">Active Venues</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{totalBookings}</div>
                <div className="text-gray-600">Total Bookings</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">₨{totalRevenue.toLocaleString()}</div>
                <div className="text-gray-600">Total Revenue</div>
              </div>
            </div>
          </div>
        </div>

        {/* Halls List */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Your Venues</h2>
          </div>

          {halls.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No venues yet</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding your first venue.</p>
              <div className="mt-6">
                <Link href="/dashboard/owner/add-hall">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Hall
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {halls.map((hall) => (
                <div key={hall.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <img
                        src={hall.image || "/placeholder.svg"}
                        alt={hall.name}
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{hall.name}</h3>
                        <p className="text-gray-600">{hall.location}</p>
                        <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                          <span>Capacity: {hall.capacity} guests</span>
                          <span>Type: {hall.type}</span>
                          <span>Price: ₨{hall.price.toLocaleString()}</span>
                        </div>
                        <div className="mt-2 flex items-center space-x-4 text-sm">
                          <span className="text-gray-600">Bookings: {hall.bookings}</span>
                          <span className="text-gray-600">Revenue: ₨{hall.revenue.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Badge className={getStatusColor(hall.status)}>
                        {hall.status.charAt(0).toUpperCase() + hall.status.slice(1)}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </OwnerDashboardLayout>
  )
}
