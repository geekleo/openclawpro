import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "工具推荐",
  description: "部署和使用 OpenClaw 推荐的工具和服务清单",
};

const toolCategories = [
  {
    title: "云服务器",
    icon: "☁️",
    tools: [
      { name: "阿里云 ECS", description: "国内访问速度最快，2核4G 约 100 元/月。新用户有免费试用额度。推荐选择 Ubuntu 22.04 系统。", rating: "推荐" },
      { name: "腾讯云轻量应用服务器", description: "性价比最高的选择，2核2G 低至 45 元/月。轻量级应用足够运行 OpenClaw。", rating: "推荐" },
      { name: "AWS Lightsail", description: "海外部署首选，$5/月起步。全球多区域可选，网络质量好。适合有国际需求的用户。", rating: "可选" },
      { name: "Hetzner Cloud", description: "欧洲高性价比云服务器，性能强劲。适合对成本敏感且不介意海外延迟的用户。", rating: "可选" },
    ],
  },
  {
    title: "容器与部署",
    icon: "🐳",
    tools: [
      { name: "Docker + Docker Compose", description: "OpenClaw 推荐的部署方式。一条命令启动，版本更新方便，支持数据持久化和自动重启。", rating: "必备" },
      { name: "Portainer", description: "Docker 图形化管理工具，适合不熟悉命令行的用户。免费社区版功能够用。", rating: "推荐" },
      { name: "Watchtower", description: "Docker 镜像自动更新工具，无需手动 pull 新镜像。配合 Telegram 通知使用更佳。", rating: "推荐" },
    ],
  },
  {
    title: "网络与安全",
    icon: "🔒",
    tools: [
      { name: "Cloudflare", description: "免费 CDN + DNS + DDoS 防护。搭配自有域名使用，SSL 证书自动管理。国内外通用。", rating: "必备" },
      { name: "Tailscale", description: "零配置内网穿透 VPN，端到端加密。免费套餐支持 100 台设备，个人使用完全足够。", rating: "推荐" },
      { name: "Nginx Proxy Manager", description: "Nginx 图形化管理工具，一键配置反向代理和 HTTPS。搭配 Docker 部署非常方便。", rating: "推荐" },
      { name: "Let's Encrypt", description: "免费 SSL 证书，配合 Certbot 或 Nginx Proxy Manager 自动续签。HTTPS 部署必备。", rating: "必备" },
    ],
  },
  {
    title: "AI 模型 API",
    icon: "🧠",
    tools: [
      { name: "OpenAI API", description: "GPT-4o 综合能力强，适合日常对话和文本处理。API 价格透明，按用量计费。", rating: "推荐" },
      { name: "Anthropic Claude API", description: "Claude 4.5/4.6 在代码和推理任务上表现优异。安全性好，适合企业场景。", rating: "推荐" },
      { name: "Google Gemini API", description: "Gemini 2.0 多模态能力强，支持图片、音频、视频理解。免费额度慷慨。", rating: "可选" },
      { name: "Ollama（本地模型）", description: "在本地运行 Llama 3、Qwen 2.5 等开源模型。隐私性最佳，但需要 GPU 硬件支持。", rating: "可选" },
    ],
  },
  {
    title: "开发工具",
    icon: "🛠️",
    tools: [
      { name: "VS Code", description: "最流行的代码编辑器，配合 OpenClaw 开发 Skill 时体验最佳。推荐安装 TypeScript 插件。", rating: "推荐" },
      { name: "Claude Code", description: "Anthropic 出品的 AI 编程助手 CLI，开发 Skill 和调试时的最佳搭档。", rating: "推荐" },
      { name: "Node.js 20 LTS", description: "Skill 开发必需的运行时环境。推荐使用 nvm 管理 Node.js 版本。", rating: "必备" },
      { name: "pnpm", description: "高性能的 Node.js 包管理器，比 npm 快 2-3 倍，节省磁盘空间。", rating: "推荐" },
    ],
  },
  {
    title: "效率辅助",
    icon: "⚡",
    tools: [
      { name: "1Password / Bitwarden", description: "安全管理 API Key 和各种密码。Bitwarden 免费开源，1Password 体验更好。", rating: "推荐" },
      { name: "Notion", description: "与 OpenClaw Notion Skill 配合使用，构建自动化知识库。免费版功能足够。", rating: "推荐" },
      { name: "Telegram", description: "最推荐的 OpenClaw 交互客户端。Bot API 功能完善，消息推送实时。", rating: "推荐" },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold md:text-4xl">工具推荐</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          部署和使用 OpenClaw 所需的工具清单，每个都经过编辑实测推荐
        </p>
      </div>

      <div className="space-y-12">
        {toolCategories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <span>{cat.icon}</span> {cat.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {cat.tools.map((tool) => (
                <Card key={tool.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{tool.name}</CardTitle>
                      <Badge variant={tool.rating === "必备" ? "default" : "outline"}>{tool.rating}</Badge>
                    </div>
                    <CardDescription className="leading-relaxed">{tool.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
