import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          学员怎么说
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          来自真实学员的反馈
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise logo wall */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">已为以下企业提供培训服务</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["企业A", "企业B", "企业C", "企业D", "企业E"].map((name) => (
              <div key={name} className="h-8 px-4 flex items-center rounded border text-sm text-muted-foreground">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
