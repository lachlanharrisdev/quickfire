import { Droplets, Wind, Thermometer } from "lucide-react";

export function WeatherWidget() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-3 py-2">
      {/* primary temp */}
      <div className="flex items-center gap-3 mb-3 sm:mb-6">
        <Thermometer className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
        <div className="text-left">
          <p className="data-label text-[10px] sm:text-xs mb-0.5">
            TEMPERATURE
          </p>
          <p className="font-tactical-bold text-3xl sm:text-5xl text-primary tracking-wide">
            --°<span className="text-xl sm:text-3xl">C</span>
          </p>
          <p className="font-tactical text-xs sm:text-sm text-muted-foreground">
            FEELS LIKE --°C
          </p>
        </div>
      </div>

      {/* other readings */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-sm">
        <div className="card-tactical p-2 sm:p-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
            <div className="text-left">
              <p className="data-label text-[10px] sm:text-xs">HUMIDITY</p>
              <p className="font-tactical-bold text-lg sm:text-2xl text-foreground">
                --
                <span className="text-xs sm:text-sm text-muted-foreground">
                  %
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="card-tactical p-2 sm:p-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <Wind className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
            <div className="text-left">
              <p className="data-label text-[10px] sm:text-xs">WIND</p>
              <p className="font-tactical-bold text-lg sm:text-2xl text-foreground">
                --
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {" "}
                  KM/H
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* lack of bothered notice */}
      <div className="mt-2 sm:mt-4 px-2 py-1 sm:px-3 sm:py-2 bg-secondary/30 rounded-sm border border-border/50">
        <p className="font-tactical text-[10px] sm:text-xs text-muted-foreground">
          WEATHER API NOT CONNECTED
        </p>
      </div>
    </div>
  );
}
