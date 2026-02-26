import { PostCard } from "@/components/blog/post-card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客",
  description: "OpenClaw 博客 — 周刊、原创教程、热点追踪，获取最新 AI Agent 资讯和实战技巧",
};

// Placeholder blog data - will be replaced with Velite content
const blogPosts = [
  {
    title: "OpenClaw 周刊 #1 — 本周值得关注的 5 个动态",
    description: "第一期 OpenClaw 中文周刊，聚合本周最值得关注的社区动态、新技能推荐和实用技巧",
    date: "2026-03-01",
    category: "weekly",
    slug: "weekly-001",
    tags: ["周刊", "生态动态"],
  },
  {
    title: "2026 最完整的 OpenClaw 部署教程",
    description: "从零开始，手把手教你在各种平台上部署 OpenClaw",
    date: "2026-02-25",
    category: "tutorial",
    slug: "getting-started",
    tags: ["部署", "入门", "教程"],
  },
  {
    title: "OpenClaw v2026.2 更新了什么？一文看懂",
    description: "OpenClaw 最新版本更新解读，新增浏览器控制、性能优化等重大改进",
    date: "2026-02-20",
    category: "news",
    slug: "v2026-release",
    tags: ["版本更新", "新功能"],
  },
];

const categories = ["全部", "周刊", "教程", "热点"];

export default function BlogPage() {
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
        {blogPosts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
