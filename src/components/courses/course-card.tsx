import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  slug: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  difficulty: string;
  lessons: number;
}

export function CourseCard({ slug, title, description, price, originalPrice, difficulty, lessons }: CourseCardProps) {
  return (
    <Link href={`/courses/${slug}`}>
      <Card className="h-full flex flex-col transition-all hover:shadow-md hover:border-primary/50">
        <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5 rounded-t-lg flex items-center justify-center">
          <span className="text-4xl">🎓</span>
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{difficulty}</Badge>
            <Badge variant="secondary">{lessons} 节课</Badge>
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">¥{price}</span>
            <span className="text-sm text-muted-foreground line-through">¥{originalPrice}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">了解详情</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
