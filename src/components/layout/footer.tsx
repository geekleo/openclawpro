import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/constants";

const footerLinks = {
  learn: {
    title: "免费教程",
    links: [
      { title: "7天入门路径", href: "/learn/day/1" },
      { title: "专题教程", href: "/learn/topics" },
      { title: "技能库导航", href: "/learn/skills" },
    ],
  },
  courses: {
    title: "精品课程",
    links: [
      { title: "零基础训练营", href: "/courses/zero-to-hero" },
      { title: "自动化实战", href: "/courses/automation-mastery" },
      { title: "Skill 开发者课程", href: "/courses/skill-developer" },
      { title: "企业版", href: "/courses/enterprise" },
    ],
  },
  community: {
    title: "社区",
    links: [
      { title: "加入社群", href: "/community" },
      { title: "博客", href: "/blog" },
      { title: "周刊", href: "/blog?category=weekly" },
      { title: "实战案例", href: "/cases" },
    ],
  },
  about: {
    title: "关于",
    links: [
      { title: "关于我们", href: "/about" },
      { title: "企业服务", href: "/enterprise" },
      { title: "资源中心", href: "/resources" },
      { title: "常见问题", href: "/resources/faq" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">
                <span className="text-primary">OpenClaw</span> Pro
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex space-x-4">
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm">GitHub</a>
              <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm">Discord</a>
              <a href={siteConfig.links.telegram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm">Telegram</a>
            </div>
          </div>
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} OpenClaw Pro. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">用心做好中文 AI Agent 教育</p>
        </div>
      </div>
    </footer>
  );
}
