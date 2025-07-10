"use client"

import Link from "next/link"
import { TennisLogo } from "./tennis-logo"
import { Button } from "./ui/button"
import { Trophy, User, Grid, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useTennisGenius } from "@/lib/tennis-genius-context"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface AppHeaderProps {
  title: string
}

export function AppHeader({ title }: AppHeaderProps) {
  const { currentUser } = useTennisGenius()
  const pathname = usePathname()

  const navItems = [
    { href: "/tournaments", label: "Torneios", icon: Grid },
    { href: "/gallery", label: "Galeria", icon: User },
    { href: "/ranking", label: "Ranking", icon: Trophy },
  ]

  return (
    <header className="sticky top-0 z-10 bg-white shadow">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center gap-2">
                  <TennisLogo className="h-8 w-8" />
                  <span className="text-xl font-bold text-green-700">Tennis Genius</span>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                          pathname === item.href
                            ? "bg-green-100 text-green-800"
                            : "text-gray-600 hover:bg-green-50 hover:text-green-700",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/tournaments" className="flex items-center gap-2">
            <TennisLogo className="h-8 w-8" />
            <span className="hidden text-xl font-bold text-green-700 md:inline">Tennis Genius</span>
          </Link>
        </div>

        <h1 className="text-lg font-bold text-green-800">{title}</h1>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium",
                  pathname === item.href ? "text-green-700" : "text-gray-600 hover:text-green-700",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {currentUser && (
            <Avatar>
              <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
              <AvatarFallback>{currentUser.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </header>
  )
}
