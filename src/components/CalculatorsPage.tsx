import { Clock, Droplets, Flame, Wind, Gauge, Ruler } from "lucide-react";
import { Navbar } from "./Navbar";

const calculators = [
    { href: "/calc/eta", icon: Clock, label: "ETA" },
    { href: "/calc/flow-rate", icon: Droplets, label: "Flow Rate" },
    { href: "/calc/fire-danger", icon: Flame, label: "Fire Danger" },
    { href: "/calc/fire-speed", icon: Wind, label: "Fire Speed" },
    { href: "/calc/pressure", icon: Gauge, label: "Pressure Loss" },
    { href: "/calc/distance", icon: Ruler, label: "Distance" },
];

export function CalculatorsPage() {
    return (
        <>
            <h1 className="font-tactical-bold text-xl sm:text-2xl text-primary uppercase tracking-wider">
                Calculators
            </h1>

            <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3 overflow-y-auto pb-2 min-h-0">
                {calculators.map(({ href, icon: Icon, label }) => (
                    <a
                        key={href}
                        href={href}
                        className="card-tactical flex flex-col items-center justify-center gap-1 sm:gap-2 p-4 sm:p-6 active:scale-95 transition-transform"
                    >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                        <span className="font-tactical text-xs sm:text-sm text-center uppercase tracking-wider">
                            {label}
                        </span>
                    </a>
                ))}
            </div>

            <Navbar active="calculators" />
        </>
    );
}
