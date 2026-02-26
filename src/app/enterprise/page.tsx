import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/enterprise/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "企业服务",
  description: "OpenClaw 企业服务 — AI Agent 企业内训、架构咨询、技术支持，让 AI 赋能您的团队",
};

const services = [
  { icon: "🎓", title: "企业内训", description: "1~3天定制化培训，根据企业业务场景设计课程内容，让团队快速上手 AI Agent" },
  { icon: "🏗️", title: "架构咨询", description: "评估企业现有工作流，设计 AI Agent 落地方案，提供技术选型和架构建议" },
  { icon: "🛡️", title: "技术支持", description: "长期顾问服务，包括部署运维、问题排查、版本升级、安全加固等" },
];

const steps = [
  { step: "01", title: "需求沟通", description: "了解企业背景和具体需求" },
  { step: "02", title: "方案定制", description: "根据需求设计培训和实施方案" },
  { step: "03", title: "培训交付", description: "线上或线下交付培训内容" },
  { step: "04", title: "持续支持", description: "提供后续技术支持和答疑" },
];

export default function EnterprisePage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <Badge className="mb-4">企业服务</Badge>
        <h1 className="text-3xl font-bold md:text-4xl">让 AI Agent 赋能您的团队</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          专业的 AI Agent 培训和咨询服务，帮助企业快速落地 AI 应用，实现降本增效
        </p>
      </div>

      {/* Services */}
      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {services.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <div className="text-3xl mb-2">{s.icon}</div>
              <CardTitle>{s.title}</CardTitle>
              <CardDescription>{s.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Process */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">服务流程</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="text-3xl font-bold text-primary/20 mb-2">{s.step}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-8">客户评价</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
          {["某电商公司", "某金融集团", "某 SaaS 公司", "某科技创业", "某教育机构"].map((name) => (
            <div key={name} className="h-10 px-6 flex items-center rounded border text-sm text-muted-foreground">
              {name}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground italic">
          &ldquo;OpenClaw Pro 的企业培训帮助我们团队在两周内落地了 AI Agent 方案，效率提升显著。&rdquo;
        </p>
      </div>

      {/* Contact form + whitepaper */}
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <div className="rounded-lg border bg-muted/50 p-6 md:p-8 flex flex-col items-center justify-center text-center">
          <div className="text-4xl mb-4">📄</div>
          <h3 className="text-xl font-bold">下载白皮书</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            《企业 AI Agent 落地指南》— 了解企业如何系统化引入 AI Agent
          </p>
          <Button variant="outline" className="mt-4">
            留下联系方式下载 →
          </Button>
        </div>
      </div>
    </div>
  );
}
