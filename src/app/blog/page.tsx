import { PostCard } from "@/components/blog/post-card";
import { Badge } from "@/components/ui/badge";
import { getAllBlogs } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客",
  description: "OpenClaw 博客 — 周刊、原创教程、热点追踪，获取最新 AI Agent 资讯和实战技巧",
};

const categories = ["全部", "周刊", "教程", "热点"];

export default function BlogPage() {
  const allBlogs = getAllBlogs();

  const blogPosts = allBlogs.length > 0
    ? allBlogs.map((b: { title: string; description: string; date: string; category: string; slugAsParams: string; tags?: string[] }) => ({
        title: b.title,
        description: b.description,
        date: b.date,
        category: b.category,
        slug: b.slugAsParams,
        tags: b.tags || [],
      }))
    : [];

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold md:text-4xl">博客</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          周刊聚合、原创深度教程、热点追踪 — 你的 AI Agent 中文信息源
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <Badge
            key={cat}
            variant={cat === "全部" ? "default" : "outline"}
            className="cursor-pointer hover:bg-accent px-3 py-1.5"
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Blog grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post: { slug: string; title: string; description: string; date: string; category: string; tags: string[] }) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
