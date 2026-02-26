import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from "next";

interface PageProps {
  params: { category: string };
}

const categoryInfo: Record<string, { title: string; icon: string; description: string }> = {
  productivity: { title: "个人效率", icon: "⚡", description: "提升个人工作效率的自动化案例" },
  developer: { title: "开发者工具", icon: "🛠️", description: "面向开发者的效率提升方案" },
  enterprise: { title: "企业自动化", icon: "🏢", description: "企业级 AI Agent 落地案例" },
  creative: { title: "创意玩法", icon: "🎮", description: "有趣的创意和娱乐应用" },
};

export function generateStaticParams() {
  return Object.keys(categoryInfo).map((category) => ({ category }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const info = categoryInfo[params.category];
  return { title: info?.title || "实战案例", description: info?.description };
}

export default function CaseCategoryPage({ params }: PageProps) {
  const info = categoryInfo[params.category] || { title: params.category, icon: "📋", description: "" };

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <Link href="/cases" className="text-sm text-muted-foreground hover:text-foreground">
          ← 返回案例总览
        </Link>
      </div>

      <div className="text-center mb-12">
        <span className="text-4xl">{info.icon}</span>
        <h1 className="text-3xl font-bold mt-4">{info.title}</h1>
        <p className="mt-2 text-muted-foreground">{info.description}</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-2">案例</Badge>
            <CardTitle>示例案例</CardTitle>
            <CardDescription>
              这是一个示例案例，完整内容即将发布。每个案例包含：场景痛点、解决方案、关键配置、效果数据。
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">更多案例即将发布</p>
          <Button asChild variant="outline">
            <Link href="/courses">想获取完整配置？查看课程 →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
