import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/content";
import { CTABanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Work — CoderPush",
  description:
    "Case studies from marketplace, fintech, healthtech, edtech, logistics, and SaaS engagements.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 bg-radial-indigo" />
        <div aria-hidden className="absolute inset-0 circuit-pattern opacity-40 noise-mask" />
        <div className="container-xl relative">
          <FadeIn>
            <div className="eyebrow">Work</div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="heading-display mt-4 max-w-4xl text-4xl leading-[1.05] text-white sm:text-6xl md:text-[68px]">
              What shipped — and what it moved.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-slate-mist sm:text-lg md:text-xl">
              Six engagements. Six industries. Every one of them measurable,
              every one of them in production.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/work/${cs.slug}`}
                  className="group flex h-full flex-col justify-between rounded-xl border border-slate-900/10 bg-slate-50/60 p-7 transition hover:-translate-y-1 hover:border-indigo/40 hover:bg-white hover:shadow-xl"
                >
                  <div>
                    <span className="tag-light">{cs.industry}</span>
                    <div className="mt-8 font-display text-5xl font-semibold leading-none text-slate-900">
                      {cs.metric}
                    </div>
                    <div className="mt-2 text-sm text-slate-ink">{cs.metricLabel}</div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-slate-900">
                      {cs.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-ink">
                      {cs.summary}
                    </p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-deep">
                    Read case study
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Your engagement, next on this page."
        subtitle="Tell us the number you need to move. We'll tell you what it takes."
      />
    </>
  );
}
