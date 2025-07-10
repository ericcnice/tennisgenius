"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { MatchCard } from "@/components/match-card"
import { AppHeader } from "@/components/app-header"
import { getMatchesByTournament } from "@/lib/mock-data"
import { useTennisGenius } from "@/lib/tennis-genius-context"
import type { Match } from "@/lib/types"
import { AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function PredictionsPage() {
  const params = useParams()
  const router = useRouter()
  const tournamentId = params.tournamentId as string
  const [matches, setMatches] = useState<Match[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const { makePrediction } = useTennisGenius()

  useEffect(() => {
    const tournamentMatches = getMatchesByTournament(tournamentId)
    setMatches(tournamentMatches)
  }, [tournamentId])

  const handleSwipe = (direction: "left" | "right", matchId: string) => {
    // Left means player1 wins, right means player2 wins
    const winnerId = direction === "left" ? matches[currentIndex].player1.id : matches[currentIndex].player2.id

    makePrediction({
      matchId,
      winnerId,
      tournamentId,
    })

    // Move to next card
    if (currentIndex < matches.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // No more matches, show completion message or redirect
      router.push("/gallery")
    }
  }

  if (matches.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
        <p>Carregando partidas...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <AppHeader title="Previsões" />

      <main className="container mx-auto flex flex-col items-center p-4">
        <Button variant="ghost" className="self-start mb-4" onClick={() => router.push("/tournaments")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <div className="relative h-[70vh] w-full max-w-md">
          <AnimatePresence>
            {currentIndex < matches.length && (
              <MatchCard key={matches[currentIndex].id} match={matches[currentIndex]} onSwipe={handleSwipe} />
            )}
          </AnimatePresence>
        </div>

        {currentIndex >= matches.length && (
          <div className="mt-8 text-center">
            <h2 className="text-xl font-bold text-green-800">Todas as previsões feitas!</h2>
            <p className="mt-2 text-gray-600">Confira sua galeria de cards conquistados.</p>
            <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={() => router.push("/gallery")}>
              Ver Galeria
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
