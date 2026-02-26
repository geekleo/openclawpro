import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentDay: number;
  totalDays?: number;
}

export function ProgressBar({ currentDay, totalDays = 7 }: ProgressBarProps) {
  const progress = (currentDay / totalDays) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-muted-foreground">学习进度</span>
        <span className="font-medium">Day {currentDay} / {totalDays}</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-3">
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => (
          <Link
            key={day}
            href={`/learn/day/${day}`}
            className={cn(
              "h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors",
              day === currentDay
                ? "bg-primary text-primary-foreground"
                : day < currentDay
                ? "bg-primary/20 text-primary"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {day}
          </Link>
        ))}
      </div>
    </div>
  );
}
