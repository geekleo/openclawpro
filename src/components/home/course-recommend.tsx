import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/constants";

export function CourseRecommend() {
  const featured = courses.filter((c) => c.featured);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <Badge className="mb-4">精品课程</Badge>
          <h2 className="text-3xl font-bold md:text-4xl">系统化学习，少走弯路</h2>
          <p className="mt-4 text-muted-foreground">
            从入门到企业级应用，为每个阶段的学习者准备了对应课程
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((course) => (
            <Card key={course.slug} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{course.difficulty}</Badge>
                  <Badge variant="secondary">{course.lessons} 节课</Badge>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">¥{course.price}</span>
                  <span className="text-sm text-muted-foreground line-through">¥{course.originalPrice}</span>
                  <Badge variant="destructive" className="ml-auto">限时优惠</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/courses/${course.slug}`}>了解详情</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/courses">查看全部课程 →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
