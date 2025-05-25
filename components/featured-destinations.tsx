"use client"

import { useEffect, useState } from "react"
import { DestinationCard } from "@/components/destination-card"
import type { Destination } from "@/types"
import api from "@/lib/api";


interface FeaturedDestinationsProps {
  category: string
}

export function FeaturedDestinations({ category }: FeaturedDestinationsProps) {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await api.destinations.getDestinationsByCategory(category)
        setDestinations(data.slice(0, 8)) 
      } catch (err) {
        console.error("Lỗi khi lấy điểm đến:", err)
        setError("Không thể tải điểm đến.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category])

  if (loading) return <p>Đang tải...</p>
  if (error) return <p>{error}</p>
  if (destinations.length === 0) return <p>Không có địa điểm phù hợp.</p>

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  )
}
