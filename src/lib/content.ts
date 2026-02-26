/* eslint-disable @typescript-eslint/no-require-imports */
// Content helper functions for querying Velite data
// Uses require() because Velite generates content at build time

export function getTutorialByDay(day: number) {
  try {
    const { tutorials } = require("#site/content");
    return tutorials.find((t: { day: number }) => t.day === day);
  } catch {
    return null;
  }
}

export function getAllTutorials() {
  try {
    const { tutorials } = require("#site/content");
    return tutorials.sort((a: { day: number }, b: { day: number }) => a.day - b.day);
  } catch {
    return [];
  }
}

export function getAllBlogs() {
  try {
    const { blogs } = require("#site/content");
    return blogs
      .filter((b: { published: boolean }) => b.published)
      .sort((a: { date: string }, b: { date: string }) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  } catch {
    return [];
  }
}

export function getBlogBySlug(slug: string) {
  try {
    const { blogs } = require("#site/content");
    return blogs.find((b: { slugAsParams: string }) => b.slugAsParams === slug);
  } catch {
    return null;
  }
}

export function getBlogsByCategory(category: string) {
  try {
    const { blogs } = require("#site/content");
    return blogs
      .filter((b: { category: string; published: boolean }) => b.category === category && b.published)
      .sort((a: { date: string }, b: { date: string }) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  } catch {
    return [];
  }
}

export function getAllTopics() {
  try {
    const { topics } = require("#site/content");
    return topics.sort((a: { date: string }, b: { date: string }) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

export function getTopicBySlug(slug: string) {
  try {
    const { topics } = require("#site/content");
    return topics.find((t: { slugAsParams: string }) => t.slugAsParams === slug);
  } catch {
    return null;
  }
}

export function getAllCases() {
  try {
    const { cases } = require("#site/content");
    return cases;
  } catch {
    return [];
  }
}

export function getCasesByCategory(category: string) {
  try {
    const { cases } = require("#site/content");
    return cases.filter((c: { category: string }) => c.category === category);
  } catch {
    return [];
  }
}
