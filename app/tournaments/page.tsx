"use client"

import { useState } from "react"
import { TournamentCard } from "@/components/tournament-card"
import { tournaments } from "@/lib/mock-data"
import { useRouter } from "next/navigation"
import { AppHeader } from "@/components/app-header"

export default function TournamentsPage() {
  const router = useRouter()
  const [selectedTournament, setSelectedTournament] = useState<string | null>(null)

  const handleSelectTournament = (id: string) => {
    setSelectedTournament(id)
    router.push(`/predictions/${id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <AppHeader title="Torneios" />

      <main className="container mx-auto p-4">
        <h1 className="mb-6 text-2xl font-bold text-green-800">Selecione um torneio</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {tournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
              onClick={() => handleSelectTournament(tournament.id)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
