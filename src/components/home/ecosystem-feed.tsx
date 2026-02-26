import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const feedItems = [
  { type: "weekly", title: "OpenClaw 周刊 #1 — 本周值得关注的 5 个动态", date: "2026-03-01", href: "/blog/weekly-001" },
  { type: "skill", title: "新 Skill 推荐：Notion 深度集成，支持数据库批量操作", date: "2026-02-28", href: "/learn/skills" },
  { type: "tutorial", title: "2026 最完整的 OpenClaw 部署教程", date: "2026-02-25", href: "/blog/deploy-guide-2026" },
  { type: "news", title: "OpenClaw v2026.2 更新：新增浏览器控制能力", date: "2026-02-20", href: "/blog/v2026-2-release" },
  { type: "skill", title: "GitHub Skill 重大更新：支持 PR 自动 Review", date: "2026-02-18", href: "/learn/skills" },
];

const typeLabels: Record<string, { label: string; variant: "default" | "secondary" | "outline" }> = {
  weekly: { label: "周刊", variant: "default" },
  skill: { label: "新技能", variant: "secondary" },
  tutorial: { label: "教程", variant: "outline" },
  news: { label: "动态", variant: "secondary" },
};

export function EcosystemFeed() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          OpenClaw 生态最新动态
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          每周更新，掌握最新技能和社区动态
        </p>
        <div className="mt-12 max-w-2xl mx-auto space-y-3">
          {feedItems.map((item) => {
            const typeInfo = typeLabels[item.type];
            return (
              <Link key={item.title} href={item.href}>
                <Card className="transition-colors hover:bg-muted/50">
                  <CardContent className="flex items-center gap-4 py-4">
                    <Badge variant={typeInfo.variant} className="shrink-0">
                      {typeInfo.label}
                    </Badge>
                    <span className="text-sm font-medium flex-1 truncate">{item.title}</span>
                    <span className="text-xs text-muted-foreground shrink-0 hidden sm:block">
                      {item.date}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-primary hover:underline font-medium">
            查看全部动态 →
          </Link>
        </div>
      </div>
    </section>
  );
}
