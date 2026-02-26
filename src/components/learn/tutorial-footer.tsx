import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TutorialFooterProps {
  hook?: string;
  currentDay: number;
  totalDays?: number;
}

export function TutorialFooter({ hook, currentDay, totalDays = 7 }: TutorialFooterProps) {
  const nextDay = currentDay < totalDays ? currentDay + 1 : null;
  const prevDay = currentDay > 1 ? currentDay - 1 : null;

  return (
    <div className="mt-12 space-y-6">
      {/* Hook to paid content */}
      {hook && (
        <div className="rounded-lg border bg-primary/5 p-6">
          <p className="text-sm font-medium">📌 觉得不过瘾？</p>
          <p className="mt-1 text-sm text-muted-foreground">{hook}</p>
          <Button asChild variant="outline" size="sm" className="mt-3">
            <Link href="/courses">查看精品课程 →</Link>
          </Button>
        </div>
      )}

      {/* Community + Template */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <p className="text-sm font-medium">💬 有问题？加入社群讨论</p>
          <p className="mt-1 text-xs text-muted-foreground">5000+ 学员在线答疑</p>
          <Button asChild variant="ghost" size="sm" className="mt-2">
            <Link href="/community">加入社群 →</Link>
          </Button>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm font-medium">⬇️ 下载本节配置模板</p>
          <p className="mt-1 text-xs text-muted-foreground">关注公众号免费获取</p>
          <Button variant="ghost" size="sm" className="mt-2">
            获取模板 →
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t">
        {prevDay ? (
          <Button asChild variant="outline">
            <Link href={`/learn/day/${prevDay}`}>← Day {prevDay}</Link>
          </Button>
        ) : (
          <div />
        )}
        {nextDay ? (
          <Button asChild>
            <Link href={`/learn/day/${nextDay}`}>Day {nextDay} →</Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/courses">完成！查看进阶课程 →</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
