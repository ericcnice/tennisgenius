"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Match } from "@/lib/types"
import Image from "next/image"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface MatchCardProps {
  match: Match
  onSwipe: (direction: "left" | "right", matchId: string) => void
}

export function MatchCard({ match, onSwipe }: MatchCardProps) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-10, 10])
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [1, 0.5, 0, 0.5, 1])

  // Direction indicators
  const leftIndicatorOpacity = useTransform(x, [-200, -50, 0], [1, 0.5, 0])
  const rightIndicatorOpacity = useTransform(x, [0, 50, 200], [0, 0.5, 1])

  const handleDragEnd = () => {
    const xVal = x.get()
    if (xVal < -100) {
      onSwipe("left", match.id)
    } else if (xVal > 100) {
      onSwipe("right", match.id)
    }
  }

  return (
    <motion.div
      className="absolute h-full w-full"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      style={{ x, rotate }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full w-full overflow-hidden shadow-lg">
        <CardContent className="flex h-full flex-col p-0">
          <div className="flex h-full">
            {/* Left player */}
            <div className="relative flex h-full w-1/2 flex-col border-r border-dashed border-gray-300 bg-gradient-to-br from-green-50 to-green-100">
              <motion.div
                className="absolute left-4 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-green-500 text-white"
                style={{ opacity: leftIndicatorOpacity }}
              >
                <ArrowLeft className="h-8 w-8" />
              </motion.div>

              <div className="relative h-1/2 w-full">
                <Image
                  src={match.player1.image || "/placeholder.svg"}
                  alt={match.player1.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-bold text-green-800">{match.player1.name}</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p>Ranking: #{match.player1.ranking}</p>
                  <p>Títulos: {match.player1.titles}</p>
                  <p>
                    V/D: {match.player1.wins}/{match.player1.losses}
                  </p>
                </div>
              </div>
            </div>

            {/* Right player */}
            <div className="relative flex h-full w-1/2 flex-col bg-gradient-to-bl from-yellow-50 to-yellow-100">
              <motion.div
                className="absolute right-4 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-500 text-white"
                style={{ opacity: rightIndicatorOpacity }}
              >
                <ArrowRight className="h-8 w-8" />
              </motion.div>

              <div className="relative h-1/2 w-full">
                <Image
                  src={match.player2.image || "/placeholder.svg"}
                  alt={match.player2.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-bold text-yellow-800">{match.player2.name}</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p>Ranking: #{match.player2.ranking}</p>
                  <p>Títulos: {match.player2.titles}</p>
                  <p>
                    V/D: {match.player2.wins}/{match.player2.losses}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 text-center text-sm">
            <p className="font-medium">
              {match.round} - {match.tournament.name}
            </p>
            <p className="text-gray-500">{match.date}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
