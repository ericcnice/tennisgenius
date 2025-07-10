"use client"

import { AppHeader } from "@/components/app-header"
import { PlayerCard } from "@/components/player-card"
import { useTennisGenius } from "@/lib/tennis-genius-context"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export default function GalleryPage() {
  const { collectedCards, lockedCards } = useTennisGenius()
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <AppHeader title="Galeria" />

      <main className="container mx-auto p-4">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-800">Meus Cards</h1>
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            onClick={() => router.push("/tournaments")}
          >
            Voltar aos Torneios
          </Button>
        </div>

        <Tabs defaultValue="collected" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="collected">Conquistados ({collectedCards.length})</TabsTrigger>
            <TabsTrigger value="locked">Bloqueados ({lockedCards.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="collected">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {collectedCards.map((card) => (
                <PlayerCard key={card.id} player={card} locked={false} />
              ))}
              {collectedCards.length === 0 && (
                <div className="col-span-full py-8 text-center text-gray-500">
                  <p>Você ainda não conquistou nenhum card.</p>
                  <p className="mt-2">Faça previsões para ganhar cards!</p>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="locked">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {lockedCards.map((card) => (
                <PlayerCard key={card.id} player={card} locked={true} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
