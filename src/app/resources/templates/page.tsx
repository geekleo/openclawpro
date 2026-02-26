import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "模板下载" };

const templates = [
  { name: "Docker Compose 生产配置模板", description: "包含 Nginx 反代、SSL、日志等完整配置", free: true },
  { name: "Prompt 模板库（50+）", description: "覆盖日常办公、开发、写作等常用场景", free: false },
  { name: "自动化工作流模板", description: "Cron 任务、Heartbeat、消息转发等常用工作流", free: false },
  { name: "安全加固配置模板", description: "三层安全架构配置，开箱即用", free: true },
];

export default function TemplatesPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-8">模板下载</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {templates.map((t) => (
          <Card key={t.name}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={t.free ? "secondary" : "default"}>{t.free ? "免费" : "社群专享"}</Badge>
              </div>
              <CardTitle className="text-lg">{t.name}</CardTitle>
              <CardDescription>{t.description}</CardDescription>
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
  );
}
