import { Badge } from "@/components/ui/badge";
import { SkillCard } from "@/components/learn/skill-card";
import { skillCategories, sampleSkills } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "技能库导航",
  description: "OpenClaw 技能精选推荐 — 中文详评、推荐指数、使用场景、避坑提示，告诉你哪些 Skill 值得装",
};

export default function SkillsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <Badge className="mb-4">技能精选</Badge>
        <h1 className="text-3xl font-bold md:text-4xl">技能库导航</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          不只是链接列表 — 每个技能都有中文详评、推荐指数和使用场景，帮你做出正确选择
        </p>
      </div>

      {/* Category nav */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {skillCategories.map((cat) => (
          <Badge key={cat.id} variant="outline" className="cursor-pointer hover:bg-accent px-3 py-1.5">
            {cat.icon} {cat.label}
          </Badge>
        ))}
      </div>

      {/* Featured skills */}
      <div className="mb-12">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
          🏆 编辑精选
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleSkills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      {/* More categories placeholder */}
      <div className="text-center py-12 rounded-lg border border-dashed">
        <p className="text-muted-foreground">更多技能持续收录中...</p>
        <p className="text-sm text-muted-foreground mt-2">
          每月更新精选 Top 20，持续补充新技能
        </p>
      </div>
    </div>
  );
}
