"use client"

import { useState } from "react"
import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { Calendar, Clock, MapPin, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const mockBookings = [
  {
    id: 1,
    hallName: "Royal Palace Banquet",
    date: "2024-02-15",
    time: "6:00 PM",
    guests: 300,
    status: "confirmed",
    amount: 250000,
    location: "Karachi, Pakistan",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 2,
    hallName: "Garden View Hall",
    date: "2024-03-20",
    time: "4:00 PM",
    guests: 200,
    status: "pending",
    amount: 180000,
    location: "Lahore, Pakistan",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 3,
    hallName: "Crystal Ballroom",
    date: "2024-01-10",
    time: "7:00 PM",
    guests: 400,
    status: "completed",
    amount: 320000,
    location: "Islamabad, Pakistan",
    image: "/placeholder.svg?height=100&width=150",
  },
]

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredBookings =
    activeTab === "all" ? mockBookings : mockBookings.filter((booking) => booking.status === activeTab)

  return (
    <UserDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="text-gray-600 mt-2">Manage your event venue bookings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className="text-gray-600">Total Bookings</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-gray-600">Confirmed</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-gray-600">Pending</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-blue-600">1</div>
            <div className="text-gray-600">Completed</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: "all", label: "All Bookings" },
                { key: "confirmed", label: "Confirmed" },
                { key: "pending", label: "Pending" },
                { key: "completed", label: "Completed" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? "border-purple-500 text-purple-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Bookings List */}
          <div className="p-6">
            {filteredBookings.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {activeTab === "all" ? "You haven't made any bookings yet." : `No ${activeTab} bookings found.`}
                </p>
                <div className="mt-6">
                  <Button className="bg-purple-600 hover:bg-purple-700">Browse Venues</Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start space-x-4">
                        <img
                          src={booking.image || "/placeholder.svg"}
                          alt={booking.hallName}
                          className="w-24 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{booking.hallName}</h3>
                          <div className="mt-1 space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              {booking.date}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="h-4 w-4 mr-2" />
                              {booking.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              {booking.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-0 md:text-right">
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </Badge>
                        <div className="mt-2">
                          <div className="text-lg font-semibold text-gray-900">₨{booking.amount.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">{booking.guests} guests</div>
                        </div>
                        <div className="mt-3 space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          {booking.status === "pending" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-700 bg-transparent"
                            >
                              Cancel
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
