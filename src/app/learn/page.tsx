import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { dayTopics } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免费教程",
  description: "OpenClaw 免费教程 — 7天入门路径、专题教程、技能库导航，从零开始学习 AI Agent",
};

export default function LearnPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">免费学习</Badge>
        <h1 className="text-3xl font-bold md:text-4xl">免费教程</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          三种学习方式，满足不同阶段的学习需求。所有教程完全免费。
        </p>
      </div>

      {/* Three entry cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-16">
        <Card className="flex flex-col">
          <CardHeader>
            <div className="text-3xl mb-2">📅</div>
            <CardTitle>7天入门路径</CardTitle>
            <CardDescription>
              每天30分钟，从零掌握 OpenClaw 核心功能。适合完全没接触过的新手。
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild className="w-full">
              <Link href="/learn/day/1">开始 Day 1 →</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <div className="text-3xl mb-2">📚</div>
            <CardTitle>专题教程</CardTitle>
            <CardDescription>
              按场景分类的中深度实战教程，覆盖部署、消息平台、效率工具等方向。
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild variant="outline" className="w-full">
              <Link href="/learn/topics">浏览专题 →</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <div className="text-3xl mb-2">🧩</div>
            <CardTitle>技能库导航</CardTitle>
            <CardDescription>
              精选 Skill 推荐，带中文详评、推荐指数和使用指南。告诉你哪些值得装。
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild variant="outline" className="w-full">
              <Link href="/learn/skills">浏览技能库 →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* 7-day path preview */}
      <div>
        <h2 className="text-2xl font-bold mb-6">7天入门路径概览</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dayTopics.map((day) => (
            <Link key={day.day} href={`/learn/day/${day.day}`}>
              <Card className="h-full transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{day.icon}</span>
                    <Badge variant="outline">Day {day.day}</Badge>
                  </div>
                  <CardTitle className="text-lg">{day.title}</CardTitle>
                  <CardDescription>{day.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
