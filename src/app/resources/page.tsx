import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "资源中心",
  description: "OpenClaw 资源中心 — 工具推荐、配置模板、常见问题汇总",
};

export default function ResourcesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">资源中心</Badge>
        <h1 className="text-3xl font-bold md:text-4xl">资源中心</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          工具推荐、配置模板、常见问题 — 你需要的资源都在这里
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/resources/tools">
          <Card className="h-full transition-colors hover:border-primary/50">
            <CardHeader>
              <div className="text-3xl mb-2">🔧</div>
              <CardTitle>工具推荐</CardTitle>
              <CardDescription>精选云服务器、API 平台、辅助工具，每个都有中文点评</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/resources/templates">
          <Card className="h-full transition-colors hover:border-primary/50">
            <CardHeader>
              <div className="text-3xl mb-2">📦</div>
              <CardTitle>模板下载</CardTitle>
              <CardDescription>配置模板、Prompt 模板、工作流模板，开箱即用</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/resources/faq">
          <Card className="h-full transition-colors hover:border-primary/50">
            <CardHeader>
              <div className="text-3xl mb-2">❓</div>
              <CardTitle>常见问题</CardTitle>
              <CardDescription>汇总常见问题和解决方案，快速解决你的困惑</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
