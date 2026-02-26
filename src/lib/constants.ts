export const siteConfig = {
  name: "OpenClaw Pro",
  description: "OpenClaw 中文进阶培训平台 — 从零到精通，系统化学习 AI Agent",
  url: "https://openclawpro.dev",
  ogImage: "https://openclawpro.dev/og.png",
  links: {
    github: "https://github.com/openclawpro",
    discord: "https://discord.gg/openclaw",
    telegram: "https://t.me/openclaw",
  },
};

export const navItems = [
  {
    title: "免费教程",
    href: "/learn",
    children: [
      { title: "7天入门路径", href: "/learn/day/1", description: "从零开始，7天掌握 OpenClaw 核心功能" },
      { title: "专题教程", href: "/learn/topics", description: "按场景分类的中深度实战教程" },
      { title: "技能库导航", href: "/learn/skills", description: "精选技能推荐，带中文详评和使用指南" },
    ],
  },
  { title: "精品课程", href: "/courses" },
  {
    title: "实战案例",
    href: "/cases",
    children: [
      { title: "个人效率", href: "/cases/productivity" },
      { title: "开发者工具", href: "/cases/developer" },
      { title: "企业自动化", href: "/cases/enterprise" },
      { title: "创意玩法", href: "/cases/creative" },
    ],
  },
  { title: "资源中心", href: "/resources" },
  { title: "社区", href: "/community" },
  { title: "企业服务", href: "/enterprise" },
  { title: "博客", href: "/blog" },
] as const;

export const stats = [
  { label: "教程", value: "333+" },
  { label: "天学习路径", value: "7" },
  { label: "学员", value: "2000+" },
  { label: "企业服务", value: "50+" },
] as const;

export const courses = [
  {
    slug: "zero-to-hero",
    title: "OpenClaw 零基础训练营",
    description: "系统入门，20 节视频带你从零掌握 OpenClaw 核心功能",
    price: 199,
    originalPrice: 299,
    difficulty: "入门" as const,
    lessons: 20,
    featured: true,
    coverImage: "/images/courses/zero-to-hero.jpg",
  },
  {
    slug: "automation-mastery",
    title: "OpenClaw 自动化实战",
    description: "30 节进阶视频，深入自动化工作流、Cron 任务和 API 集成",
    price: 399,
    originalPrice: 599,
    difficulty: "进阶" as const,
    lessons: 30,
    featured: true,
    coverImage: "/images/courses/automation.jpg",
  },
  {
    slug: "skill-developer",
    title: "Skill 开发者课程",
    description: "25 节高级课程，学会开发自定义 Skill 和 MCP Server",
    price: 599,
    originalPrice: 799,
    difficulty: "高级" as const,
    lessons: 25,
    featured: true,
    coverImage: "/images/courses/skill-dev.jpg",
  },
  {
    slug: "enterprise-agent",
    title: "企业级 AI Agent 架构",
    description: "15 节企业实战课，Multi-Agent 架构设计与落地方案",
    price: 999,
    originalPrice: 1299,
    difficulty: "高级" as const,
    lessons: 15,
    featured: false,
    coverImage: "/images/courses/enterprise.jpg",
  },
] as const;

export const dayTopics = [
  { day: 1, title: "认识 OpenClaw", description: "什么是 AI 助手 + 安装部署", icon: "🚀" },
  { day: 2, title: "深度对话", description: "Prompt 技巧 + Workspace 配置", icon: "💬" },
  { day: 3, title: "文件与代码", description: "文件操作 + 代码生成基础", icon: "📁" },
  { day: 4, title: "联网能力", description: "搜索 + API 调用", icon: "🌐" },
  { day: 5, title: "技能扩展", description: "ClawHub 技能安装", icon: "🧩" },
  { day: 6, title: "自动化", description: "Cron + Heartbeat 定时任务", icon: "⚡" },
  { day: 7, title: "高级玩法", description: "多 Agent + 浏览器控制", icon: "🎯" },
] as const;

export const skillCategories = [
  { id: "featured", label: "编辑精选 Top 20", icon: "🏆" },
  { id: "office", label: "办公效率", icon: "💼" },
  { id: "developer", label: "开发者工具", icon: "🛠️" },
  { id: "info", label: "信息获取", icon: "🌐" },
  { id: "marketing", label: "营销增长", icon: "📈" },
  { id: "smarthome", label: "智能家居", icon: "🏠" },
  { id: "media", label: "音视频", icon: "🎵" },
  { id: "ai", label: "AI & LLM", icon: "🧠" },
  { id: "messaging", label: "通讯平台", icon: "💬" },
  { id: "fun", label: "趣味玩法", icon: "🎮" },
] as const;

export const sampleSkills = [
  {
    name: "homeassistant",
    title: "智能家居控制",
    description: "让 OpenClaw 直接控制你的 Home Assistant 设备，实现语音/消息控制灯光、空调、窗帘等。支持场景联动和自动化触发。",
    review: "实测下来最稳定的智能家居 Skill，但需要 Home Assistant 已经配好。建议先看我们的部署教程再安装。",
    rating: 4,
    difficulty: "入门",
    category: "smarthome",
    installCommand: "openclaw skill install homeassistant",
    tags: ["智能家居", "生活自动化", "IoT"],
  },
  {
    name: "notion",
    title: "Notion 笔记管理",
    description: "通过 OpenClaw 直接创建、编辑和查询 Notion 页面和数据库。支持模板化创建和批量操作。",
    review: "办公效率类 Skill 中最推荐的一个，API 调用稳定。适合用 Notion 做知识库的用户。",
    rating: 5,
    difficulty: "入门",
    category: "office",
    installCommand: "openclaw skill install notion",
    tags: ["笔记", "知识管理", "办公效率"],
  },
  {
    name: "github",
    title: "GitHub 代码管理",
    description: "通过 OpenClaw 管理 GitHub 仓库，包括创建 Issue、PR Review、代码搜索和 CI/CD 监控。",
    review: "开发者必装 Skill。配合 Claude Code 使用体验极佳，但需要正确配置 GitHub Token 权限。",
    rating: 5,
    difficulty: "进阶",
    category: "developer",
    installCommand: "openclaw skill install github",
    tags: ["代码管理", "DevOps", "CI/CD"],
  },
] as const;

export const testimonials = [
  {
    name: "张明",
    role: "全栈工程师",
    content: "7天入门路径非常系统化，帮我快速理解了 OpenClaw 的核心概念。现在每天都在用。",
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    name: "李婷",
    role: "产品经理",
    content: "自动化实战课让我学会了用 OpenClaw 自动化日报生成和邮件管理，每天节省 2 小时。",
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    name: "王磊",
    role: "CTO @ 某 SaaS 公司",
    content: "企业级课程帮助我们团队落地了 AI Agent 架构，客服自动化节省了 80% 的人力成本。",
    avatar: "/images/avatars/avatar-3.jpg",
  },
] as const;
