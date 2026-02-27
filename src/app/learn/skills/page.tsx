import { Badge } from "@/components/ui/badge";
import { SkillCard } from "@/components/learn/skill-card";
import { skillCategories, sampleSkills } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "技能库导航",
  description: "OpenClaw 技能精选推荐 — 中文详评、推荐指数、使用场景、避坑提示，告诉你哪些 Skill 值得装",
};

const categoryMap: Record<string, string> = {
  featured: "编辑精选 Top 20",
  office: "办公效率",
  developer: "开发者工具",
  info: "信息获取",
  marketing: "营销增长",
  smarthome: "智能家居",
  media: "音视频",
  ai: "AI & LLM",
  messaging: "通讯平台",
  fun: "趣味玩法",
};

export default function SkillsPage() {
  const groupedSkills: Record<string, typeof sampleSkills[number][]> = {};
  for (const skill of sampleSkills) {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  }

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

      {/* Skills by category */}
      <div className="space-y-12">
        {Object.entries(groupedSkills).map(([catId, skills]) => {
          const catInfo = skillCategories.find((c) => c.id === catId);
          return (
            <div key={catId}>
              <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                {catInfo?.icon} {categoryMap[catId] || catId}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center py-12 mt-8 rounded-lg border border-dashed">
        <p className="text-lg font-medium">更多技能持续收录中...</p>
        <p className="text-sm text-muted-foreground mt-2">
          每月更新精选 Top 20，目前已收录 {sampleSkills.length} 个精选技能
        </p>
      </div>
    </div>
  );
}
