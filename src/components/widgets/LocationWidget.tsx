import { MapPin, Crosshair } from "lucide-react";
import { useGeolocation } from "@/lib/useGeolocation";

/**
 * approximate conversion of LL to MGRS
 * taken from stack overflow
 */
function formatCoords(
  lat: number,
  lon: number,
): { display: string; mgrs: string } {
  const latDir = lat >= 0 ? "N" : "S";
  const lonDir = lon >= 0 ? "E" : "W";
  const display = `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lon).toFixed(4)}° ${lonDir}`;

  const zone = Math.floor((lon + 180) / 6) + 1;
  const band = "CDEFGHJKLMNPQRSTUVWX"[Math.floor((lat + 80) / 8)] || "N";
  const easting = Math.abs(Math.round((lon % 6) * 10000 + 50000))
    .toString()
    .padStart(5, "0");
  const northing = Math.abs(Math.round((lat % 8) * 10000 + 50000))
    .toString()
    .padStart(5, "0");
  const mgrs = `${zone}${band} XX ${easting} ${northing}`;

  return { display, mgrs };
}

export function LocationWidget() {
  const { lat, lon, accuracy, loading, error } = useGeolocation();

  const coords = lat !== null && lon !== null ? formatCoords(lat, lon) : null;

  // GPS status
  let statusText = "ACQUIRING";
  let statusClass = "text-accent animate-pulse";
  if (error) {
    statusText = "ERROR";
    statusClass = "text-destructive";
  } else if (!loading && coords) {
    statusText = "LOCKED";
    statusClass = "text-primary";
  }

  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-4 py-3">
      {/* mgrs section */}
      <div className="mb-4">
        <p className="data-label mb-1">MGRS</p>
        <p className="font-tactical-bold text-2xl sm:text-3xl md:text-4xl tracking-widest text-primary">
          {coords?.mgrs ?? "-- -- ----- -----"}
        </p>
      </div>

      {/* coords in LL */}
      <div className="mb-5">
        <p className="data-label mb-1">LAT / LONG</p>
        <p className="font-tactical text-lg sm:text-xl tracking-wide text-foreground">
          {coords?.display ?? "--° --, --° --"}
        </p>
      </div>

      {/* street address */}
      <div className="w-full max-w-sm card-tactical p-3 mb-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="text-left flex-1">
            <p className="data-label text-xs mb-1">APPROX. ADDRESS</p>
            <p className="font-tactical text-sm text-muted-foreground">
              Not implemented
            </p>
          </div>
        </div>
      </div>

      {/* gps status */}
      <div className="flex items-center gap-3 px-4 py-2 bg-secondary/50 rounded-sm">
        <Crosshair className="w-4 h-4 text-primary" />
        <span className={`font-tactical text-sm ${statusClass}`}>
          {statusText}
        </span>
        <span className="font-tactical text-sm text-muted-foreground">
          ACC: {accuracy !== null ? `${accuracy}m` : "--m"}
        </span>
      </div>
    </div>
  );
}
