"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { Player } from "@/lib/types"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { X, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface PlayerCardModalProps {
  player: Player | null
  isOpen: boolean
  onClose: () => void
  onPrevious?: () => void
  onNext?: () => void
  showNavigation?: boolean
}

export function PlayerCardModal({
  player,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  showNavigation = false,
}: PlayerCardModalProps) {
  if (!player) return null

  const rarityColors = {
    comum: "from-gray-400 to-gray-600",
    raro: "from-blue-400 to-blue-600",
    épico: "from-purple-500 to-orange-500",
  }

  const rarityBgColors = {
    comum: "bg-gray-500",
    raro: "bg-blue-500",
    épico: "bg-gradient-to-r from-purple-500 to-orange-500",
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm p-0 bg-transparent border-none shadow-none">
        <div
          className={cn(
            "relative h-[80vh] w-full rounded-3xl overflow-hidden",
            "bg-gradient-to-b",
            rarityColors[player.rarity as keyof typeof rarityColors],
          )}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation buttons */}
          {showNavigation && (
            <>
              {onPrevious && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-4 z-10 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={onPrevious}
                >
                  <ArrowLeft className="h-6 w-6" />
                </Button>
              )}
              {onNext && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-4 z-10 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={onNext}
                >
                  <ArrowRight className="h-6 w-6" />
                </Button>
              )}
            </>
          )}

          {/* Rarity badge */}
          <Badge
            className={cn(
              "absolute top-4 left-4 z-10 text-white border-white/30",
              rarityBgColors[player.rarity as keyof typeof rarityBgColors],
            )}
          >
            {player.rarity.toUpperCase()}
          </Badge>

          {/* Player image */}
          <div className="relative h-1/2 w-full">
            <Image
              src={player.faceImage || "/placeholder.svg"}
              alt={player.name}
              fill
              className="object-cover object-top"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Player info */}
          <div className="flex flex-col justify-center h-1/2 p-8 text-white">
            <h1 className="text-4xl font-bold mb-8 text-center leading-tight">{player.name.toUpperCase()}</h1>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium opacity-90">AGE</span>
                <span className="text-2xl font-bold">{player.age}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-medium opacity-90">RANK</span>
                <span className="text-2xl font-bold">#{player.ranking}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-medium opacity-90">TITLES</span>
                <span className="text-2xl font-bold">{player.titles}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-medium opacity-90">WIN-LOSS</span>
                <span className="text-2xl font-bold">
                  {player.wins}-{player.losses}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
