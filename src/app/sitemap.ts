import { MetadataRoute } from "next";
import { siteConfig, dayTopics, courses } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/learn",
    "/learn/topics",
    "/learn/skills",
    "/courses",
    "/courses/enterprise",
    "/cases",
    "/blog",
    "/community",
    "/enterprise",
    "/resources",
    "/resources/tools",
    "/resources/templates",
    "/resources/faq",
    "/about",
  ];

  const dayPages = dayTopics.map((d) => `/learn/day/${d.day}`);
  const coursePages = courses.map((c) => `/courses/${c.slug}`);
  const casePages = ["/cases/productivity", "/cases/developer", "/cases/enterprise", "/cases/creative"];

  const allPages = [...staticPages, ...dayPages, ...coursePages, ...casePages];

  return allPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : path.startsWith("/courses") ? 0.9 : 0.7,
  }));
}
