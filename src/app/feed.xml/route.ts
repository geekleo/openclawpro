import RSS from "rss";
import { siteConfig } from "@/lib/constants";

export async function GET() {
  const feed = new RSS({
    title: siteConfig.name,
    description: siteConfig.description,
    site_url: siteConfig.url,
    feed_url: `${siteConfig.url}/feed.xml`,
    language: "zh-CN",
    pubDate: new Date(),
  });

  // Placeholder blog items - will be populated from Velite content
  const blogItems = [
    {
      title: "OpenClaw 周刊 #1 — 本周值得关注的 5 个动态",
      description: "第一期 OpenClaw 中文周刊",
      url: `${siteConfig.url}/blog/weekly-001`,
      date: new Date("2026-03-01"),
    },
    {
      title: "2026 最完整的 OpenClaw 部署教程",
      description: "从零开始部署 OpenClaw",
      url: `${siteConfig.url}/blog/getting-started`,
      date: new Date("2026-02-25"),
    },
  ];

  blogItems.forEach((item) => {
    feed.item({
      title: item.title,
      description: item.description,
      url: item.url,
      date: item.date,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
