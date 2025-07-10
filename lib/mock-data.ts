import type { Player, Tournament, Match, User } from "./types"

// Players
export const players: Player[] = [
  {
    id: "p1",
    name: "Rafael Nadal",
    image: "/images/players/nadal.png",
    faceImage: "/images/players/nadal-face.png",
    ranking: 2,
    titles: 22,
    wins: 1068,
    losses: 220,
    age: 37,
    rarity: "épico",
  },
  {
    id: "p2",
    name: "Novak Djokovic",
    image: "/images/players/djokovic.png",
    faceImage: "/images/players/djokovic-face.png",
    ranking: 1,
    titles: 24,
    wins: 1084,
    losses: 210,
    age: 36,
    rarity: "épico",
  },
  {
    id: "p3",
    name: "Carlos Alcaraz",
    image: "/images/players/alcaraz.png",
    faceImage: "/images/players/alcaraz-face.png",
    ranking: 3,
    titles: 12,
    wins: 156,
    losses: 42,
    age: 21,
    rarity: "raro",
  },
  {
    id: "p4",
    name: "Jannik Sinner",
    image: "/images/players/sinner.png",
    faceImage: "/images/players/sinner-face.png",
    ranking: 4,
    titles: 10,
    wins: 142,
    losses: 50,
    age: 22,
    rarity: "raro",
  },
  {
    id: "p5",
    name: "Daniil Medvedev",
    image: "/images/players/medvedev.png",
    faceImage: "/images/players/medvedev-face.png",
    ranking: 5,
    titles: 18,
    wins: 250,
    losses: 120,
    age: 28,
    rarity: "raro",
  },
  {
    id: "p6",
    name: "Alexander Zverev",
    image: "/images/players/zverev.png",
    faceImage: "/images/players/zverev-face.png",
    ranking: 6,
    titles: 20,
    wins: 365,
    losses: 180,
    age: 26,
    rarity: "comum",
  },
  {
    id: "p7",
    name: "Stefanos Tsitsipas",
    image: "/images/players/tsitsipas.png",
    faceImage: "/images/players/tsitsipas-face.png",
    ranking: 7,
    titles: 10,
    wins: 248,
    losses: 130,
    age: 25,
    rarity: "comum",
  },
  {
    id: "p8",
    name: "Andrey Rublev",
    image: "/images/players/rublev.png",
    faceImage: "/images/players/rublev-face.png",
    ranking: 8,
    titles: 14,
    wins: 320,
    losses: 190,
    age: 26,
    rarity: "comum",
  },
]

// Tournaments
export const tournaments: Tournament[] = [
  {
    id: "t1",
    name: "Wimbledon",
    image: "/images/tournaments/wimbledon.png",
    startDate: "2025-06-28",
    endDate: "2025-07-11",
  },
  {
    id: "t2",
    name: "US Open",
    image: "/images/tournaments/us-open.png",
    startDate: "2025-08-25",
    endDate: "2025-09-07",
  },
  {
    id: "t3",
    name: "Roland Garros",
    image: "/images/tournaments/roland-garros.png",
    startDate: "2025-05-26",
    endDate: "2025-06-09",
  },
  {
    id: "t4",
    name: "Australian Open",
    image: "/images/tournaments/australian-open.png",
    startDate: "2026-01-18",
    endDate: "2026-01-31",
  },
]

// Matches
const createMatches = (tournamentId: string): Match[] => {
  const tournament = tournaments.find((t) => t.id === tournamentId)!

  return [
    {
      id: `m1-${tournamentId}`,
      player1: players[0],
      player2: players[1],
      tournament,
      date: "10/07/2025",
      round: "Final",
    },
    {
      id: `m2-${tournamentId}`,
      player1: players[2],
      player2: players[3],
      tournament,
      date: "09/07/2025",
      round: "Semi-final",
    },
    {
      id: `m3-${tournamentId}`,
      player1: players[4],
      player2: players[5],
      tournament,
      date: "08/07/2025",
      round: "Quartas de final",
    },
    {
      id: `m4-${tournamentId}`,
      player1: players[6],
      player2: players[7],
      tournament,
      date: "07/07/2025",
      round: "Oitavas de final",
    },
  ]
}

// Get matches by tournament
export const getMatchesByTournament = (tournamentId: string): Match[] => {
  return createMatches(tournamentId)
}

// Users
export const users: User[] = [
  {
    id: "u1",
    name: "João Silva",
    avatar: "/images/users/joao.png",
    points: 1250,
  },
  {
    id: "u2",
    name: "Maria Oliveira",
    avatar: "/images/users/maria.png",
    points: 1450,
  },
  {
    id: "u3",
    name: "Pedro Santos",
    avatar: "/images/users/pedro.png",
    points: 980,
  },
  {
    id: "u4",
    name: "Ana Costa",
    avatar: "/images/users/ana.png",
    points: 1320,
  },
  {
    id: "u5",
    name: "Lucas Ferreira",
    avatar: "/images/users/lucas.png",
    points: 1100,
  },
]
