import * as React from "react"
import { Home, Calculator, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavbarProps {
  active?: "home" | "calculators" | "settings"
}

export function Navbar({ active = "home" }: NavbarProps) {
  const [hovered, setHovered] = React.useState<string | null>(null)

  return (
    <nav
      className="relative flex items-end h-[72px] safe-bottom"
      onMouseLeave={() => setHovered(null)}
      onTouchEnd={() => setTimeout(() => setHovered(null), 1500)}
    >
      {/* Background bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-600 rounded-t-2xl" />

      {/* Left button - Calculators */}
      <a
        href="/calculators"
        className={cn(
          "relative z-10 flex-1 h-16 flex items-center justify-center text-white transition-colors select-none rounded-tl-2xl",
          active === "calculators" ? "bg-blue-800" : "active:bg-blue-700"
        )}
        onMouseEnter={() => setHovered("calculators")}
        onTouchStart={() => setHovered("calculators")}
        draggable={false}
      >
        <div className="relative flex flex-col items-center overflow-hidden justify-center w-full h-12">
          <Calculator
            className={cn(
              "w-10 h-10 transition-transform duration-200",
              hovered === "calculators" ? "-translate-y-10" : "translate-y-0"
            )}
          />
          <span
            className={cn(
              "absolute text-lg font-semibold transition-transform duration-200 whitespace-nowrap",
              hovered === "calculators" ? "translate-y-0" : "translate-y-10"
            )}
          >
            Calculators
          </span>
        </div>
      </a>

      {/* Center spacer for home button */}
		  {/*<div className="relative z-10 w-24 h-18" />*/}

      {/* Right button - Settings */}
      <a
        href="/settings"
        className={cn(
          "relative z-10 flex-1 h-16 flex items-center justify-center text-white transition-colors select-none rounded-tr-2xl",
          active === "settings" ? "bg-blue-800" : "active:bg-blue-700"
        )}
        onMouseEnter={() => setHovered("settings")}
        onTouchStart={() => setHovered("settings")}
        draggable={false}
      >
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden h-12">
          <Settings
            className={cn(
              "w-10 h-10 transition-transform duration-200",
              hovered === "settings" ? "-translate-y-10" : "translate-y-0"
            )}
          />
          <span
            className={cn(
              "absolute text-lg font-semibold transition-transform duration-200",
              hovered === "settings" ? "translate-y-0" : "translate-y-10"
            )}
          >
            Settings
          </span>
        </div>
      </a>

      {/* Floating home button */}
      <a
        href="/"
        className={cn(
          "absolute left-1/2 -translate-x-1/2 bottom-3 z-10 w-28 h-28 flex items-center justify-center rounded-full bg-blue-600 text-white border-4 border-background transition-colors select-none",
          active === "home" ? "bg-blue-800" : "active:bg-blue-700"
        )}
        onMouseEnter={() => setHovered("home")}
        onTouchStart={() => setHovered("home")}
        draggable={false}
      >
        <div className="relative flex flex-col items-center justify-center overflow-hidden h-10 w-full">
          <Home
            className={cn(
              "w-12 h-12 transition-transform duration-200",
              hovered === "home" ? "-translate-y-10" : "translate-y-0"
            )}
          />
          <span
            className={cn(
              "absolute text-xl font-semibold transition-transform duration-200",
              hovered === "home" ? "translate-y-0" : "translate-y-10"
            )}
          >
            Home
          </span>
        </div>
      </a>
    </nav>
  )
}
