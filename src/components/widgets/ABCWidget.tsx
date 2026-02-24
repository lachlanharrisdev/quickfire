import { Compass, Mountain, Gauge } from "lucide-react"

export function ABCWidget() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center gap-2 sm:gap-4 px-2">
      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-xl w-full max-w-xs">
        <Mountain className="w-8 h-8 sm:w-10 sm:h-10 text-primary shrink-0" />
        <div className="text-left">
          <p className="text-sm sm:text-base text-muted-foreground">Altitude</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">-- m</p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-xl w-full max-w-xs">
        <Gauge className="w-8 h-8 sm:w-10 sm:h-10 text-primary shrink-0" />
        <div className="text-left">
          <p className="text-sm sm:text-base text-muted-foreground">Barometer</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">-- hPa</p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-xl w-full max-w-xs">
        <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-primary shrink-0" />
        <div className="text-left">
          <p className="text-sm sm:text-base text-muted-foreground">Compass</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">--°</p>
        </div>
      </div>
    </div>
  )
}
