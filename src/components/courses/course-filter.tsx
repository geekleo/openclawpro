"use client";

import { Badge } from "@/components/ui/badge";

const difficulties = ["全部", "入门", "进阶", "高级"];

export function CourseFilter() {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {difficulties.map((d) => (
        <Badge
          key={d}
          variant={d === "全部" ? "default" : "outline"}
          className="cursor-pointer hover:bg-accent px-3 py-1.5"
        >
          {d}
        </Badge>
      ))}
    </div>
  );
}
