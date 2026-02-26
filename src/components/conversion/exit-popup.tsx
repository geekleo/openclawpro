"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasFired, setHasFired] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !hasFired) {
      setIsVisible(true);
      setHasFired(true);
    }
  }, [hasFired]);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div className="relative mx-4 max-w-md rounded-xl border bg-card p-8 shadow-xl">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-3 rounded-sm opacity-70 hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="text-center">
          <div className="text-4xl mb-4">🎁</div>
          <h3 className="text-xl font-bold">离开前领取免费资源</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            关注公众号，免费获取 OpenClaw 配置模板和入门指南
          </p>
          <div className="mt-6 mx-auto h-32 w-32 rounded-lg border bg-muted flex items-center justify-center text-sm text-muted-foreground">
            公众号二维码
          </div>
          <div className="mt-6 space-y-2">
            <Button asChild className="w-full">
              <Link href="/learn" onClick={() => setIsVisible(false)}>
                免费开始学习
              </Link>
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              以后再说
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
