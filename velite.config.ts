import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const tutorials = defineCollection({
  name: "Tutorial",
  pattern: "learn/day/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      day: s.number().min(1).max(7),
      description: s.string().max(300),
      difficulty: s.enum(["beginner", "intermediate", "advanced"]),
      duration: s.string(),
      hook: s.string().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const topics = defineCollection({
  name: "Topic",
  pattern: "learn/topics/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      description: s.string().max(300),
      category: s.string(),
      tags: s.array(s.string()).optional(),
      date: s.isodate(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const blogs = defineCollection({
  name: "Blog",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      description: s.string().max(300),
      date: s.isodate(),
      category: s.enum(["weekly", "tutorial", "news"]),
      tags: s.array(s.string()).optional(),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const cases = defineCollection({
  name: "Case",
  pattern: "cases/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      description: s.string().max(300),
      category: s.enum(["productivity", "developer", "enterprise", "creative"]),
      tags: s.array(s.string()).optional(),
      metrics: s.string().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { tutorials, topics, blogs, cases },
  mdx: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
    remarkPlugins: [remarkGfm],
  },
});
