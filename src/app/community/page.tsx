import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "社区",
  description: "加入 OpenClaw 中文社区 — 独家教程、答疑互助、内推机会和线下活动",
};

const benefits = [
  { icon: "📚", title: "独家教程更新", description: "第一时间获取新教程和配置模板" },
  { icon: "❓", title: "答疑互助", description: "遇到问题随时提问，社群成员互相帮助" },
  { icon: "💼", title: "内推机会", description: "AI Agent 相关岗位内推，直达招聘团队" },
  { icon: "🎉", title: "线下活动", description: "定期 Meetup 和技术分享会" },
];

const discussions = [
  { q: "OpenClaw 部署到阿里云遇到端口问题怎么办？", a: "需要在安全组中开放对应端口，具体步骤见部署教程..." },
  { q: "Notion Skill 无法同步数据库，提示 API Key 错误", a: "检查是否使用了 Internal Integration，需要将数据库共享给集成..." },
  { q: "如何实现多个 Agent 协作完成复杂任务？", a: "推荐使用 Orchestrator 模式，由一个主 Agent 分配任务给子 Agent..." },
];

export default function CommunityPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <Badge className="mb-4">社区</Badge>
        <h1 className="text-3xl font-bold md:text-4xl">加入 OpenClaw 中文社区</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          5000+ 成员的活跃社群，与志同道合的人一起学习和成长
        </p>
      </div>

      {/* Social links */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-32 w-32 mx-auto rounded-lg border bg-muted flex items-center justify-center text-sm text-muted-foreground">
              微信群二维码
            </div>
            <p className="mt-3 font-medium">微信群</p>
            <p className="text-xs text-muted-foreground">扫码加入</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-32 w-32 mx-auto rounded-lg border bg-muted flex items-center justify-center text-sm text-muted-foreground">
              公众号二维码
            </div>
            <p className="mt-3 font-medium">公众号</p>
            <p className="text-xs text-muted-foreground">关注获取资源</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-32 w-32 mx-auto rounded-lg border bg-primary/10 flex items-center justify-center text-2xl">
              💬
            </div>
            <p className="mt-3 font-medium">Discord</p>
            <a href={siteConfig.links.discord} className="text-xs text-primary hover:underline">加入服务器</a>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-32 w-32 mx-auto rounded-lg border bg-primary/10 flex items-center justify-center text-2xl">
              ✈️
            </div>
            <p className="mt-3 font-medium">Telegram</p>
            <a href={siteConfig.links.telegram} className="text-xs text-primary hover:underline">加入群组</a>
          </CardContent>
        </Card>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">你能获得什么</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <Card key={b.title}>
              <CardHeader>
                <div className="text-3xl mb-2">{b.icon}</div>
                <CardTitle className="text-lg">{b.title}</CardTitle>
                <CardDescription>{b.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Discussions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">精华讨论</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {discussions.map((d) => (
            <Card key={d.q}>
              <CardContent className="pt-6">
                <p className="font-medium text-sm">Q: {d.q}</p>
                <p className="mt-2 text-sm text-muted-foreground">A: {d.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contributors */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-8">活跃贡献者</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">还有更多活跃成员...</p>
      </div>
    </div>
  );
}
