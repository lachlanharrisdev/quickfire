import { Sun, Sunset, Moon, Clock } from "lucide-react";

export function SunWidget() {
    return (
        <div className="h-full flex flex-col items-center justify-center px-3 py-2 sm:px-4 sm:py-3">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full max-w-md mb-2 sm:mb-4">
                {/* sunrise */}
                <div className="card-tactical p-2 sm:p-3">
                    <div className="flex flex-col items-center text-center">
                        <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1 sm:mb-2" />
                        <p className="data-label text-[10px] sm:text-xs mb-0.5 sm:mb-1">
                            SUNRISE
                        </p>
                        <p className="font-tactical-bold text-base sm:text-xl text-foreground">
                            06:18
                        </p>
                    </div>
                </div>

                {/* Sunset */}
                <div className="card-tactical p-2 sm:p-3">
                    <div className="flex flex-col items-center text-center">
                        <Sunset className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1 sm:mb-2" />
                        <p className="data-label text-[10px] sm:text-xs mb-0.5 sm:mb-1">
                            SUNSET
                        </p>
                        <p className="font-tactical-bold text-base sm:text-xl text-foreground">
                            19:42
                        </p>
                    </div>
                </div>

                {/* twilight */}
                <div className="card-tactical p-2 sm:p-3">
                    <div className="flex flex-col items-center text-center">
                        <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1 sm:mb-2" />
                        <p className="data-label text-[10px] sm:text-xs mb-0.5 sm:mb-1">
                            TWILIGHT
                        </p>
                        <p className="font-tactical-bold text-base sm:text-xl text-foreground">
                            20:11
                        </p>
                    </div>
                </div>
            </div>

            {/* time remaining */}
            <div className="card-tactical-warning p-2.5 sm:p-4 w-full max-w-md">
                <div className="flex items-center gap-2 sm:gap-4">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
                    <div className="flex-1">
                        <p className="data-label text-[10px] sm:text-xs mb-0.5 sm:mb-1">
                            DAYLIGHT REMAINING
                        </p>
                        <div className="flex items-baseline gap-0.5 sm:gap-1">
                            <span className="font-tactical-bold text-2xl sm:text-3xl text-primary">
                                04
                            </span>
                            <span className="font-tactical text-sm sm:text-lg text-muted-foreground">
                                H
                            </span>
                            <span className="font-tactical-bold text-2xl sm:text-3xl text-primary ml-1 sm:ml-2">
                                27
                            </span>
                            <span className="font-tactical text-sm sm:text-lg text-muted-foreground">
                                M
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* notice for not being bothered */}
            <div className="mt-2 sm:mt-4 px-2 sm:px-3 py-1.5 sm:py-2 bg-secondary/30 rounded-sm border border-border/50">
                <p className="font-tactical text-[10px] sm:text-xs text-muted-foreground">
                    SUN DATA: MOCK VALUES
                </p>
            </div>
        </div>
    );
}
