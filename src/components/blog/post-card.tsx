import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  tags?: string[];
}

const categoryLabels: Record<string, string> = {
  weekly: "周刊",
  tutorial: "教程",
  news: "动态",
};

export function PostCard({ title, description, date, category, slug, tags }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={category === "weekly" ? "default" : "secondary"}>
              {categoryLabels[category] || category}
            </Badge>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        {tags && tags.length > 0 && (
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
