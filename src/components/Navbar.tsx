import * as React from "react";
import { Home, Calculator, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
    active?: "home" | "calculators" | "settings";
}

export function Navbar({ active = "home" }: NavbarProps) {
    return (
        <nav className="relative flex items-end h-20 safe-bottom">
            {/* Background bar with tactical styling */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-card border-t-2 border-primary/50" />

            {/* calcs */}
            <a
                href="/calculators"
                className={cn(
                    "relative z-10 flex-1 h-20 flex flex-col items-center justify-center gap-1 transition-colors select-none touch-target",
                    active === "calculators"
                        ? "bg-primary/20 text-primary border-t-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 active:bg-primary/10 border-t-2 border-transparent",
                )}
                draggable={false}
            >
                <Calculator className="w-7 h-7 sm:w-8 sm:h-8" />
                <span className="font-tactical text-xs sm:text-sm uppercase tracking-wider">
                    Calc
                </span>
            </a>

            {/* specially decorated home button */}
            <a
                href="/"
                className={cn(
                    "relative z-20 flex flex-col items-center justify-center gap-0.5 -mt-3 -mb-3 mx-1 w-36 h-[101px] rounded-sm transition-colors select-none",
                    "bg-card border-2",
                    active === "home"
                        ? "border-primary text-primary shadow-[0_0_16px_hsl(var(--primary)/0.2)]"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50 active:bg-primary/10",
                )}
                draggable={false}
            >
                <Home className="w-8 h-8 sm:w-9 sm:h-9" />
                <span className="font-tactical-bold text-xs sm:text-sm uppercase tracking-wider">
                    Home
                </span>
            </a>

            {/* settings */}
            <a
                href="/settings"
                className={cn(
                    "relative z-10 flex-1 h-20 flex flex-col items-center justify-center gap-1 transition-colors select-none touch-target",
                    active === "settings"
                        ? "bg-primary/20 text-primary border-t-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 active:bg-primary/10 border-t-2 border-transparent",
                )}
                draggable={false}
            >
                <Settings className="w-7 h-7 sm:w-8 sm:h-8" />
                <span className="font-tactical text-xs sm:text-sm uppercase tracking-wider">
                    Settings
                </span>
            </a>
        </nav>
    );
}
