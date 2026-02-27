import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { MDXContent } from "@/components/mdx-content";
import { ArticleCTA } from "@/components/conversion/article-cta";
import { getBlogBySlug, getAllBlogs } from "@/lib/content";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string[] };
}

export function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b: { slugAsParams: string }) => ({
    slug: b.slugAsParams.split("/"),
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slugPath = params.slug.join("/");
  const post = getBlogBySlug(slugPath);
  if (!post) return { title: "博客文章" };
  return {
    title: post.title,
    description: post.description,
  };
}

const categoryLabels: Record<string, string> = {
  weekly: "周刊",
  tutorial: "教程",
  news: "热点",
};

export default function BlogPostPage({ params }: PageProps) {
  const slugPath = params.slug.join("/");
  const post = getBlogBySlug(slugPath);

  if (!post) {
    notFound();
  }

  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <div className="mb-8">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← 返回博客
        </Link>
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-3">
            {categoryLabels[post.category] || post.category}
          </Badge>
          <h1 className="!mt-0">{post.title}</h1>
          <p className="text-muted-foreground !mt-2">
            {new Date(post.date).toLocaleDateString("zh-CN")} · {post.tags?.join(", ")}
          </p>
        </div>

        <MDXContent code={post.body} />
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
