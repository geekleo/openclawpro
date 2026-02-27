import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "模板下载",
  description: "OpenClaw 配置模板和最佳实践模板，帮助你快速上手",
};

const templateCategories = [
  {
    title: "部署配置模板",
    templates: [
      { name: "Docker Compose 生产配置模板", description: "完整的 docker-compose.yml，包含 Nginx 反代、SSL 证书、数据持久化、日志收集和自动重启配置。适合 2核4G 以上服务器。", free: true, tags: ["Docker", "部署"] },
      { name: "安全加固配置模板", description: "三层安全架构配置：防火墙规则 + Nginx 限流 + 应用层认证。包含 fail2ban、rate-limit、CORS 等完整配置。", free: true, tags: ["安全", "运维"] },
      { name: "Kubernetes 部署模板", description: "企业级 K8s 部署配置，包含 Deployment、Service、Ingress、ConfigMap 和 HPA 自动伸缩。", free: false, tags: ["K8s", "企业"] },
      { name: "监控告警配置模板", description: "Prometheus + Grafana 完整配置，包含 OpenClaw 自定义指标、告警规则和 Dashboard JSON。", free: true, tags: ["监控", "Prometheus"] },
    ],
  },
  {
    title: "Prompt 模板库",
    templates: [
      { name: "日常办公 Prompt 合集（20个）", description: "邮件摘要、会议纪要、日报周报、待办整理、文件归类等高频办公场景 Prompt。", free: true, tags: ["办公", "Prompt"] },
      { name: "开发者 Prompt 合集（15个）", description: "Code Review、Bug 分析、API 文档、测试用例生成、架构设计等开发者专用 Prompt。", free: false, tags: ["开发", "Prompt"] },
      { name: "内容创作 Prompt 合集（15个）", description: "公众号文章、短视频脚本、产品描述、SEO 优化、社交媒体等内容创作 Prompt。", free: false, tags: ["创作", "Prompt"] },
      { name: "数据分析 Prompt 合集（10个）", description: "数据清洗、趋势分析、报告生成、可视化建议、异常检测等数据分析 Prompt。", free: false, tags: ["数据", "Prompt"] },
    ],
  },
  {
    title: "自动化工作流模板",
    templates: [
      { name: "每日新闻简报工作流", description: "RSS 订阅 → AI 摘要 → 分类整理 → Telegram/邮件推送。包含 Cron 配置和 Prompt 模板。", free: true, tags: ["自动化", "RSS"] },
      { name: "GitHub 项目监控工作流", description: "监控 Star 数变化、Issue/PR 状态、Release 发布，自动推送通知。", free: true, tags: ["GitHub", "监控"] },
      { name: "竞品价格监控工作流", description: "定时抓取竞品页面 → 价格变化检测 → 告警推送 → 生成周报。", free: false, tags: ["监控", "爬虫"] },
      { name: "自动化周报生成工作流", description: "汇总本周工作数据 → 模板填充 → 格式化输出 → 发送邮件/推送到群。", free: false, tags: ["周报", "自动化"] },
      { name: "社交媒体热点追踪工作流", description: "多平台热搜监控 → AI 分析趋势 → 生成快讯 → 多渠道推送。", free: false, tags: ["热点", "监控"] },
    ],
  },
  {
    title: "Skill 开发模板",
    templates: [
      { name: "Skill 项目脚手架", description: "完整的 Skill 开发模板，包含 TypeScript 配置、manifest.json、测试框架和 CI/CD 配置。", free: true, tags: ["开发", "TypeScript"] },
      { name: "MCP Server 开发模板", description: "MCP Server 开发框架，包含资源注册、工具定义、请求处理和错误处理最佳实践。", free: true, tags: ["MCP", "开发"] },
    ],
  },
];

export default function TemplatesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold md:text-4xl">模板下载</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          经过实战验证的配置模板和最佳实践，帮你少走弯路
        </p>
      </div>

      <div className="space-y-12">
        {templateCategories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-xl font-bold mb-4">{cat.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {cat.templates.map((t) => (
                <Card key={t.name}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={t.free ? "secondary" : "default"}>
                        {t.free ? "免费" : "社群专享"}
                      </Badge>
                      {t.tags.map((tag) => (
                        <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-base">{t.name}</CardTitle>
                    <CardDescription className="leading-relaxed">{t.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant={t.free ? "default" : "outline"} size="sm" asChild={!t.free}>
                      {t.free ? (
                        <span>下载模板</span>
                      ) : (
                        <Link href="/community">加入社群获取 →</Link>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
