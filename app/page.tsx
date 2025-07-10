import { Button } from "@/components/ui/button"
import { TennisLogo } from "@/components/tennis-logo"
import Link from "next/link"

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100 p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-6 shadow-lg">
        <div className="flex flex-col items-center space-y-6">
          <TennisLogo className="h-24 w-24" />
          <h1 className="text-center text-3xl font-bold text-green-700">Tennis Genius</h1>
          <p className="text-center text-gray-600">Faça suas previsões, colecione cards e desafie seus amigos.</p>
        </div>

        <div className="space-y-4 pt-6">
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link href="/tournaments">Entrar com conta</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
          >
            <Link href="/tournaments">Entrar como convidado</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
