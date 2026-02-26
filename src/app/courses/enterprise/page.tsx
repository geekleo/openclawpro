import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "企业版课程",
  description: "OpenClaw 企业版课程 — 为企业团队量身定制的 AI Agent 培训方案",
};

export default function CourseEnterprisePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <Badge className="mb-4">企业版</Badge>
        <h1 className="text-3xl font-bold md:text-4xl">企业版课程</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          为企业团队量身定制的 AI Agent 培训方案，支持私有化部署和定制课程内容
        </p>
      </div>
      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/enterprise">了解企业服务 →</Link>
        </Button>
      </div>
    </div>
  );
}
