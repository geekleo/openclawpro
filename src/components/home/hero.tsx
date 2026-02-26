import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:to-primary/5" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            从零到精通 OpenClaw
            <br />
            <span className="text-primary">你只差一个系统化训练</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            OpenClaw 中文进阶培训平台 — 免费教程入门，精品课程进阶，企业定制落地。
            <br className="hidden sm:block" />
            已帮助 2000+ 学员掌握 AI Agent 实战技能。
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/learn">免费开始学习</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link href="/courses">查看精品课程</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
