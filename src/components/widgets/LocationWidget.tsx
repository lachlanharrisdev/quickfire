export function LocationWidget() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-2">
      <p className="text-muted-foreground text-sm sm:text-base mb-1">MGRS</p>
      <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mb-4 sm:mb-6">55H FA 12345 67890</p>

      <p className="text-muted-foreground text-sm sm:text-base mb-1">Coordinates</p>
      <p className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6">-33.8688° S, 151.2093° E</p>

      <div className="w-full max-w-xs p-3 sm:p-4 bg-secondary rounded-xl">
        <p className="text-sm sm:text-base text-muted-foreground">Approx. Address</p>
        <p className="text-base sm:text-lg font-medium">Loading location...</p>
      </div>

      <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground mt-4 sm:mt-6">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        GPS Accuracy: --m
      </div>
    </div>
  )
}
