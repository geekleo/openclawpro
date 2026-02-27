import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MDXContent } from "@/components/mdx-content";
import { ArticleCTA } from "@/components/conversion/article-cta";
import { getTopicBySlug, getTopicSlugs } from "@/lib/content";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const slugs = getTopicSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const topic = getTopicBySlug(params.slug);
  if (!topic) return { title: "专题教程" };
  return {
    title: topic.title,
    description: topic.description,
  };
}

export default function TopicDetailPage({ params }: PageProps) {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <div className="mb-8">
        <Link href="/learn/topics" className="text-sm text-muted-foreground hover:text-foreground">
          ← 返回专题列表
        </Link>
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-3">{topic.category}</Badge>
          <h1 className="!mt-0">{topic.title}</h1>
          <p className="text-muted-foreground !mt-2">
            {new Date(topic.date).toLocaleDateString("zh-CN")} · {topic.tags?.join(", ")}
          </p>
        </div>

        <MDXContent code={topic.body} />
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
