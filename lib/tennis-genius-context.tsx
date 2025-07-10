"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Player, User, Prediction } from "./types"
import { players, users } from "./mock-data"

interface TennisGeniusContextType {
  currentUser: User | null
  predictions: Prediction[]
  collectedCards: Player[]
  lockedCards: Player[]
  makePrediction: (prediction: Prediction) => void
}

const TennisGeniusContext = createContext<TennisGeniusContextType | undefined>(undefined)

export function TennisGeniusProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [predictions, setPredictions] = useState<Prediction[]>([])
  const [collectedCards, setCollectedCards] = useState<Player[]>([])
  const [lockedCards, setLockedCards] = useState<Player[]>([])

  // Initialize with mock data
  useEffect(() => {
    // Set current user (first user from mock data)
    setCurrentUser(users[0])

    // Set initial collected and locked cards
    const initialCollected = players.slice(0, 3)
    const initialLocked = players.slice(3)

    setCollectedCards(initialCollected)
    setLockedCards(initialLocked)
  }, [])

  const makePrediction = (prediction: Prediction) => {
    // Add prediction to list
    setPredictions((prev) => [...prev, prediction])

    // Simulate card collection (50% chance to get a card)
    const shouldGetCard = Math.random() > 0.5

    if (shouldGetCard && lockedCards.length > 0) {
      // Get a random card from locked cards
      const randomIndex = Math.floor(Math.random() * lockedCards.length)
      const cardToUnlock = lockedCards[randomIndex]

      // Move card from locked to collected
      setLockedCards((prev) => prev.filter((card) => card.id !== cardToUnlock.id))
      setCollectedCards((prev) => [...prev, cardToUnlock])
    }
  }

  const value = {
    currentUser,
    predictions,
    collectedCards,
    lockedCards,
    makePrediction,
  }

  return <TennisGeniusContext.Provider value={value}>{children}</TennisGeniusContext.Provider>
}

export function useTennisGenius() {
  const context = useContext(TennisGeniusContext)

  if (context === undefined) {
    throw new Error("useTennisGenius must be used within a TennisGeniusProvider")
  }

  return context
}
