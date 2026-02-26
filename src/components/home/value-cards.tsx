import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: "📚",
    title: "免费7天入门",
    description: "从零开始，每天30分钟，7天掌握 OpenClaw 核心功能。完全免费，无需注册。",
    href: "/learn",
    cta: "开始学习",
  },
  {
    icon: "🎬",
    title: "精品视频深度课",
    description: "系统化视频课程，从入门到高级，配套实战项目和答疑。少走弯路，快速进阶。",
    href: "/courses",
    cta: "查看课程",
  },
  {
    icon: "🏢",
    title: "企业定制培训",
    description: "为企业量身定制 AI Agent 培训方案，帮助团队快速掌握 OpenClaw，实现降本增效。",
    href: "/enterprise",
    cta: "了解详情",
  },
];

export function ValueCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          三条路径，满足不同需求
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          无论你是个人用户还是企业团队，都能找到适合自己的学习方式
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="flex flex-col">
              <CardHeader>
                <div className="text-4xl mb-2">{value.icon}</div>
                <CardTitle>{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href={value.href}>{value.cta} →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
