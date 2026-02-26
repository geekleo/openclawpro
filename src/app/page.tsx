import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { ValueCards } from "@/components/home/value-cards";
import { DayPreview } from "@/components/home/day-preview";
import { CourseRecommend } from "@/components/home/course-recommend";
import { CaseCarousel } from "@/components/home/case-carousel";
import { EcosystemFeed } from "@/components/home/ecosystem-feed";
import { Testimonials } from "@/components/home/testimonials";
import { CommunityCTA } from "@/components/conversion/community-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ValueCards />
      <DayPreview />
      <CourseRecommend />
      <CaseCarousel />
      <EcosystemFeed />
      <Testimonials />
      <CommunityCTA />
    </>
  );
}
