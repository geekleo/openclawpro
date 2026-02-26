import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ContentLockProps {
  type?: "community" | "course";
}

export function ContentLock({ type = "community" }: ContentLockProps) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
      <div className="relative z-20 rounded-lg border bg-card p-8 text-center">
        {type === "community" ? (
          <>
            <h3 className="text-lg font-semibold">后续内容需加入社群解锁</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              加入微信社群，免费获取完整教程内容和配置模板
            </p>
            <Button asChild className="mt-4">
              <Link href="/community">加入社群</Link>
            </Button>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold">完整代码在精品课程中</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              想获取完整实现代码和视频讲解？查看对应精品课程
            </p>
            <Button asChild className="mt-4">
              <Link href="/courses">查看课程</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
