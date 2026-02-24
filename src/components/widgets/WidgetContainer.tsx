import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface WidgetContainerProps {
  widgets: React.ReactNode[]
  labels: string[]
  className?: string
}

export function WidgetContainer({ widgets, labels, className }: WidgetContainerProps) {
  const [active, setActive] = React.useState(0)
  const touchStart = React.useRef(0)

  const prev = () => setActive(i => (i - 1 + widgets.length) % widgets.length)
  const next = () => setActive(i => (i + 1) % widgets.length)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(delta) > 50) {
      delta > 0 ? prev() : next()
    }
  }

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={cn("relative overflow-hidden rounded-2xl sm:rounded-3xl bg-card border border-border", className)}
    >
      {widgets.map((widget, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 p-3 sm:p-5 transition-opacity duration-200",
            i === active ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          {widget}
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-0 bottom-0 w-16 h-16 hover:w-20 hover:h-20 flex items-center justify-center rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-2xl sm:rounded-bl-3xl bg-secondary/80 text-secondary-foreground active:scale-90 active:rounded-3xl transition-all z-10"
        aria-label={`Previous: ${labels[(active - 1 + labels.length) % labels.length]}`}
      >
        <ChevronLeft className="w-10 h-10 sm:w-9 sm:h-9" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 bottom-0 w-16 h-16 hover:w-20 hover:h-20 flex items-center justify-center rounded-tl-2xl sm:rounded-tl-3xl rounded-br-2xl sm:rounded-br-3xl bg-secondary/80 text-secondary-foreground active:scale-90 active:rounded-3xl transition-all z-10"
        aria-label={`Next: ${labels[(active + 1) % labels.length]}`}
      >
        <ChevronRight className="w-10 h-10 sm:w-9 sm:h-9" />
      </button>
    </div>
  )
}
