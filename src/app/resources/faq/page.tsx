import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "常见问题" };

const faqSections = [
  {
    title: "关于 OpenClaw",
    faqs: [
      {
        q: "OpenClaw 是什么？",
        a: "OpenClaw 是一个开源的 AI Agent 平台，可以帮助你自动化各种任务。它支持多种 AI 模型（OpenAI、Claude、Gemini、本地模型等），拥有丰富的 Skill 技能生态，可以接入 Telegram、微信、邮件等各种第三方服务。你可以把它理解为一个「万能 AI 管家」。",
      },
      {
        q: "OpenClaw 是免费的吗？",
        a: "OpenClaw 本身是完全开源免费的，你可以自由部署和使用。但你需要自行准备 AI 模型的 API Key（如 OpenAI、Anthropic 等），这部分会产生使用费用，通常每月 $5-20 足够个人日常使用。我们的培训课程为付费内容，提供系统化的学习路径和实战项目。",
      },
      {
        q: "OpenClaw 和 ChatGPT 有什么区别？",
        a: "ChatGPT 是一个对话 AI，主要用于问答。OpenClaw 是一个 AI Agent 平台，除了对话能力外，还能执行操作（发消息、管理文件、调用 API、控制智能设备等）。简单说，ChatGPT 是「嘴」，OpenClaw 是「手 + 嘴 + 脑」。",
      },
      {
        q: "支持哪些 AI 模型？",
        a: "OpenClaw 支持 OpenAI（GPT-4o、GPT-4）、Anthropic Claude（Claude 4.5/4.6）、Google Gemini、Mistral、Cohere 等主流模型，也支持本地部署的开源模型（如 Llama 3、Qwen 2.5、DeepSeek V3 等）。你可以根据任务需求灵活切换模型。",
      },
    ],
  },
  {
    title: "部署与安装",
    faqs: [
      {
        q: "需要什么硬件配置？",
        a: "最低要求：2 核 CPU、2GB 内存、20GB 磁盘。推荐配置：2 核 4GB 内存。如果要运行本地模型，建议 16GB 以上内存和独立显卡。支持 Linux、macOS、Windows（通过 Docker）。群晖 NAS（DS920+ 以上）也可以运行。",
      },
      {
        q: "Docker 部署还是直接安装？",
        a: "强烈推荐 Docker 部署。一条命令即可启动，更新方便，不会污染系统环境。我们提供了完整的 Docker Compose 配置模板，包含数据持久化、自动重启、日志管理等最佳实践。",
      },
      {
        q: "可以部署在哪些云服务上？",
        a: "几乎所有主流云服务都支持：阿里云 ECS、腾讯云 CVM、华为云 ECS、AWS EC2、Google Cloud、Azure 等。我们提供了阿里云 ECS 一键部署教程，其他云服务的步骤也基本类似。",
      },
      {
        q: "如何从外网访问部署在家里的 OpenClaw？",
        a: "推荐使用 Tailscale 内网穿透方案，零配置、端到端加密、免费额度够用。也可以使用 Cloudflare Tunnel、frp 等方案。详见我们的「Tailscale 内网穿透」专题教程。",
      },
    ],
  },
  {
    title: "学习与课程",
    faqs: [
      {
        q: "需要什么技术基础？",
        a: "使用 OpenClaw 的基本功能不需要编程基础，我们的 7 天入门教程从零开始。如果想自定义 Skill 或做深度开发，需要基本的 JavaScript/TypeScript 能力。企业培训可以根据团队技术水平定制内容。",
      },
      {
        q: "7 天入门路径和付费课程的区别？",
        a: "7 天入门路径是免费的，帮你快速了解 OpenClaw 的核心功能。付费课程提供更深入的内容：完整的视频教程、实战项目、配套源码、社群答疑，以及持续更新的课程内容。简单说，入门看免费教程，进阶上付费课程。",
      },
      {
        q: "课程购买后可以退款吗？",
        a: "所有课程支持 7 天无条件退款。如果课程内容不符合你的预期，可以随时申请退款，无需任何理由。我们对课程质量有信心，退款率不到 2%。",
      },
      {
        q: "课程多久更新一次？",
        a: "跟随 OpenClaw 版本发布节奏，通常每月至少更新 1-2 节课。重大版本更新时会增加专题讲解。所有已购课程享受终身免费更新。",
      },
    ],
  },
  {
    title: "企业服务",
    faqs: [
      {
        q: "企业培训如何定价？",
        a: "企业培训根据人数、时长和定制化程度不同，价格有所差异。基础方案（线上录播+答疑）5000 元起，定制方案（线下驻场+专属课件）根据需求报价。请通过企业服务页面提交咨询，我们将在 1 个工作日内联系你。",
      },
      {
        q: "可以做私有化部署咨询吗？",
        a: "可以。我们提供企业级私有化部署方案，包括架构设计、安全加固、高可用配置、监控告警等。已服务超过 50 家企业，涵盖金融、电商、SaaS、制造等行业。",
      },
      {
        q: "是否提供技术支持 SLA？",
        a: "企业客户享受专属技术支持：工作日 9:00-21:00 在线响应，紧急问题 2 小时内响应。提供季度技术评审和优化建议。VIP 客户可选 7x24 小时支持。",
      },
    ],
  },
  {
    title: "安全与隐私",
    faqs: [
      {
        q: "数据安全如何保障？",
        a: "OpenClaw 支持完全私有化部署，所有数据存储在你自己的服务器上，不经过任何第三方。我们提供三层安全加固方案（网络层、应用层、数据层），并有详细的安全配置教程。",
      },
      {
        q: "API Key 会被泄露吗？",
        a: "不会。OpenClaw 的 API Key 存储在本地加密配置文件中，不会上传到任何外部服务器。建议定期轮换 Key，并使用环境变量而非明文配置。我们的安全教程有详细说明。",
      },
      {
        q: "对话记录会被训练吗？",
        a: "OpenClaw 本身不收集任何数据。对话是否被模型提供商用于训练，取决于你使用的 AI 模型的政策。例如 OpenAI API 不会使用 API 调用数据训练模型。使用本地模型则完全不存在此问题。",
      },
    ],
  },
  {
    title: "社区与贡献",
    faqs: [
      {
        q: "如何联系你们？",
        a: "最快方式是加入微信社群（关注公众号获取入群码），也可以通过 Telegram 群组、Discord 服务器联系我们。企业合作请通过官网表单提交。",
      },
      {
        q: "如何参与社区贡献？",
        a: "欢迎各种形式的贡献：分享使用案例、撰写教程文章、开发 Skill 并发布到 ClawHub、在 GitHub 提交 PR 或 Issue、在社群帮助新手。活跃贡献者可获得社区荣誉徽章和课程折扣。",
      },
      {
        q: "ClawHub 是什么？",
        a: "ClawHub 是 OpenClaw 的技能市场，类似于 VS Code 的扩展市场。任何人都可以开发 Skill 并发布到 ClawHub，其他用户一条命令即可安装使用。目前已有 200+ 社区贡献的 Skill。",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold md:text-4xl">常见问题</h1>
        <p className="mt-4 text-muted-foreground">
          没找到你的问题？加入社群直接问我们
        </p>
      </div>

      <div className="space-y-10">
        {faqSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            <Accordion type="single" collapsible className="w-full">
              {section.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`${section.title}-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
