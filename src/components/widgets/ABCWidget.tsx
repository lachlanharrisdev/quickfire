import { Compass, Mountain, Gauge } from "lucide-react";

export function ABCWidget() {
    return (
        <div className="h-full flex flex-col items-center justify-center gap-3 px-4 py-3">
            {/* alt */}
            <div className="card-tactical p-3 w-full max-w-sm">
                <div className="flex items-center gap-4">
                    <Mountain className="w-7 h-7 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                        <p className="data-label text-xs mb-0.5">ALTITUDE</p>
                        <p className="font-tactical-bold text-2xl sm:text-3xl text-primary tracking-wide">
                            42
                            <span className="text-base text-muted-foreground">
                                {" "}
                                M
                            </span>
                        </p>
                    </div>
                    <span className="font-tactical text-xs text-muted-foreground">
                        ASL
                    </span>
                </div>
            </div>

            {/* baro */}
            <div className="card-tactical p-3 w-full max-w-sm">
                <div className="flex items-center gap-4">
                    <Gauge className="w-7 h-7 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                        <p className="data-label text-xs mb-0.5">BAROMETER</p>
                        <p className="font-tactical-bold text-2xl sm:text-3xl text-foreground tracking-wide">
                            1013
                            <span className="text-base text-muted-foreground">
                                {" "}
                                HPA
                            </span>
                        </p>
                    </div>
                    <span className="font-tactical text-xs text-muted-foreground">
                        QNH
                    </span>
                </div>
            </div>

            {/* compass */}
            <div className="card-tactical p-3 w-full max-w-sm">
                <div className="flex items-center gap-4">
                    <Compass className="w-7 h-7 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                        <p className="data-label text-xs mb-0.5">COMPASS</p>
                        <p className="font-tactical-bold text-2xl sm:text-3xl text-foreground tracking-wide">
                            037
                            <span className="text-base text-muted-foreground">
                                °
                            </span>
                            <span className="text-lg text-primary ml-2">
                                NE
                            </span>
                        </p>
                    </div>
                    <span className="font-tactical text-xs text-muted-foreground">
                        MAG
                    </span>
                </div>
            </div>
        </div>
    );
}
