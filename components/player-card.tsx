"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Player } from "@/lib/types"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface PlayerCardProps {
  player: Player
  locked: boolean
  onClick?: () => void // Nova propriedade
}

export function PlayerCard({ player, locked, onClick }: PlayerCardProps) {
  const rarityColors = {
    comum: "bg-gray-100 text-gray-800",
    raro: "bg-blue-100 text-blue-800",
    épico: "bg-purple-100 text-purple-800",
  }

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all cursor-pointer",
        locked ? "grayscale" : "hover:shadow-md hover:scale-[1.02]",
      )}
      onClick={!locked ? onClick : undefined}
    >
      <div className="relative">
        <div className="relative h-48 w-full">
          <Image src={player.image || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
        </div>

        {locked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Lock className="h-10 w-10 text-white" />
          </div>
        )}

        <Badge className={cn("absolute right-2 top-2", rarityColors[player.rarity as keyof typeof rarityColors])}>
          {player.rarity}
        </Badge>
      </div>

      <CardContent className="p-3">
        <h3 className="font-bold">{player.name}</h3>
        <p className="text-xs text-gray-500">Ranking #{player.ranking}</p>
      </CardContent>
    </Card>
  )
}
