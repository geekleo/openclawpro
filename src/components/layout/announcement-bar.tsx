"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="container flex items-center justify-center gap-2 py-2 text-sm">
        <span>🔥 限时优惠：全栈会员立减 300 元</span>
        <Link href="/courses" className="font-semibold underline underline-offset-4">
          立即查看 →
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-sm opacity-70 hover:opacity-100"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">关闭</span>
        </button>
      </div>
    </div>
  );
}
