import { CourseCard } from "@/components/courses/course-card";
import { CourseFilter } from "@/components/courses/course-filter";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "精品课程",
  description: "OpenClaw 精品视频课程 — 从零基础到企业级应用，系统化学习少走弯路",
};

export default function CoursesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <Badge className="mb-4">精品课程</Badge>
        <h1 className="text-3xl font-bold md:text-4xl">系统化学习，少走弯路</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          从入门到企业级应用，为每个阶段的学习者准备了对应课程。
          已帮助 2000+ 学员提升 AI Agent 实战技能。
        </p>
      </div>

      <CourseFilter />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.slug} {...course} />
        ))}
      </div>

      {/* Full member plan */}
      <div className="mt-16 rounded-2xl border-2 border-primary bg-primary/5 p-8 text-center">
        <Badge className="mb-4">最超值</Badge>
        <h2 className="text-2xl font-bold">全栈会员</h2>
        <p className="mt-2 text-muted-foreground">解锁全部课程，一年内无限学习</p>
        <div className="mt-4 flex items-baseline justify-center gap-2">
          <span className="text-4xl font-bold text-primary">¥1499</span>
          <span className="text-muted-foreground">/年</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          相比单独购买节省 ¥700+
        </p>
      </div>
    </div>
  );
}
