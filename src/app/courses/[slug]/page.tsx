import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { courses } from "@/lib/constants";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return {};
  return { title: course.title, description: course.description };
}

export default function CourseDetailPage({ params }: PageProps) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  return (
    <div className="container py-12 md:py-16">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="outline">{course.difficulty}</Badge>
          <Badge variant="secondary">{course.lessons} 节课</Badge>
        </div>
        <h1 className="text-3xl font-bold md:text-4xl">{course.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{course.description}</p>
        <div className="mt-6 flex items-baseline justify-center gap-3">
          <span className="text-4xl font-bold text-primary">¥{course.price}</span>
          <span className="text-lg text-muted-foreground line-through">¥{course.originalPrice}</span>
          <Badge variant="destructive">限时优惠</Badge>
        </div>
        <Button size="lg" className="mt-6 px-12">立即购买</Button>
      </div>

      {/* Video preview */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="aspect-video rounded-lg bg-muted flex items-center justify-center border">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-2">▶️</div>
            <p>课程预告片（2~3分钟）</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* What you'll learn */}
        <section>
          <h2 className="text-2xl font-bold mb-6">你将学到什么</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {["掌握核心概念和工作原理", "独立完成实战项目", "理解高级配置和优化", "获得最佳实践经验", "解决常见问题和坑点", "建立系统化知识体系"].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Course outline */}
        <section>
          <h2 className="text-2xl font-bold mb-6">课程大纲</h2>
          <Accordion type="single" collapsible>
            {["模块一：基础入门", "模块二：核心功能", "模块三：进阶实战", "模块四：最佳实践", "模块五：项目实战"].map((module, i) => (
              <AccordionItem key={module} value={`module-${i}`}>
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    {module}
                    {i === 0 && <Badge variant="secondary" className="text-xs">免费试看</Badge>}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>第 {i * 4 + 1} 节：基础概念讲解</li>
                    <li>第 {i * 4 + 2} 节：配置与实操演示</li>
                    <li>第 {i * 4 + 3} 节：实战练习</li>
                    <li>第 {i * 4 + 4} 节：总结与扩展</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Target audience */}
        <section>
          <h2 className="text-2xl font-bold mb-6">适合人群</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium text-green-600 dark:text-green-400 mb-2">✓ 适合你，如果你...</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 想系统学习 OpenClaw</li>
                <li>• 有基本的电脑操作经验</li>
                <li>• 愿意投入时间学习和实践</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium text-red-600 dark:text-red-400 mb-2">✗ 可能不适合，如果你...</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 只想简单了解概念</li>
                <li>• 没有时间投入实战练习</li>
                <li>• 已经是 OpenClaw 高级用户</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">常见问题</h2>
          <Accordion type="single" collapsible>
            {[
              { q: "课程有效期多长？", a: "购买后永久有效，可以反复观看。" },
              { q: "可以退款吗？", a: "7天内无条件退款，请放心购买。" },
              { q: "有答疑服务吗？", a: "购买课程后可加入专属学习群，讲师定期答疑。" },
              { q: "需要什么基础？", a: "只需要基本的电脑操作经验，课程从零开始讲起。" },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>

      {/* Sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur z-40 py-3">
        <div className="container flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">¥{course.price}</span>
            <span className="text-sm text-muted-foreground line-through ml-2">¥{course.originalPrice}</span>
          </div>
          <Button size="lg">立即购买</Button>
        </div>
      </div>
    </div>
  );
}
