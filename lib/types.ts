export interface Player {
  id: string
  name: string
  image: string
  faceImage: string // Nova propriedade para foto do rosto
  ranking: number
  titles: number
  wins: number
  losses: number
  age: number // Nova propriedade para idade
  rarity: "comum" | "raro" | "épico"
}

export interface Tournament {
  id: string
  name: string
  image: string
  startDate: string
  endDate: string
}

export interface Match {
  id: string
  player1: Player
  player2: Player
  tournament: Tournament
  date: string
  round: string
}

export interface User {
  id: string
  name: string
  avatar: string
  points: number
}

export interface Prediction {
  matchId: string
  winnerId: string
  tournamentId: string
}
