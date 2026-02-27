import { notFound } from "next/navigation";
import { ProgressBar } from "@/components/learn/progress-bar";
import { TutorialFooter } from "@/components/learn/tutorial-footer";
import { MDXContent } from "@/components/mdx-content";
import { getTutorialByDay } from "@/lib/content";
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

  const tutorial = getTutorialByDay(day);

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
            <p className="text-sm text-muted-foreground !mt-0 !mb-1">Day {day} · {tutorial?.duration || topic.description}</p>
            <h1 className="!mt-0 !mb-0">{tutorial?.title || topic.title}</h1>
          </div>
        </div>

        {tutorial?.body ? (
          <MDXContent code={tutorial.body} />
        ) : (
          <p className="text-muted-foreground">内容加载中...</p>
        )}
      </article>

      <TutorialFooter hook={hooks[day - 1]} currentDay={day} />
    </div>
  );
}
