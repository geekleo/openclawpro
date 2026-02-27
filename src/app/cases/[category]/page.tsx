import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getCasesByCategory } from "@/lib/content";
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
  const cases = getCasesByCategory(params.category);

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
        {cases.length > 0 ? (
          cases.map((c: { slug: string; title: string; description: string; metrics?: string; tags?: string[] }) => (
            <Card key={c.slug} className="transition-colors hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">案例</Badge>
                  {c.metrics && <Badge variant="outline">{c.metrics}</Badge>}
                </div>
                <CardTitle className="text-lg">{c.title}</CardTitle>
                <CardDescription>{c.description}</CardDescription>
                {c.tags && (
                  <div className="flex gap-1.5 mt-2">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardHeader>
            </Card>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">案例正在整理中</p>
          </div>
        )}

        <div className="text-center pt-4">
          <Button asChild variant="outline">
            <Link href="/courses">想获取完整配置？查看课程 →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
