import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CommunityCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-8 text-center shadow-sm md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            加入 OpenClaw 中文社区
          </h2>
          <p className="mt-4 text-muted-foreground">
            获取独家教程更新、答疑互助、内推机会和线下活动通知
          </p>
          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <div className="text-center">
              <div className="h-32 w-32 rounded-lg border bg-muted flex items-center justify-center text-muted-foreground text-sm">
                微信群二维码
              </div>
              <p className="mt-2 text-xs text-muted-foreground">扫码加入微信群</p>
            </div>
            <div className="text-center">
              <div className="h-32 w-32 rounded-lg border bg-muted flex items-center justify-center text-muted-foreground text-sm">
                公众号二维码
              </div>
              <p className="mt-2 text-xs text-muted-foreground">关注公众号</p>
            </div>
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link href="/community">了解更多社区福利 →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
