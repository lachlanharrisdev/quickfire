import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WidgetContainerProps {
    widgets: React.ReactNode[];
    labels: string[];
    className?: string;
}

export function WidgetContainer({
    widgets,
    labels,
    className,
}: WidgetContainerProps) {
    const [active, setActive] = React.useState(0);
    const touchStart = React.useRef(0);

    const prev = () =>
        setActive((i) => (i - 1 + widgets.length) % widgets.length);
    const next = () => setActive((i) => (i + 1) % widgets.length);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStart.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        const delta = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(delta) > 50) {
            delta > 0 ? prev() : next();
        }
    };

    return (
        <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className={cn(
                "relative overflow-hidden rounded-sm bg-card border border-border",
                className,
            )}
        >
            {widgets.map((widget, i) => (
                <div
                    key={i}
                    className={cn(
                        "absolute inset-0 pb-16 transition-opacity duration-200",
                        i === active
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none",
                    )}
                >
                    {widget}
                </div>
            ))}

            {/* navigation */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center h-[80px] bg-card/95 border-t border-border">
                {/* prev */}
                <button
                    onClick={prev}
                    className="h-full w-[96px] flex items-center justify-center bg-secondary/50 active:bg-primary/20 transition-colors"
                    aria-label={`Previous: ${labels[(active - 1 + labels.length) % labels.length]}`}
                >
                    <ChevronLeft className="w-7 h-7 text-primary" />
                </button>

                {/* pagination */}
                <div className="flex-1 flex flex-col items-center justify-center gap-1">
                    <span className="font-tactical text-sm text-foreground uppercase tracking-wider">
                        {labels[active]}
                    </span>
                    <div className="flex items-center gap-4">
                        {labels.map((label, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all",
                                    i === active
                                        ? "bg-primary"
                                        : "bg-muted-foreground/40",
                                )}
                                aria-label={`Go to ${label}`}
                            />
                        ))}
                    </div>
                </div>

                {/* next */}
                <button
                    onClick={next}
                    className="h-full w-[96px] flex items-center justify-center bg-secondary/50 active:bg-primary/20 transition-colors"
                    aria-label={`Next: ${labels[(active + 1) % labels.length]}`}
                >
                    <ChevronRight className="w-7 h-7 text-primary" />
                </button>
            </div>
        </div>
    );
}
