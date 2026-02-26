import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "实战案例",
  description: "OpenClaw 实战案例 — 看看其他用户如何用 AI Agent 提升效率、降低成本",
};

const caseCategories = [
  {
    slug: "productivity",
    title: "个人效率",
    icon: "⚡",
    description: "提升个人工作效率的自动化案例",
    cases: [
      "自动化日报生成：每天节省1小时",
      "智能邮件管家：再也不漏重要邮件",
      "个人知识库自动整理",
    ],
  },
  {
    slug: "developer",
    title: "开发者工具",
    icon: "🛠️",
    description: "面向开发者的效率提升方案",
    cases: [
      "用 OpenClaw 做 Code Review",
      "自动化 CI/CD 监控与告警",
      "技术文档一键生成",
    ],
  },
  {
    slug: "enterprise",
    title: "企业自动化",
    icon: "🏢",
    description: "企业级 AI Agent 落地案例",
    cases: [
      "某电商公司：客服自动化节省80%人力",
      "某金融团队：合规文档自动审核",
      "某 SaaS 公司：自动化运维降本50%",
    ],
  },
  {
    slug: "creative",
    title: "创意玩法",
    icon: "🎮",
    description: "有趣的创意和娱乐应用",
    cases: [
      "AI 自动写公众号并发布",
      "用 OpenClaw 做自媒体矩阵管理",
      "智能家居全屋联动",
    ],
  },
];

export default function CasesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">实战案例</Badge>
        <h1 className="text-3xl font-bold md:text-4xl">学完能做什么？</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          真实的场景、真实的数据，看看别人怎么用 OpenClaw 解决实际问题
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {caseCategories.map((cat) => (
          <Card key={cat.slug} className="flex flex-col">
            <CardHeader>
              <div className="text-3xl mb-2">{cat.icon}</div>
              <CardTitle>{cat.title}</CardTitle>
              <CardDescription>{cat.description}</CardDescription>
            </CardHeader>
            <div className="px-6 pb-6 space-y-2">
              {cat.cases.map((c) => (
                <Link
                  key={c}
                  href={`/cases/${cat.slug}`}
                  className="block rounded-md border p-3 text-sm hover:bg-accent transition-colors"
                >
                  {c}
                </Link>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
