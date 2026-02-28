import { ChevronLeft, Construction } from "lucide-react";
import { Navbar } from "./Navbar";

interface CalcPlaceholderProps {
  name: string;
}

export function CalcPlaceholder({ name }: CalcPlaceholderProps) {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <a
          href="/calculators"
          className="flex items-center justify-center w-12 h-12 bg-secondary rounded-sm active:bg-primary/20 transition-colors"
          aria-label="Back to calculators"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </a>
        <h1 className="font-tactical-bold text-xl sm:text-2xl text-primary uppercase tracking-wider">
          {name}
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-card border border-border rounded-sm p-6">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
          <Construction className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="text-center">
          <p className="font-tactical text-lg text-foreground uppercase tracking-wider mb-2">
            Not Implemented
          </p>
          <p className="text-sm text-muted-foreground max-w-xs">
            The {name} calculator hasn't been implemented yet.
          </p>
        </div>
      </div>

      <Navbar active="calculators" />
    </>
  );
}
