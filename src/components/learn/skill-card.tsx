import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SkillCardProps {
  name: string;
  title: string;
  description: string;
  review: string;
  rating: number;
  difficulty: string;
  installCommand: string;
  tags: readonly string[];
}

export function SkillCard({ name, title, description, review, rating, difficulty, installCommand, tags }: SkillCardProps) {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  const difficultyColor = difficulty === "入门" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-amber-500 text-sm">{stars} {rating}/5</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
        <CardTitle className="text-lg">📦 {name} — {title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="rounded-md bg-muted/50 p-3 text-sm">
          <p className="font-medium text-xs text-muted-foreground mb-1">编辑点评：</p>
          <p className="text-sm italic">&ldquo;{review}&rdquo;</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <div className="mt-3">
          <code className="text-xs bg-muted px-2 py-1 rounded">{installCommand}</code>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">查看详情</Button>
        <Button asChild size="sm" className="flex-1">
          <Link href="/courses">相关课程 →</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
