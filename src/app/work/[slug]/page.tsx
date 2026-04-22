import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Quote } from "lucide-react";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/content";
import { CTABanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return { title: "Case study — CoderPush" };
  return {
    title: `${cs.title} — CoderPush`,
    description: cs.summary,
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const hasDetails = Boolean(cs.challenge && cs.approach && cs.stack && cs.outcomes);

  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 bg-radial-indigo" />
        <div aria-hidden className="absolute inset-0 circuit-pattern opacity-40 noise-mask" />
        <div className="container-xl relative">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-slate-warm transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>

          <FadeIn>
            <span className="tag mt-8">{cs.industry}</span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="heading-display mt-5 max-w-4xl text-3xl leading-[1.1] text-white sm:text-5xl md:text-[60px]">
              {cs.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-slate-mist md:text-lg">
              {cs.summary}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/5 pt-10 md:grid-cols-4">
              <div>
                <div className="font-display text-4xl font-semibold text-white md:text-5xl">
                  {cs.metric}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-warm">
                  {cs.metricLabel}
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-white">
                  Production
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-warm">
                  Status
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-white">
                  Embedded pod
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-warm">
                  Engagement shape
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-white">
                  AWS-native
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-warm">
                  Architecture
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {hasDetails ? (
        <>
          {/* Challenge */}
          <section className="bg-white py-20 md:py-28">
            <div className="container-xl grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="eyebrow">Challenge</div>
                <h2 className="heading-display mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                  What wasn&apos;t working.
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-base leading-relaxed text-slate-ink md:text-lg">
                  {cs.challenge}
                </p>
              </div>
            </div>
          </section>

          {/* Approach */}
          <section className="bg-slate-50 py-20 md:py-28">
            <div className="container-xl grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="eyebrow">Approach</div>
                <h2 className="heading-display mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                  What we did.
                </h2>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-4">
                  {cs.approach!.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <Check className="mt-1.5 h-4 w-4 flex-none text-indigo-deep" />
                      <span className="text-base leading-relaxed text-slate-900 md:text-lg">
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Tech stack */}
          <section className="bg-white py-20 md:py-28">
            <div className="container-xl grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="eyebrow">Tech stack</div>
                <h2 className="heading-display mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                  What it was built on.
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="flex flex-wrap gap-2">
                  {cs.stack!.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-900/10 bg-slate-50 px-3 py-2 font-mono text-sm text-slate-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="bg-navy py-20 md:py-28">
            <div className="container-xl">
              <div className="eyebrow">Outcomes</div>
              <h2 className="heading-display mt-3 text-3xl font-semibold text-white md:text-4xl">
                What it moved.
              </h2>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {cs.outcomes!.map((o) => (
                  <div
                    key={o.label}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-8"
                  >
                    <div className="font-display text-5xl font-semibold text-white md:text-[56px]">
                      {o.metric}
                    </div>
                    <div className="mt-3 text-sm text-slate-mist">{o.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quote */}
          {cs.quote && (
            <section className="bg-slate-50 py-20 md:py-28">
              <div className="container-xl">
                <figure className="relative mx-auto max-w-3xl rounded-2xl border border-slate-900/10 bg-white p-10 md:p-14">
                  <Quote className="absolute -top-4 left-8 h-10 w-10 rounded-md bg-indigo/15 p-2 text-indigo-deep" />
                  <blockquote className="heading-display text-2xl leading-snug text-slate-900 md:text-3xl">
                    &ldquo;{cs.quote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <div className="font-semibold text-slate-900">
                      {cs.quote.author}
                    </div>
                    <div className="text-slate-ink">{cs.quote.role}</div>
                  </figcaption>
                </figure>
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="bg-white py-20 md:py-28">
          <div className="container-xl max-w-3xl">
            <p className="text-base leading-relaxed text-slate-ink md:text-lg">
              A full write-up for this engagement is coming soon. In the meantime,
              we&apos;re happy to walk through the architecture and outcomes in a
              30-minute call.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book a walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
