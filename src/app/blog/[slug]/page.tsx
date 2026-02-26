import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArticleCTA } from "@/components/conversion/article-cta";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  return {
    title: `博客 - ${params.slug}`,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <div className="mb-8">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← 返回博客
        </Link>
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <Badge variant="secondary" className="mb-4">博客文章</Badge>
        <h1>文章: {params.slug}</h1>
        <p className="text-muted-foreground">
          文章内容即将发布，敬请期待...
        </p>
        <p>
          这里将展示由 MDX 渲染的完整文章内容，包括代码高亮、图片、
          自定义组件等丰富的内容形式。
        </p>
      </article>

      <ArticleCTA />

      <div className="mt-8">
        <h3 className="font-semibold mb-4">相关文章</h3>
        <div className="space-y-2">
          <Link href="/blog" className="block text-sm text-primary hover:underline">
            查看更多文章 →
          </Link>
        </div>
      </div>
    </div>
  );
}
