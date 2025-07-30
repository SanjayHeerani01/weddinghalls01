"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Filters {
  type: string
  priceRange: string
  location: string
  capacity: string
  indoor: string
}

interface HallFiltersProps {
  filters: Filters
  setFilters: (filters: Filters) => void
}

export function HallFilters({ filters, setFilters }: HallFiltersProps) {
  const clearFilters = () => {
    setFilters({
      type: "",
      priceRange: "",
      location: "",
      capacity: "",
      indoor: "",
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      <div className="space-y-6">
        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
          <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="party">Party</SelectItem>
              <SelectItem value="mehndi">Mehndi</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <Select value={filters.priceRange} onValueChange={(value) => setFilters({ ...filters, priceRange: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-100000">Under ₨100k</SelectItem>
              <SelectItem value="100000-200000">₨100k - ₨200k</SelectItem>
              <SelectItem value="200000-300000">₨200k - ₨300k</SelectItem>
              <SelectItem value="300000-500000">₨300k - ₨500k</SelectItem>
              <SelectItem value="500000">₨500k+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="karachi">Karachi</SelectItem>
              <SelectItem value="lahore">Lahore</SelectItem>
              <SelectItem value="islamabad">Islamabad</SelectItem>
              <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
              <SelectItem value="faisalabad">Faisalabad</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Capacity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Capacity</label>
          <Input
            type="number"
            placeholder="Number of guests"
            value={filters.capacity}
            onChange={(e) => setFilters({ ...filters, capacity: e.target.value })}
          />
        </div>

        {/* Indoor/Outdoor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Venue Type</label>
          <Select value={filters.indoor} onValueChange={(value) => setFilters({ ...filters, indoor: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Indoor/Outdoor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indoor">Indoor</SelectItem>
              <SelectItem value="outdoor">Outdoor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
