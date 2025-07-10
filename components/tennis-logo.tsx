import { cn } from "@/lib/utils"

interface TennisLogoProps {
  className?: string
}

export function TennisLogo({ className }: TennisLogoProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-green-500 to-yellow-400 opacity-80" />
      <div className="absolute h-[85%] w-[85%] rounded-full bg-white" />
      <div className="absolute h-[70%] w-[70%] rounded-full border-2 border-dashed border-green-600" />
      <div className="absolute h-[40%] w-[2px] rotate-45 bg-green-600" />
      <div className="absolute h-[40%] w-[2px] -rotate-45 bg-green-600" />
    </div>
  )
}
