import { Sun, Sunset, Moon } from "lucide-react"

export function SunWidget() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-2">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-sm mb-4 sm:mb-6">
        <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-secondary rounded-xl">
          <Sun className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-1 sm:mb-2" />
          <p className="text-xs sm:text-sm text-muted-foreground">Sunrise</p>
          <p className="text-base sm:text-lg md:text-2xl font-bold">--:--</p>
        </div>

        <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-secondary rounded-xl">
          <Sunset className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-1 sm:mb-2" />
          <p className="text-xs sm:text-sm text-muted-foreground">Sunset</p>
          <p className="text-base sm:text-lg md:text-2xl font-bold">--:--</p>
        </div>

        <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-secondary rounded-xl">
          <Moon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-1 sm:mb-2" />
          <p className="text-xs sm:text-sm text-muted-foreground">Twilight</p>
          <p className="text-base sm:text-lg md:text-2xl font-bold">--:--</p>
        </div>
      </div>

      <div className="w-full max-w-sm p-3 sm:p-4 bg-secondary rounded-xl">
        <div className="flex justify-between text-sm sm:text-base">
          <span className="text-muted-foreground">Daylight remaining</span>
          <span className="font-bold">--h --m</span>
        </div>
      </div>
    </div>
  )
}
