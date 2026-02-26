import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "专题教程",
  description: "按场景分类的 OpenClaw 中深度实战教程，覆盖部署、消息平台、效率工具、开发者工具等方向",
};

const topicCategories = [
  {
    category: "部署篇",
    icon: "🚀",
    topics: [
      { title: "阿里云 ECS 一键部署 OpenClaw", slug: "aliyun-deploy" },
      { title: "Docker Compose 生产环境配置", slug: "docker-deploy" },
      { title: "群晖 NAS 上运行 OpenClaw", slug: "nas-deploy" },
      { title: "Tailscale 内网穿透远程访问", slug: "tailscale-access" },
    ],
  },
  {
    category: "消息平台篇",
    icon: "💬",
    topics: [
      { title: "Telegram Bot 完整配置", slug: "telegram-bot" },
      { title: "微信接入方案", slug: "wechat-integration" },
      { title: "Discord 服务器集成", slug: "discord-integration" },
      { title: "飞书/钉钉集成方案", slug: "feishu-dingtalk" },
    ],
  },
  {
    category: "效率工具篇",
    icon: "⚡",
    topics: [
      { title: "用 OpenClaw 管理 Notion 笔记", slug: "notion-management" },
      { title: "Gmail 自动摘要与跟进", slug: "gmail-automation" },
      { title: "日程管理与智能提醒", slug: "calendar-management" },
      { title: "RSS 新闻聚合与每日简报", slug: "rss-aggregation" },
    ],
  },
  {
    category: "开发者篇",
    icon: "🛠️",
    topics: [
      { title: "自定义 Skill 开发入门", slug: "skill-development" },
      { title: "MCP Server 集成指南", slug: "mcp-integration" },
      { title: "多 Agent 协作架构设计", slug: "multi-agent" },
    ],
  },
  {
    category: "安全与运维篇",
    icon: "🔒",
    topics: [
      { title: "三层安全加固实践", slug: "security-hardening" },
      { title: "数据备份与迁移", slug: "backup-migration" },
      { title: "日志监控与告警", slug: "monitoring" },
    ],
  },
];

export default function TopicsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">专题教程</Badge>
        <h1 className="text-3xl font-bold md:text-4xl">专题教程</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          按场景分类的中深度实战教程，每篇 1500~3000 字，解决你的具体问题
        </p>
      </div>

      <div className="space-y-12">
        {topicCategories.map((cat) => (
          <div key={cat.category}>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <span>{cat.icon}</span> {cat.category}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.topics.map((topic) => (
                <Link key={topic.slug} href={`/learn/topics/${topic.slug}`}>
                  <Card className="h-full transition-colors hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-base">{topic.title}</CardTitle>
                      <CardDescription>查看教程 →</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
