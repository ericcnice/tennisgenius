"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Tournament } from "@/lib/types"
import Image from "next/image"
import { CalendarIcon } from "lucide-react"
import { formatDateRange } from "@/lib/utils"

interface TournamentCardProps {
  tournament: Tournament
  onClick: () => void
}

export function TournamentCard({ tournament, onClick }: TournamentCardProps) {
  return (
    <Card
      className="overflow-hidden transition-all hover:shadow-md hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-32 w-full bg-green-100">
        <Image src={tournament.image || "/placeholder.svg"} alt={tournament.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-green-800">{tournament.name}</h3>
        <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
          <CalendarIcon className="h-4 w-4" />
          <span>{formatDateRange(tournament.startDate, tournament.endDate)}</span>
        </div>
      </CardContent>
    </Card>
  )
}
