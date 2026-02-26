import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们",
  description: "关于 OpenClaw Pro — 中文 AI Agent 教育和培训平台",
};

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold md:text-4xl">关于 OpenClaw Pro</h1>
        <p className="mt-4 text-muted-foreground">
          用心做好中文 AI Agent 教育
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>我们的使命</h2>
        <p>
          OpenClaw Pro 致力于成为中文世界最好的 AI Agent 学习平台。
          我们相信，AI Agent 将深刻改变每个人的工作方式，
          而我们的使命是让更多中文用户能够轻松掌握这项技术。
        </p>

        <h2>我们做什么</h2>
        <ul>
          <li><strong>免费教程</strong> — 7天入门路径 + 专题教程 + 技能库，降低学习门槛</li>
          <li><strong>精品课程</strong> — 系统化视频课程，从入门到企业级应用</li>
          <li><strong>企业服务</strong> — 定制培训、架构咨询、技术支持</li>
          <li><strong>社区运营</strong> — 5000+ 成员社群，每周周刊，定期活动</li>
        </ul>

        <h2>我们的优势</h2>
        <ul>
          <li><strong>原创深度</strong> — 不做纯链接搬运，每篇内容都有编辑点评和实测验证</li>
          <li><strong>中文优先</strong> — 所有内容中文编写，贴合中国用户使用场景</li>
          <li><strong>持续更新</strong> — 每周周刊 + 原创教程，保持内容新鲜度</li>
          <li><strong>转化闭环</strong> — 从免费教程到付费课程到企业服务，完整学习路径</li>
        </ul>

        <h2>联系我们</h2>
        <p>
          如果你有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button asChild>
          <Link href="/community">加入社群</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/enterprise">企业合作</Link>
        </Button>
      </div>
    </div>
  );
}
