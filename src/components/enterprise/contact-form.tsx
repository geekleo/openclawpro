"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border bg-card p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold">感谢您的咨询！</h3>
        <p className="mt-2 text-muted-foreground">我们将在 1 个工作日内与您联系</p>
      </div>
    );
  }

  return (
    <form
      className="rounded-lg border bg-card p-6 md:p-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h3 className="text-xl font-bold mb-4">预约咨询</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium mb-1.5 block">公司名称 *</label>
          <Input placeholder="请输入公司名称" required />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">联系人 *</label>
          <Input placeholder="请输入姓名" required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium mb-1.5 block">手机号码 *</label>
          <Input type="tel" placeholder="请输入手机号" required />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">预算范围</label>
          <Input placeholder="如：5-10万" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-1.5 block">需求描述 *</label>
        <Textarea placeholder="请简要描述您的培训需求" rows={4} required />
      </div>
      <Button type="submit" className="w-full">提交咨询</Button>
    </form>
  );
}
