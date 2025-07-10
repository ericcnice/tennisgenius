"use client"

import { AppHeader } from "@/components/app-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useTennisGenius } from "@/lib/tennis-genius-context"
import { cn } from "@/lib/utils"
import { users } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function RankingPage() {
  const { currentUser } = useTennisGenius()
  const router = useRouter()

  // Sort users by points in descending order
  const sortedUsers = [...users].sort((a, b) => b.points - a.points)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <AppHeader title="Ranking" />

      <main className="container mx-auto p-4">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-800">Ranking Global</h1>
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            onClick={() => router.push("/tournaments")}
          >
            Voltar aos Torneios
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {sortedUsers.map((user, index) => (
                <div
                  key={user.id}
                  className={cn("flex items-center justify-between p-4", user.id === currentUser?.id && "bg-green-50")}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-medium text-green-800">
                      {index + 1}
                    </div>
                    <Avatar>
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className={cn("font-medium", user.id === currentUser?.id && "font-bold text-green-800")}>
                      {user.name}
                      {user.id === currentUser?.id && " (Você)"}
                    </span>
                  </div>
                  <div className="font-bold text-green-700">{user.points} pts</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
