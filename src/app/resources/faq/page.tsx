import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "常见问题" };

const faqs = [
  { q: "OpenClaw 是什么？", a: "OpenClaw 是一个开源的 AI Agent 平台，可以帮助你自动化各种任务。它支持多种 AI 模型，拥有丰富的技能生态，可以接入各种第三方服务。" },
  { q: "OpenClaw 是免费的吗？", a: "OpenClaw 本身是开源免费的。你需要自行准备 AI 模型的 API Key（如 OpenAI、Anthropic 等），这部分会产生使用费用。我们的培训课程为付费内容。" },
  { q: "需要什么技术基础？", a: "如果只是使用 OpenClaw 的基本功能，不需要编程基础。如果想要自定义 Skill 或做深度开发，需要基本的编程能力。我们的 7 天入门教程从零开始，适合所有人。" },
  { q: "课程购买后可以退款吗？", a: "所有课程支持 7 天无条件退款。如果课程内容不符合你的预期，可以随时申请退款。" },
  { q: "企业培训如何定价？", a: "企业培训根据人数、时长和定制化程度不同，价格有所差异。请通过企业服务页面提交咨询，我们将在 1 个工作日内联系你。" },
  { q: "如何联系你们？", a: "你可以通过微信社群、公众号私信或企业服务页面的表单联系我们。社群是最快速的沟通方式。" },
  { q: "支持哪些 AI 模型？", a: "OpenClaw 支持 OpenAI、Anthropic Claude、Google Gemini 等主流模型，也支持本地部署的开源模型（如 Llama、Qwen 等）。" },
  { q: "数据安全如何保障？", a: "OpenClaw 支持完全私有化部署，所有数据存储在你自己的服务器上。我们提供三层安全加固方案，确保数据安全。" },
];

export default function FAQPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-8">常见问题</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
