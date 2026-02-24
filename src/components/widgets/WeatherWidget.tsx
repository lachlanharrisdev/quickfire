import { Droplets, Wind, Thermometer } from "lucide-react"

export function WeatherWidget() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-2">
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <Thermometer className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold">--°C</p>
          <p className="text-sm sm:text-base text-muted-foreground">Feels like --°C</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-xs">
        <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 bg-secondary rounded-xl">
          <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
          <div className="text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">Humidity</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">--%</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 bg-secondary rounded-xl">
          <Wind className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
          <div className="text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">Wind</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">-- km/h</p>
          </div>
        </div>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground mt-4 sm:mt-6">Updated: --</p>
    </div>
  )
}
