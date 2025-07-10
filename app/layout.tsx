import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { TennisGeniusProvider } from "@/lib/tennis-genius-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tennis Genius 2.0",
  description: "Faça suas previsões, colecione cards e desafie seus amigos.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TennisGeniusProvider>
            {children}
            <Toaster />
          </TennisGeniusProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
