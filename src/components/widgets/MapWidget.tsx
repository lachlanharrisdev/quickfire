import { Map } from "lucide-react"

export function MapWidget() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-2">
      <div className="flex-1 w-full flex items-center justify-center bg-secondary rounded-xl">
        <div className="text-muted-foreground">
          <Map className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-4 opacity-50" />
          <p className="text-base sm:text-lg md:text-xl font-medium">Map View</p>
          <p className="text-sm sm:text-base">Tap to expand</p>
        </div>
      </div>
    </div>
  )
}
