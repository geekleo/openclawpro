import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ArticleCTA() {
  return (
    <div className="mt-12 rounded-lg border bg-muted/50 p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-semibold">加入社群，获取更多资源</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            独家教程、配置模板、答疑互助，5000+ 成员在等你
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="h-20 w-20 rounded border bg-background flex items-center justify-center text-xs text-muted-foreground">
              二维码
            </div>
            <p className="text-xs text-muted-foreground">微信扫码加入</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">想要深入学习？</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            查看我们的精品视频课程，系统化学习少走弯路
          </p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/courses">查看精品课程 →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
