import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "工具推荐" };

const tools = [
  { name: "阿里云 ECS", category: "云服务器", description: "国内访问速度最快，适合中国用户部署 OpenClaw", rating: "推荐" },
  { name: "腾讯云轻量应用服务器", category: "云服务器", description: "性价比高，适合个人用户", rating: "推荐" },
  { name: "Cloudflare", category: "CDN/DNS", description: "免费 CDN 加速，搭配自有域名使用", rating: "必备" },
  { name: "Docker", category: "容器化", description: "推荐的部署方式，一键安装，易于管理", rating: "必备" },
  { name: "Tailscale", category: "内网穿透", description: "安全的远程访问方案，免费额度充足", rating: "推荐" },
  { name: "1Password", category: "密钥管理", description: "安全管理 API Key 和各种密码", rating: "推荐" },
];

export default function ToolsPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-8">工具推荐</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{tool.category}</Badge>
                <Badge>{tool.rating}</Badge>
              </div>
              <CardTitle className="text-lg mt-2">{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
