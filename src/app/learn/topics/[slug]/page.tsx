import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArticleCTA } from "@/components/conversion/article-cta";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  return {
    title: `专题教程 - ${params.slug}`,
    description: `OpenClaw 专题教程：${params.slug}`,
  };
}

export default function TopicDetailPage({ params }: PageProps) {
  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <div className="mb-8">
        <Link href="/learn/topics" className="text-sm text-muted-foreground hover:text-foreground">
          ← 返回专题列表
        </Link>
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <Badge variant="secondary" className="mb-4">专题教程</Badge>
        <h1>专题教程 — {params.slug}</h1>
        <p className="lead text-muted-foreground">
          这篇教程将带你深入了解相关主题，包含完整的配置步骤和最佳实践。
        </p>

        <h2>前提条件</h2>
        <ul>
          <li>已安装 OpenClaw（参考 Day 1 教程）</li>
          <li>基本的命令行操作经验</li>
        </ul>

        <h2>详细步骤</h2>
        <p>更多内容即将推出，敬请期待...</p>

        <h2>延伸阅读</h2>
        <p>以下是一些相关的优质外部资源：</p>
        <ul>
          <li>官方文档 — 获取最新的配置参考</li>
          <li>社区讨论 — 查看其他用户的实践经验</li>
        </ul>
      </article>

      <ArticleCTA />

      <div className="mt-8 flex justify-between">
        <Button asChild variant="outline">
          <Link href="/learn/topics">← 返回专题列表</Link>
        </Button>
        <Button asChild>
          <Link href="/courses">查看精品课程 →</Link>
        </Button>
      </div>
    </div>
  );
}
