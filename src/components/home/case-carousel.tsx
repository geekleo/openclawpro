import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const showcases = [
  {
    title: "自动化日报生成",
    description: "每天节省1小时，自动汇总数据、生成日报并发送",
    category: "productivity",
    tag: "个人效率",
  },
  {
    title: "用 OpenClaw 做 Code Review",
    description: "自动分析 PR，提供改进建议，提升代码质量",
    category: "developer",
    tag: "开发者工具",
  },
  {
    title: "客服自动化节省80%人力",
    description: "某电商公司用 OpenClaw 实现智能客服，大幅降本",
    category: "enterprise",
    tag: "企业自动化",
  },
  {
    title: "AI 自动写公众号并发布",
    description: "从选题到排版到发布，全流程自动化",
    category: "creative",
    tag: "创意玩法",
  },
];

export function CaseCarousel() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          学完能做什么？
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          看看其他学员用 OpenClaw 实现了哪些实战场景
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showcases.map((item) => (
            <Link key={item.title} href={`/cases/${item.category}`}>
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{item.tag}</Badge>
                  <CardTitle className="text-lg mt-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/cases" className="text-primary hover:underline font-medium">
            查看更多案例 →
          </Link>
        </div>
      </div>
    </section>
  );
}
