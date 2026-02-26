import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dayTopics } from "@/lib/constants";

export function DayPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">免费学习</Badge>
          <h2 className="text-3xl font-bold md:text-4xl">7天入门学习路径</h2>
          <p className="mt-4 text-muted-foreground">
            每天30分钟，从零掌握 OpenClaw 核心功能
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dayTopics.map((day) => (
            <Link key={day.day} href={`/learn/day/${day.day}`}>
              <Card className="h-full transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{day.icon}</span>
                    <Badge variant="outline">Day {day.day}</Badge>
                  </div>
                  <CardTitle className="text-lg">{day.title}</CardTitle>
                  <CardDescription>{day.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/learn" className="text-primary hover:underline font-medium">
            查看完整学习路径 →
          </Link>
        </div>
      </div>
    </section>
  );
}
