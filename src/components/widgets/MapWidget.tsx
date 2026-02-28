import { Map, Maximize2 } from "lucide-react";

export function MapWidget() {
  return (
    <div className="h-full flex flex-col px-4 py-3 pb-10">
      <div className="flex-1 w-full relative card-tactical overflow-hidden">
        {/* grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Map className="w-14 h-14 sm:w-16 sm:h-16 text-primary opacity-60 mb-3" />
          <p className="font-tactical-bold text-lg text-foreground tracking-wide mb-1">
            MAP VIEW
          </p>
          <p className="font-tactical text-sm text-muted-foreground">
            TAP TO EXPAND
          </p>
        </div>
      </div>
    </div>
  );
}
