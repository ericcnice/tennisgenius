import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const startDay = start.getDate()
  const startMonth = start.toLocaleString("pt-BR", { month: "short" })

  const endDay = end.getDate()
  const endMonth = end.toLocaleString("pt-BR", { month: "short" })
  const endYear = end.getFullYear()

  if (startMonth === endMonth) {
    return `${startDay}-${endDay} ${endMonth} ${endYear}`
  } else {
    return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${endYear}`
  }
}
