"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="mb-2 w-64 rounded-lg border bg-card p-4 shadow-lg">
          <h4 className="font-semibold text-sm mb-3">联系我们</h4>
          <div className="space-y-2">
            <Link
              href="/community"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              💬 加入微信社群
            </Link>
            <Link
              href="/community"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              📢 关注公众号
            </Link>
            <Link
              href="/enterprise"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              🏢 企业咨询
            </Link>
          </div>
        </div>
      )}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
