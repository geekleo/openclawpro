import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "社区",
  description: "加入 OpenClaw 中文社区 — 独家教程、答疑互助、内推机会和线下活动",
};

const benefits = [
  { icon: "📚", title: "独家教程更新", description: "第一时间获取新教程、配置模板和社群专享 Prompt 库" },
  { icon: "❓", title: "答疑互助", description: "遇到问题随时提问，核心团队和资深成员在线解答" },
  { icon: "💼", title: "内推机会", description: "AI Agent 相关岗位内推，直达一线大厂招聘团队" },
  { icon: "🎉", title: "线下活动", description: "每月线上 Meetup，季度线下技术分享会（北上广深）" },
  { icon: "🏆", title: "荣誉体系", description: "贡献者勋章、月度之星、年度贡献奖，优秀者可获课程奖学金" },
  { icon: "🔧", title: "抢先体验", description: "新功能 Beta 测试资格，参与产品方向讨论和投票" },
];

const discussions = [
  { q: "OpenClaw 部署到阿里云 ECS 遇到端口不通的问题", a: "需要在阿里云控制台的安全组中开放 3000 端口（TCP 入方向），同时检查服务器上的 ufw 防火墙规则。详见部署篇的「阿里云 ECS 一键部署」教程。", tags: ["部署", "阿里云"], replies: 23, views: 1560 },
  { q: "Notion Skill 提示 API Key 无效，已确认 Key 是对的", a: "最常见的原因是没有在 Notion 中将目标数据库/页面「共享」给你的 Integration。进入页面右上角「...」→「添加连接」→ 选择你的 Integration。", tags: ["Skill", "Notion"], replies: 18, views: 980 },
  { q: "Multi-Agent 架构下子 Agent 响应超时怎么处理？", a: "推荐三种方案：1）增加超时阈值到 60s；2）给子 Agent 设置 fallback 逻辑；3）使用 Orchestrator 模式的 retry 机制。企业场景推荐方案 3。", tags: ["架构", "Multi-Agent"], replies: 31, views: 2100 },
  { q: "RSS Skill 订阅的内容如何做去重和质量过滤？", a: "在 Cron 配置中添加 dedup 参数（基于 URL hash），质量过滤可以在 AI 摘要步骤中加入评分逻辑，低于阈值的自动跳过。", tags: ["RSS", "自动化"], replies: 12, views: 670 },
  { q: "企业部署时如何实现多用户隔离？", a: "推荐使用 Namespace 隔离 + RBAC 权限控制。每个用户/部门独立 Workspace，共享基础 Skill 但数据互相隔离。企业版内置了完整的权限管理功能。", tags: ["企业", "安全"], replies: 27, views: 1830 },
  { q: "用 OpenClaw 管理微信公众号，文章排版总是不对", a: "微信编辑器的 HTML 兼容性有限，推荐用 Markdown → 微信排版工具 转换。我开源了一个 Skill 专门处理这个问题，搜 wechat-formatter。", tags: ["微信", "公众号"], replies: 15, views: 890 },
];

const contributors = [
  { name: "张明", role: "核心贡献者", skills: 5, tutorials: 8, badge: "🥇" },
  { name: "陈晓", role: "Skill 开发者", skills: 3, tutorials: 2, badge: "🛠️" },
  { name: "赵雨", role: "内容贡献者", skills: 0, tutorials: 12, badge: "✍️" },
  { name: "刘志远", role: "运维专家", skills: 2, tutorials: 5, badge: "🔧" },
  { name: "王芳", role: "社群管理", skills: 1, tutorials: 6, badge: "💬" },
  { name: "李浩", role: "测试工程师", skills: 1, tutorials: 3, badge: "🐛" },
  { name: "杨慧", role: "文档维护", skills: 0, tutorials: 9, badge: "📝" },
  { name: "周磊", role: "企业顾问", skills: 4, tutorials: 4, badge: "🏢" },
];

const milestones = [
  { date: "2025.09", event: "社区创建，首批 100 位成员加入" },
  { date: "2025.11", event: "首期 7 天入门路径上线，完成率 78%" },
  { date: "2025.12", event: "社区突破 1000 人，首个线下 Meetup 举办" },
  { date: "2026.01", event: "ClawHub 社区 Skill 数量突破 100 个" },
  { date: "2026.02", event: "社区突破 5000 人，企业版正式发布" },
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
            <p className="text-xs text-muted-foreground">3000+ 成员 · 扫码加入</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-32 w-32 mx-auto rounded-lg border bg-muted flex items-center justify-center text-sm text-muted-foreground">
              公众号二维码
            </div>
            <p className="mt-3 font-medium">公众号</p>
            <p className="text-xs text-muted-foreground">每周更新 · 关注获取资源</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-32 w-32 mx-auto rounded-lg border bg-primary/10 flex items-center justify-center text-2xl">
              💬
            </div>
            <p className="mt-3 font-medium">Discord</p>
            <p className="text-xs text-muted-foreground mb-1">1200+ 成员 · 英文交流</p>
            <a href={siteConfig.links.discord} className="text-xs text-primary hover:underline">加入服务器</a>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="h-32 w-32 mx-auto rounded-lg border bg-primary/10 flex items-center justify-center text-2xl">
              ✈️
            </div>
            <p className="mt-3 font-medium">Telegram</p>
            <p className="text-xs text-muted-foreground mb-1">800+ 成员 · 即时交流</p>
            <a href={siteConfig.links.telegram} className="text-xs text-primary hover:underline">加入群组</a>
          </CardContent>
        </Card>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">你能获得什么</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Milestones */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">社区里程碑</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {milestones.map((m) => (
              <div key={m.date} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 text-sm font-mono text-primary font-medium">{m.date}</div>
                <div className="flex-1 pb-4 border-b border-border last:border-0">
                  <p className="text-sm">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discussions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">精华讨论</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {discussions.map((d) => (
            <Card key={d.q}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  {d.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">{tag}</span>
                  ))}
                  <span className="text-xs text-muted-foreground ml-auto">{d.replies} 回复 · {d.views} 浏览</span>
                </div>
                <p className="font-medium text-sm mb-2">Q: {d.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">A: {d.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contributors */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">活跃贡献者</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {contributors.map((c) => (
            <Card key={c.name} className="text-center">
              <CardContent className="pt-6">
                <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-xl mb-2">
                  {c.badge}
                </div>
                <p className="font-medium text-sm">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.role}</p>
                <div className="flex justify-center gap-3 mt-2 text-xs text-muted-foreground">
                  {c.skills > 0 && <span>{c.skills} Skill</span>}
                  {c.tutorials > 0 && <span>{c.tutorials} 教程</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-6 text-sm text-muted-foreground">
          还有 100+ 活跃贡献者...
        </p>
      </div>
    </div>
  );
}
