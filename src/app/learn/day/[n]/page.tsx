import { notFound } from "next/navigation";
import { ProgressBar } from "@/components/learn/progress-bar";
import { TutorialFooter } from "@/components/learn/tutorial-footer";
import { dayTopics } from "@/lib/constants";
import type { Metadata } from "next";

interface PageProps {
  params: { n: string };
}

export function generateStaticParams() {
  return Array.from({ length: 7 }, (_, i) => ({ n: String(i + 1) }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const day = parseInt(params.n);
  const topic = dayTopics.find((d) => d.day === day);
  if (!topic) return {};
  return {
    title: `Day ${day}: ${topic.title}`,
    description: topic.description,
  };
}

export default function DayPage({ params }: PageProps) {
  const day = parseInt(params.n);
  const topic = dayTopics.find((d) => d.day === day);

  if (!topic || day < 1 || day > 7) {
    notFound();
  }

  // Placeholder hooks per day
  const hooks = [
    "想看一键部署到云服务器？→ 精品课 Module 1",
    "高级 Prompt 模板库 → 加入社群获取",
    "完整开发工作流视频 → 精品课 Module 3",
    "自动化爬虫实战 → 精品课 Module 4",
    "自定义 Skill 开发教程 → 精品课 Module 5",
    "企业级自动化工作流 → 精品课 Module 6",
    "Multi-Agent 架构设计 → 精品课 Module 7",
  ];

  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <ProgressBar currentDay={day} />

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">{topic.icon}</span>
          <div>
            <p className="text-sm text-muted-foreground !mt-0 !mb-1">Day {day} · {topic.description}</p>
            <h1 className="!mt-0 !mb-0">{topic.title}</h1>
          </div>
        </div>

        {/* Placeholder content - will be replaced with MDX once Velite builds */}
        <p>
          欢迎来到 OpenClaw 7天入门路径的第 {day} 天！今天我们将学习<strong>{topic.title}</strong>。
        </p>

        {day === 1 && (
          <>
            <h2>什么是 OpenClaw？</h2>
            <p>
              OpenClaw 是一个强大的开源 AI Agent 平台，它可以帮助你自动化各种任务，
              从简单的对话到复杂的工作流程。通过 OpenClaw，你可以：
            </p>
            <ul>
              <li>与 AI 进行深度对话，获取专业建议</li>
              <li>自动化处理文件、邮件、日程等日常任务</li>
              <li>接入各种第三方服务和工具</li>
              <li>开发自定义技能，扩展 AI 的能力边界</li>
            </ul>
            <h2>安装部署</h2>
            <p>让我们从安装 OpenClaw 开始。你可以选择以下几种方式：</p>
            <h3>方式一：Docker 安装（推荐）</h3>
            <pre><code>{`docker run -d --name openclaw \\
  -p 3000:3000 \\
  -v openclaw_data:/data \\
  openclaw/openclaw:latest`}</code></pre>
            <h3>方式二：NPM 安装</h3>
            <pre><code>{`npm install -g openclaw
openclaw start`}</code></pre>
            <p>
              安装完成后，打开浏览器访问 <code>http://localhost:3000</code>，
              你就可以开始使用 OpenClaw 了！
            </p>
          </>
        )}

        {day !== 1 && (
          <>
            <h2>今日学习目标</h2>
            <p>完成今天的学习后，你将掌握以下技能：</p>
            <ul>
              <li>理解 {topic.title} 的核心概念</li>
              <li>能够独立完成基本的 {topic.description} 操作</li>
              <li>了解进阶用法和最佳实践</li>
            </ul>
            <h2>核心概念</h2>
            <p>
              {topic.description} 是 OpenClaw 的核心功能之一。在实际使用中，
              这个功能可以帮助你大幅提升工作效率。
            </p>
            <h2>实战练习</h2>
            <p>
              接下来，让我们通过一个实际的例子来学习如何使用这个功能。
              请打开你的 OpenClaw 终端，跟着下面的步骤操作：
            </p>
            <ol>
              <li>打开 OpenClaw 控制台</li>
              <li>输入相关命令</li>
              <li>观察输出结果</li>
              <li>尝试修改参数，观察变化</li>
            </ol>
          </>
        )}

        <h2>今日小结</h2>
        <p>
          恭喜你完成了 Day {day} 的学习！今天我们学习了{topic.title}的基础知识。
          {day < 7 ? `明天我们将学习 Day ${day + 1} 的内容，继续加油！` : "你已经完成了全部7天的入门学习，可以开始探索更高级的功能了！"}
        </p>
      </article>

      <TutorialFooter hook={hooks[day - 1]} currentDay={day} />
    </div>
  );
}
